import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/interface/employee';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from 'src/service/employee.service';

@Component({
  selector: 'app-pie',
  template: `
    <div class="card">
      <ngx-charts-pie-chart
        [view]="view"
        [scheme]="colorScheme"
        [results]="processedData"
        [gradient]="gradient"
        [legend]="showLegend"
        [legendPosition]="legendPosition"
        [labels]="showLabels"
        [doughnut]="true"
      ></ngx-charts-pie-chart>
    </div>
  `,
})
export class PieComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private http: HttpClient, private emp: EmployeeService) {}

  processedData: { name: string; value: number }[] = [];
  view: [number, number] = [700, 300];
  colorScheme = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#1aa3ff', '#ffff00', '#40ff00', '#ff00bf', '#ff0000'],
  };
  gradient = true;
  showLegend = true;
  legendPosition: LegendPosition = 'below' as LegendPosition;
  showLabels = true;

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    this.emp.getDetails().subscribe(
      (data) => {
        console.log(data);
        this.employees = data;
        this.processData();
      }
    );
  }

  private processData(): void {
    const educationCounts: { [key: string]: number } = {
      'Full Stack Developer': 0,
      'Frontend Developer': 0,
      'Backend Developer': 0,
      'Database Management': 0,
      'UI/UX': 0,
    };

    this.employees.forEach((employee) => {
      const education = this.getCategory(employee.education);
      educationCounts[education] = (educationCounts[education] || 0) + 1;
    });

    this.processedData = Object.keys(educationCounts).map((education) => ({
      name: education,
      value: educationCounts[education],
    }));
  }

  private getCategory(education: string): string {
    if (education.toLowerCase().includes('full stack')) {
      return 'Full Stack Developer';
    } else if (education.toLowerCase().includes('frontend')) {
      return 'Frontend Developer';
    } else if (education.toLowerCase().includes('backend')) {
      return 'Backend Developer';
    } else if (education.toLowerCase().includes('database')) {
      return 'Database Management';
    } else {
      return 'UI/UX';
    }
  }
}


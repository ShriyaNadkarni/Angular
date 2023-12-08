import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from 'src/interface/employee';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(employees: Employee[], filterData: string): Employee[] {
    if (!employees || !filterData) {
      return employees;
    }

    filterData = filterData.toLowerCase();
    console.log("filter not working");
    return employees.filter((emp) =>
      emp.name.toLowerCase().includes(filterData) ||
      emp.gender.toLowerCase() === filterData ||
      emp.jobTitle.toLowerCase() === filterData ||
      emp.department.toLowerCase() === filterData ||
      emp.employeeId.toLowerCase() === filterData
    );
  }

}

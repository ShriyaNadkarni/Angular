import { Pipe, PipeTransform } from '@angular/core';
//import { Employee } from 'src/interface/employee';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(gender: string, name: string): string {
    const salutation = (gender.toLowerCase() === 'male') ? 'MR.' : 'MS.';
    return `${salutation} ${name}`;
  }
}

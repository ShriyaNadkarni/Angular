import { Pipe, PipeTransform } from '@angular/core';
// import { Employee } from 'src/interface/employee';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(gender: string, name: string):string {
    const salutation = (gender.toLowerCase() === 'male') ? 'MR.' : 'MS.';
    return `${salutation} ${name}`;
  }
}
// gender.pipe.ts
// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'gender'
// })
// export class GenderPipe implements PipeTransform {
//   transform(name: string, gender: string): string {
//     if (gender.toLowerCase() === 'male') {
//       return 'Mr. ' + name;
//     } else if (gender.toLowerCase() === 'female') {
//       return 'Ms. ' + name;
//     } else {
//       return name; // default to original name if gender is not specified or unknown
//     }
//   }
// }

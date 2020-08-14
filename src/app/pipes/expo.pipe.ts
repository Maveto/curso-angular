import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expo'
})
export class ExpoPipe implements PipeTransform {

  transform(value: any, exp?: any): any {
    return Math.pow(value,isNaN(exp) ? 1 : exp);
  }

}
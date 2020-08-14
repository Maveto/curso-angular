import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';

@Pipe({
  name: 'impure',
  pure: false
})
export class ImpurePipe implements PipeTransform {

  transform(data: number[], args?: any): any {
    return data.filter(s => s%2===0);
  }

}
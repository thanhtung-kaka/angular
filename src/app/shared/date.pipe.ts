import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: string|number|Date, ...args: unknown[]): unknown {
    return null;
  }

}

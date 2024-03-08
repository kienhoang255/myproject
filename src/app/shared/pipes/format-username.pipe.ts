import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatUsername',
})
export class FormatUsernamePipe implements PipeTransform {
  transform(value: string): unknown {
    return value ? value[0] : '';
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
  transform(text: string, maxLen: number): string {
    return (text.length > maxLen)
      ? text.substring(0, maxLen) + ' ...'
      : text;
  }
}

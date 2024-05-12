import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringCustom',
  standalone: true,
})
export class StringCustomPipe implements PipeTransform {
  transform(value: string, args?: string): string {
    switch (args) {
      case 'upper':
        return value.toUpperCase();
      case 'lower':
        return value.toUpperCase();
    }
    return value;
  }
}

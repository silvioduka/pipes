import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: any, targetUnit: string): unknown {
    if (!value) {
      return '';
    }

    switch (targetUnit) {
      case 'km':
        return (value * 1.60934) + targetUnit;
      case 'm':
        return (value * 1.60934 * 1000) + targetUnit;
      case 'cm':
        return (value * 1.60934 * 1000 * 1000) + targetUnit;
      default:
        throw new Error('Target unit not supported');
    }
  }
}

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'solidDays',
    standalone: true
})

export class transPipe implements PipeTransform{
    transform(value: any): number {
        if(!value) return 0;

        const numericValue = typeof value === 'string' ? parseInt(value, 10) : value;
        return isNaN(numericValue) ? 0 : Math.abs(numericValue);
    }
}
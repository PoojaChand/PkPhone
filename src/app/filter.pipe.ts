import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abcd'
})
export class FilterPipe implements PipeTransform {

 /* transform(value: unknown, ...args: unknown[]): unknown {
    return null; */
    transform(items: any[], srchText: string): any[] {
      if(!items) return [];
      if(!srchText) return items;
      srchText = srchText.toLowerCase();
  return items.filter( it => {
    console.log(it);
        return it.name.toLowerCase().includes(srchText);
      });
     }
  }

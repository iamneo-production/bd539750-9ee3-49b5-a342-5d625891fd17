import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, sName: string, nameValue: string): any {
    if (sName == "") return value;
    const array: any[] = [];
    for (const item of value) {
      let name: string = item[nameValue];
      name = name.toLowerCase();
      if (name.includes(sName.toLowerCase())) {
        array.push(item);
      }
    }

    return array;
  }


}
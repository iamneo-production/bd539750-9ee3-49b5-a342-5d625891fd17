import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, sName: string, nameValue: string): any {
    if (sName == "") return value;
    const array: any[] = [];
    for (let i = 0; i < value.length; i++) {
      let name: string = value[i][nameValue];
      name = name.toLowerCase();
      if (name.includes(sName.toLowerCase())) {
        array.push(value[i]);
      } 
    }
    return array;
  }


}
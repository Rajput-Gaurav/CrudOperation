import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    return value.filter(function(search) {
      return search.productName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    })
  }

}

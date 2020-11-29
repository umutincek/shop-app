import { Product } from './Product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: Product[], filterText: string): Product[] {
    filterText ? filterText.toLocaleLowerCase() : null;
    return filterText
      ? value.filter(
          (prod: Product) =>
            prod.name.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './model/item.model';

@Pipe({
    name: 'itemFilter'
})

export class ItemFilterPipe implements PipeTransform {
    transform(items: Item[], filterType: string): any {
        if (filterType == 'all') {
            return items;
        }
        else {
            return items.filter(item => item.type == filterType);
        }
        // return items.filterType(item => item.type.indexOf(filterType) !== -1);
    }
}
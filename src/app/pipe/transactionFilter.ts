import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from '../model';

@Pipe({
  name: 'transactionFilter'
})
export class TransactionFilterPipe implements PipeTransform {
  transform(items: Transaction[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();
    return items.filter( transaction => {
      return transaction.merchant.toLowerCase().includes(searchText);
    });
   }
}

import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from '../model';

@Pipe({
  name: 'transactionSort'
})
export class TransactionSortPipe implements PipeTransform {
  transform(items: Transaction[], key:string, order:string = 'asc'): any[] {
    if(!items) return [];
    if(!key) return items;

    return items.sort(this.compareValues(key, order));
   }

   compareValues(key:string, order:string = 'asc'):any {
     return function(a:Transaction , b:Transaction ) {
       if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
         return 0;
       }
       if(key === 'merchant'){
         const varA = (key === 'merchant') ?
           a[key].toUpperCase() : a[key];
         const varB = (key === 'merchant') ?
           b[key].toUpperCase() : b[key];

         let comparison = 0;
         if (varA > varB) {
           comparison = 1;
         } else if (varA < varB) {
           comparison = -1;
         }
         return (
           (order == 'desc') ? (comparison * -1) : comparison
         );
       }
       else {
         if(key === 'transactionDate'){
           return ((order == 'desc') ? (a[key] - b[key]) : (b[key] - a[key]));
         } else {
            return ((order == 'asc') ? (a[key] - b[key]) : (b[key] - a[key]));
         }
       }
     };
   }
}

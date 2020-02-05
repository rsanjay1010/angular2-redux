import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { first } from 'rxjs/operators';
import { NgRedux } from '@angular-redux/store';
import { TransactionAPIService } from '../services/transaction.service';
import { TransactionAPIActions } from '../store/actions';
import { Transaction } from '../model';

@Component({
    selector: 'transferList',
    styleUrls: ['transferlist.component.css'],
    templateUrl: 'transferlist.component.html'
})

export class TransferListComponent implements OnInit {
    currentSortKey='transactionDate';
    currentSortOrder='asc';
    transactions:Transaction[] = [];
    searchText = '';

    constructor(private ngRedux: NgRedux<any>, private transactionService:TransactionAPIService, private actions:TransactionAPIActions) {}
    //constructor(private transactionService:TransactionAPIService) {}


    /*constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }*/

    ngOnInit() {
      this.ngRedux.select('transactions').subscribe((list:Transaction[]) => {
        this.transactions = list;
        console.log("list >> "+list);
      });
      this.loadAllTransactions();
    }

    sortList(property:string) {
      console.log(property);
      if (this.currentSortKey !== property) {
        this.currentSortKey = property;
      } else {
        this.currentSortOrder = this.currentSortOrder === 'asc'?'desc':'asc';
      }
    }

    clearSearch() {
      this.searchText = "";
    }

    private loadAllTransactions() {
        this.transactionService.getAll().subscribe((transactions:any) => {
          //this.transactions = transactions.data;
          this.actions.loadDataSucceeded(transactions.data);
        });
          //this.actions.loadDataSucceeded(transactions));
    }

}

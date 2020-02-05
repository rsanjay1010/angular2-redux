import { Injectable } from '@angular/core';
import { Transaction } from '../model';
import { NgRedux } from '@angular-redux/store';

@Injectable()
export class TransactionAPIActions {
  static readonly LOAD_SUCCEEDED = 'LOAD_SUCCEEDED';
  static readonly ADD_TRANSACTION = 'ADD_TRANSACTION';

  constructor (private ngRedux: NgRedux<any>) {}

  loadDataSucceeded = (payload: Transaction[]) => this.ngRedux.dispatch({ type: TransactionAPIActions.LOAD_SUCCEEDED, payload })

  addTransaction = (payload: Transaction) => this.ngRedux.dispatch({ type: TransactionAPIActions.ADD_TRANSACTION, payload })
}

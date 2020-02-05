import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';

import { Transaction } from '../model';


@Injectable()
export class TransactionAPIService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Transaction[]>('../../assets/transactions.json');
  }
}

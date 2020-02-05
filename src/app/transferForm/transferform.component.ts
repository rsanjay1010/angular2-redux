import { Component, OnInit } from '@angular/core';
//import { first } from 'rxjs/operators';
//import { User } from '../_models';
//import { UserService } from '../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transaction } from '../model';
import { TransactionAPIActions } from '../store/actions';

@Component({
    selector: 'transferForm',
    styleUrls: ['transferForm.component.css'],
    templateUrl: 'transferForm.component.html'
})

export class TransferFormComponent implements OnInit {
    fromAccount:string;
    transactionForm: FormGroup;
    curBalance = 5824.76;
    submitted = false;
    curTransObj:Transaction;
    allFieldValid = false;
    /*currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
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
    constructor(private formBuilder: FormBuilder, private actions:TransactionAPIActions) {
    }

    ngOnInit() {
      this.transactionForm = this.formBuilder.group({
          toAccount: ['', Validators.required],
          amount: ['', Validators.required]
      });
      this.updateFromAccountField();
      this.transferAmount = this.transferAmount.bind(this);
    }

    resetForm() {
      this.transactionForm.controls['toAccount'].setValue('');
      this.transactionForm.controls['amount'].setValue('');
      this.transactionForm.controls['amount'].setErrors({'maxLimitFail': false});
      this.transactionForm.controls['amount'].setErrors({'balanceOver': false});
    }

    updateFromAccountField() {
      this.fromAccount = `Free Checking(4692) - $${this.curBalance.toFixed(2)}`;
    }

    onSubmit() {
      if (this.transactionForm.controls.amount.value > 500) {
        console.log("alle");
        this.transactionForm.controls.amount.setErrors({'maxLimitFail': true});
      } else if (this.transactionForm.controls.amount.value > this.curBalance) {
        this.transactionForm.controls.amount.setErrors({'balanceOver': true});
      }
      this.submitted = true;
      if (!this.transactionForm.invalid) {
        this.allFieldValid = true;
        this.curTransObj = {
          amount: this.transactionForm.controls.amount.value,
          categoryCode: '#ccc',
          merchant: this.transactionForm.controls.toAccount.value,
          merchantLogo:'',
          transactionDate: new Date().getTime(),
          transactionType: 'Online Transfer'
        };
        console.log(this.curTransObj);

      }
    }

    transferAmount() {
      console.log(this.curTransObj);
      this.submitted = false;
      this.allFieldValid = false;
      this.actions.addTransaction(this.curTransObj);
      this.curBalance = this.curBalance - parseFloat(this.curTransObj.amount);
      this.updateFromAccountField();
      this.resetForm();
    }
}

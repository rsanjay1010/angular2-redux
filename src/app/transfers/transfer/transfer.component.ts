import { Component, OnInit, Input } from '@angular/core';
//import { first } from 'rxjs/operators';

import { Transaction } from '../../model';

@Component({
    selector: 'transfer',
    styleUrls: ['transfer.component.css'],
    templateUrl: 'transfer.component.html'
})

export class TransferComponent implements OnInit {

   @Input() data:Transaction;
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
    }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from '../../model';

@Component({
    selector: 'transferPreview',
    templateUrl: 'transferp.component.html'
})

export class TransferPreview {

    @Input() data:Transaction;
    @Input() fromAccount:string;
    @Output() transferAmount: EventEmitter<any> = new EventEmitter();
}

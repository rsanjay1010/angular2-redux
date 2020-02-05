export class Transaction {
    amount: string;
    categoryCode: string;
    merchant: string;
    merchantLogo: string;
    transactionDate: number;
    transactionType:string
}

export interface ITransactionList {
  transactions:Array<Transaction>;
}

export class Transaction {
    id: number; //date.now()
    Title: string;
    amount: number;
    type: string; //income or expense
    category: string;
    date: Date;

    constructor(Title: string, amount: number, type: string, category: string = "") {
        this.id = Date.now();
        this.Title = Title;
        this.amount = amount;
        this.type = type;
        this.category = category;
        this.date = new Date();
    }
}
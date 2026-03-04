export interface Transaction {
    id: number; //date.now()
    Title: string;
    amount: number;
    type: string; //income or expense
    category: string;
    date: Date;
}
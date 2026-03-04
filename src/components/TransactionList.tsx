import type { Transaction } from "../interface/Transaction";
import { TransactionItem } from "./TransactionItem";
import { useState } from "react";

export function TransactionList(){
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    return (
        <div>
            <h2>Transaction List</h2>
            {transactions.length === 0 ? (
                <p>No transactions.</p>
            ) : (
                transactions.map((transaction) => (
                    <TransactionItem key={transaction.id} transaction={transaction} />
                ))
            )}
        </div>
    )
}
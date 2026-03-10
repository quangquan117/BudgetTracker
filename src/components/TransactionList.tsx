import type { Transaction } from "../interface/Transaction";
import { TransactionItem } from "./TransactionItem";
import { useState } from "react";
import { TransactionForm } from "./TransactionForm";

export function TransactionList({ balance, setBalance }: { balance: number, setBalance: React.Dispatch<React.SetStateAction<number>> }) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [showForm, setShowForm] = useState(false);

    return (
        <div>
            <button onClick={() => setShowForm(!showForm)}>new Transaction</button>
            <TransactionForm hidden={!showForm} transactions={transactions} setTransactions={setTransactions} balance={balance} setBalance={setBalance} />
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
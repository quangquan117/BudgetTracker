import type { Transaction } from "../interface/Transaction";
import { TransactionItem } from "./TransactionItem";
import { useState } from "react";
import { TransactionForm } from "./TransactionForm";
import { Firlter } from "./filtre";

export function TransactionList({ balance, setBalance }: { balance: number, setBalance: React.Dispatch<React.SetStateAction<number>> }) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [transactionsToShow, setTransactionsToShow] = useState<Transaction[]>(transactions);
    const [showForm, setShowForm] = useState(false);

    console.log(transactions);
    console.log(transactionsToShow);
    return (
        <div>
            <button onClick={() => setShowForm(!showForm)}>new Transaction</button>
            <TransactionForm hidden={!showForm} transactions={transactions} setTransactions={setTransactions} balance={balance} setBalance={setBalance} setTransactionsToShow={setTransactionsToShow} />
            <h2>Transaction List</h2>
            <Firlter transactions={transactions} setTransactionsToShow={setTransactionsToShow} />
            {transactionsToShow.length === 0 ? (
                <p>No transactions.</p>
            ) : (
                transactionsToShow.map((transaction) => (
                    <TransactionItem key={transaction.id} transaction={transaction} />
                ))
            )}
        </div>
    )
}
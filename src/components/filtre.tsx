import type { Transaction } from "../interface/Transaction";

export function Firlter({transactions, setTransactionsToShow} : {transactions: Transaction[], setTransactionsToShow: React.Dispatch<React.SetStateAction<Transaction[]>>}) {
    
    const Income = () => {
        const incomeTransactions = transactions.filter(transaction => transaction.type === "Income");
        setTransactionsToShow(incomeTransactions);
    }

    const Expense = () => {
        const expenseTransactions = transactions.filter(transaction => transaction.type === "Expense");
        setTransactionsToShow(expenseTransactions);
    }

    const All = () => {
        setTransactionsToShow(transactions);
    }

    return (
        <div>
            <h2>Filter Transactions</h2>
            <button onClick={Income}>Income</button>
            <button onClick={Expense}>Expense</button>
            <button onClick={All}>All</button>
        </div>
    )
}
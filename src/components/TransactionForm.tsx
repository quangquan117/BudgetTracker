import type { Transaction } from "../interface/Transaction";

export function TransactionForm( {hidden, transactions, setTransactions, balance, setBalance, setTransactionsToShow} : 
    {hidden: boolean, transactions: Transaction[], setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>, balance: number, setBalance: React.Dispatch<React.SetStateAction<number>>, setTransactionsToShow: React.Dispatch<React.SetStateAction<Transaction[]>>} ) {
    const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newTransaction: Transaction = {
            id: Date.now(),
            Title: formData.get("title") as string,
            amount: parseFloat(formData.get("amount") as string),
            type: formData.get("type") as string,
            category: formData.get("category") as string,
            date: new Date()
        }
        if (newTransaction.type === "Income") {
            setBalance(balance + newTransaction.amount);
        } else if (newTransaction.type === "select Type") {
            alert("Please select a valid transaction type.");
            return;
        } else {
            setBalance(balance - newTransaction.amount);
        }
        setTransactions([...transactions, newTransaction]);
        setTransactionsToShow([...transactions, newTransaction]);
        console.log(newTransaction);
    }    

    return (
        <div>
            <h2>Add Transaction</h2>
            <form onSubmit={onsubmit} hidden={hidden}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" required />
                </div>
                <div>
                    <label htmlFor="amount">Amount:</label>
                    <input type="number" id="amount" name="amount" required />
                </div>
                <div>
                    <label htmlFor="type">Type:</label>
                    <select id="type" name="type" required>
                        <option value="">Select Type</option>
                        <option value="Income">Income</option>
                        <option value="Expense">Expense</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" required />
                </div>
                <button type="submit">Add Transaction</button>
            </form>
        </div>
    )
}
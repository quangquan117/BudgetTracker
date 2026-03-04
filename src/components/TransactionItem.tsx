import type { Transaction } from "../interface/Transaction"

export function TransactionItem({ transaction }: { transaction: Transaction }) {
    return (
        <div>
            <h3>{transaction.Title}</h3>
            <p>Amount: ${transaction.amount.toFixed(2)}</p>
            <p>Type: {transaction.type}</p>
            <p>Date: {transaction.date.toLocaleDateString()}</p>
            <p>Category: {transaction.category}</p>
        </div>
    )
}
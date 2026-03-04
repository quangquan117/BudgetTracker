export function Balance({ your_balance }: { your_balance: number }) {
    return (
        <div className="balance">
            <h2>Balance: ${your_balance.toFixed(2)}</h2>
        </div>
    );
}
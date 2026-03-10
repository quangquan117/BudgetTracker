import { useState } from 'react'
import './App.css'
import { Balance } from './components/balance'
import { TransactionList } from './components/TransactionList'

function App() {
    const [count, setCount] = useState(0)
    const [balance, setBalance] = useState(1000)

    return (
        <>
            <Balance your_balance={balance} />
            <TransactionList balance={balance} setBalance={setBalance} />
        </>
    )
}

export default App

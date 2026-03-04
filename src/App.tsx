import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Balance } from './components/balance'
import { TransactionItem } from './components/TransactionItem'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Balance your_balance={1000} />
            <TransactionItem transaction={{
                id: 1,
                Title: "Grocery Shopping",
                amount: 150.75,
                type: "Expense",
                date: new Date(),
                category: "Food"
            }} />
        </>
    )
}

export default App

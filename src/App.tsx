import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Balance } from './components/balance'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Balance your_balance={1000} />
        </>
    )
}

export default App

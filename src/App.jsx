import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="main">
      <div className="heading">Welcome to Gurukul IAS </div>
      <div className="submain">Website is comming soon!</div>
     </div>
    </>
  )
}

export default App

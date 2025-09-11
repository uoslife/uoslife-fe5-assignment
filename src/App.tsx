import { useState } from 'react'
import Logo from './assets/app_icon.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img src={Logo} className="logo" alt="app logo" />
      </div>
      <h1>5기 프론트 시대생 onboarding ✈️</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App

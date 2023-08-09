import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import SankeyComponent from './sankey';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SankeyComponent />
       
    </>
  )
}

export default App

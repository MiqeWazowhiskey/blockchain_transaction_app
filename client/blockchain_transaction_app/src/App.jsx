import { useState } from 'react'
import { Home } from './Pages/Home'
import { Routes,Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App

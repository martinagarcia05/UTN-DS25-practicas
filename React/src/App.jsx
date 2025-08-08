import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LinkB  from './components/linkLibro'
import Lista from './components/listaLibros'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/books/:id" element={<LinkB/>} />
      </Routes>
    </Router>
  )
}

export default App;
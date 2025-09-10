import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LinkB  from './components/linkLibro'
import Lista from './components/listaLibros'
import Cabecera from './components/nabvar';
import ModLibro from './pages/ModLibro';
import AgregarLibro from './pages/AgregarLibro';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Cabecera/>
      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/books/:id" element={<LinkB/>} />
        <Route path="/modificar-libro/:id" element={<ModLibro/>} />
        <Route path="/nuevoLibro" element={<AgregarLibro/>} />
      </Routes>
    </Router>
  )
}

export default App;
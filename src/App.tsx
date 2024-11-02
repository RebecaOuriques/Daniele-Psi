import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sobre from './pages/sobre/Sobre'
import Home from './pages/home/Home'
import Contato from './pages/contato/Contato'
import './index.css';
import Footer from './components/footer/Footer'
import Servico from './pages/servico/Servico'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/servico" element={<Servico />} />

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Notfound from './pages/NotFound'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Notfound />} />
          <Route path='/shop/:id' element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App

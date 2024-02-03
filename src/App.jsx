import { useState } from 'react'
import './App.css'
import Navbar from './components/Home/Navbar'
import { Route, Routes } from 'react-router-dom'
import Inicio from './Pages/Inicio'
import Woman from './Pages/Woman'
import Child from './Pages/Child'
import Man from './Pages/Man'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenCart, setIsOpenCart] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleOpenCarr = () => {
    setIsOpenCart(!isOpenCart)
    console.log("click")
  }

  return (
    <main className='bg-OrangeColor min-h-screen font-Kumbh '>
      {
        isOpen &&
        <main className='md:hidden bg-black/30 transition-all duration-1000 absolute top-0 bottom-0 left-0 right-0  ' ></main>
      }
      <section className='max-w-[1000px] bg-white min-h-screen m-auto '>
        <Navbar handleOpen={handleOpen} isOpen={isOpen} handleOpenCarr={handleOpenCarr} isOpenCart={isOpenCart} />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='Forwomans' element={<Woman />} />
          <Route path='Forchild' element={<Child />} />
          <Route path='Formen' element={<Man />} />
        </Routes>
      </section>
    </main>
  )
}

export default App

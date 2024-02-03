import React from 'react'
// import { Menu } from '../../Icons/Icons'
import './css/Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = ({ handleOpen, isOpen, handleOpenCarr,
    isOpenCart }) => {
    return (
        
        <main className='m-auto '>
            
            <header className='bg-black text-white flex justify-between items-center
            px-4 py-5 m-auto  '>
                <article className='flex items-center gap-4 justify-start pr-4 h-[40px] w-[70%] '>
                    <button onClick={handleOpen} className={` 
                    ${isOpen ? `bx bx-x z-30 text-sm bx-spin w-[30px] aspect-square 
                    duration text-white 
                    rounded-full bg-black md:hidden
                    `
                        :
                        'bx bx-menu text-3xl md:hidden '}`}></button>
                    <Link to={'/'} className='font-extrabold flex items-center text-[1.5rem]
                    '>sneakers</Link>
                    <section className='hidden md:block p-2 '>
                        <ul className='flex gap-4 text-slate-300 font-extralight '>
                            <li>Collections</li>
                            <li>Men</li>
                            <li>Woman</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </section>
                </article>

                <article className='flex items-center justify-end  gap-4 w-[40%] h-[40px] ' >
                    <button onClick={handleOpenCarr}>
                        {/* <Cart /> */}
                        <i className='text-3xl bx bx-cart'></i>
                    </button>
                    {
                        isOpenCart && (
                            <div className='bg-white   w-[95%] h-[40%] rounded-xl
                            absolute left-[50%] -translate-x-1/2 top-[50%] -translate-y-[80%]   '>
                                <p onClick={handleOpenCarr} className='absolute top-1 right-2 bg-red-500 w-[30px] aspect-square flex justify-center items-center rounded-full '>x</p>
                                <h2 className='px-4 py-2 my-2 font-extrabold '>Cart</h2>
                                <div className='bg-black/20 w-[98%] h-[.1px] flex justify-center m-auto '></div>
                                <div>
                                    <img src="" alt="" />
                                    <p></p>
                                    <p></p>
                                </div>
                                <button></button>
                            </div>
                        )
                    }
                    <img className='h-[70%] ' src="./img/image-avatar.png" alt="PhotoUser" />
                </article>
            </header>
            {
                isOpen &&
                (<section className='md:hidden absolute left-0 top-0 bg-white z-20  min-h-screen w-[60%] shadow-xl shadow-black '>
                    <ul className='bg-white absolute top-[15%] left-4 grid gap-4 p-4 font-bold font-Kumbh '>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </section>)
            }
        </main>
    )
}

export default Navbar
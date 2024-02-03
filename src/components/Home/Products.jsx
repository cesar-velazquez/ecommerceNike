import React from 'react'
import { Link } from 'react-router-dom'
import WomenSlide from './WomenSlide'
import ChildSlide from './ChildSlide'
import MenSlide from './MenSlide'

const Products = () => {
    return (
        <main className='m-auto '>
            <section>
                <h1 className='text-center max-w-[500px] font-bold text-xl
                bg-red-500 w-[90%] m-auto sm:w-[60%] ' >Para Mujer</h1>
                                
                <section className='py-4 relative h-[350px] max-w-[500px] m-auto'>
                    <article className='absolute top-[4.5rem] h-[160px] w-[90%]
                left-1/2 -translate-x-1/2 z-10
                sm:top-[1.2rem] '>
                        <WomenSlide />
                    </article>
                    <section className='relative bg-slate-950/50 rounded-md z-0 
                w-[min(400px,_100%)] m-auto top-28 h-[160px] 
                sm:h-[180px] sm:w-[600px] sm:left-[50%] sm:-translate-x-1/2 sm:top-24 '>
                        <section className='absolute bottom-3 p-2 bg-black w-[90%] left-[50%]
                        -translate-x-1/2 sm:bottom-6 '>
                            <div className='flex justify-center items-center'>
                                <Link to={'/Forwomans'} className='flex gap-2 font-bold text-white
                            hover:bg-white hover:text-black transition-colors duration-700 
                            w-[70%] h-[30px]
                            items-center justify-center 
                            sm:w-[50%]
                            '>Ver Todos los Productos </Link>
                            </div>
                        </section>
                    </section>
                </section>
            </section>


            <section>
                <h1 className='text-center max-w-[500px] font-bold text-xl
                bg-red-500 w-[90%] m-auto sm:w-[60%] ' >Para Niños</h1>

                <section className='py-4 relative h-[350px] max-w-[500px] m-auto'>
                    <article className='absolute top-[4.5rem] h-[160px] w-[90%]
                left-1/2 -translate-x-1/2 z-10
                sm:top-[1.2rem] '>
                        <ChildSlide />
                    </article>
                    <section className='relative bg-slate-950/50 rounded-md z-0 
                w-[min(400px,_100%)] m-auto top-28 h-[160px] 
                sm:h-[180px] sm:w-[600px] sm:left-[50%] sm:-translate-x-1/2 sm:top-24 '>
                        <section className='absolute bottom-3 p-2 bg-black w-[90%] left-[50%]
                        -translate-x-1/2 sm:bottom-6 '>
                            <div className='flex justify-center items-center'>
                                <Link to={'Forchild'} className='flex gap-2 font-bold text-white
                            hover:bg-white hover:text-black transition-colors duration-700 
                            w-[70%] h-[30px]
                            items-center justify-center 
                            sm:w-[50%]
                            '> Ver Todos los Productos </Link>
                            </div>
                        </section>
                    </section>
                </section>
            </section>


            <section>
                <h1 className='text-center max-w-[500px] font-bold text-xl
                bg-red-500 w-[90%] m-auto sm:w-[60%] ' >Para Hombre</h1>

                <section className='py-4 relative h-[350px] max-w-[500px] m-auto'>
                    <article className='absolute top-[4.5rem] h-[160px] w-[90%]
                left-1/2 -translate-x-1/2 z-10
                sm:top-[1.2rem] '>
                        <MenSlide />
                    </article>
                    <section className='relative bg-slate-950/50 rounded-md z-0 
                w-[min(400px,_100%)] m-auto top-28 h-[160px] 
                sm:h-[180px] sm:w-[600px] sm:left-[50%] sm:-translate-x-1/2 sm:top-24 '>
                        <section className='absolute bottom-3 p-2 bg-black w-[90%] left-[50%]
                        -translate-x-1/2 sm:bottom-6 '>
                            <div className='flex justify-center items-center'>
                                <Link to={'Formen'} className='flex gap-2 font-bold text-white
                            hover:bg-white hover:text-black transition-colors duration-700 
                            w-[70%] h-[30px]
                            items-center justify-center 
                            sm:w-[50%]
                            '>Ver Todos los Productos </Link>
                            </div>
                        </section>
                    </section>
                </section>
            </section>

        </main>
    )
}

export default Products
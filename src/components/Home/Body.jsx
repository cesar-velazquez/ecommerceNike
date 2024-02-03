import React from 'react'
import Products from './Products'

const Body = () => {
    return (
        <main className=' min-h-screen m-auto '>
            <h4 className='text-orange-400 px-4 py-2 text-[13px] font-bold
            sm:text-xl '>Sneaker Company</h4>
            <h1 className='text-VeryDarkBlue font-bold px-4 text-[1.5rem] leading-7 
            sm:text-[2rem] '>Fall Limited Edition Sneakers</h1>
            <p className='px-4 py-2 text-DarkgrayishBlue/80 font-medium text-[13px]
            sm:text-[1.2rem] sm:py-4 '>These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <Products/>

        </main>
    )
}

export default Body
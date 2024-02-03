import ProductsChild from '../../Data/Imgschildren.json'
import { useEffect, useState } from 'react'

const ListofChild = () => {
    const [productChildren, setProductChildren] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setProductChildren(ProductsChild);
        }, 500)
    }, [])

    return (
        <main className='
        bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-200 via-green-200 to-green-500
        min-h-screen p-4 grid gap-8 py-6 text-white'>
            {
                productChildren.map((product, index) => (
                    <section key={index}
                        className='grid gap-1  w-[250px] m-auto '>
                        <div className=' '>
                            <img className='bg-black/50 rounded-t-2xl ' src={product.image} alt={product.alt} />
                        </div>
                        <div className='bg-black/70 p-4 '>
                            <h1 className='font-bold text-base ' >{product.title}</h1>

                            <div className='flex justify-between bg-black/30 rounded-xl p-2 '>
                                <div>
                                    <p>Ahora</p>
                                    <p className=' '>{product.price}</p>
                                </div>

                                <div>
                                    <p>Antes</p>
                                    <span className='text-slate-400 relative '>{product.antes}
                                        <div className='w-[100%] h-[1px] absolute bg-black top-[50%] -translate-y-1/2 '></div>
                                    </span>
                                </div>
                            </div>
                            <div className='w-[100%] bg-red-300 text-center p-2 my-3 
                                rounded-3xl  '>
                                <button className='flex justify-center items-center 
                                    w-[90%] m-auto '>{product.agregar} <i className='bx bx-cart-add text-xl '></i></button>
                            </div>
                        </div>
                    </section>
                ))
            }
        </main>
    )
}

export default ListofChild
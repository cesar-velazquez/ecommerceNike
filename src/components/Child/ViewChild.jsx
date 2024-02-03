import ListofChild from './ListofChild'


const ViewChild = () => {

    return (
        <div className='bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-200 via-green-200 to-green-500
        p-4 '>
            <h1 className='pb-4 font-bold '>Niños</h1>
            <ListofChild />
        </div>
    )
}

export default ViewChild
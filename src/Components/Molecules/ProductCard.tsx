import { useNavigate } from 'react-router-dom'
import Card from '../Card'

const ProductCard = () => {
    const navigate = useNavigate()
    return <div className="flex justify-center items-center mt-5">
        <div>
            <p className="uppercase text-[#3B97CB] mb-4 font-bold">Your most ordered</p>
            <Card className='h-[185px] relative text-white'>
                <img src="/images/p2.png" className="w-full absolute inset-0 h-full object-cover cursor-pointer" onClick={() => navigate('/order')} />
                <div className='absolute z-10 bottom-0 p-3 bg-gradient-to-t from-[#0099EE] to-transparent w-full'>
                    <h3 className='font-bold text-2xl'>Dry Cleaning</h3>
                    <p className='font-semibold'>12x | total of $ 4.000</p>
                </div>
            </Card>
        </div>
    </div>
}

export default ProductCard
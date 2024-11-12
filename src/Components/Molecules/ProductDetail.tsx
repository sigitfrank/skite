import { useState } from 'react'
import ArrowBack from '../Icons/ArrowBack'
import { useNavigate } from 'react-router-dom'
import { formatAmount } from '../../Helpers/formatCurrency'


const ProductDetail = () => {
    const navigate = useNavigate()
    const [total, setTotal] = useState(0)

    const increment = () => setTotal(prev => prev + 1)
    const decrement = () => setTotal(prev => prev - 1 < 0 ? 0 : prev - 1)

    return <div className="flex flex-col items-center justify-center">
        <div className='min-w-[350px] max-w-[450px]'>
            <div className='relative rounded-br-2xl rounded-bl-2xl overflow-hidden h-[350px]'>
                <div className='absolute top-7 left-7 cursor-pointer' onClick={() => navigate(-1)}>
                    <ArrowBack fill='#0099EE' />
                </div>
                <div className='absolute bg-gradient-to-t from-[#0099EE] to-transparent bottom-0 left-0 right-0 h-[135px]'>
                </div>
                <img src="/images/p2.png" className='w-full object-cover h-full' />
            </div>

            <div className='mt-2 p-4'>
                <span className='text-[#0099EE] bg-[#CAECFF] p-2 rounded-md'>Dry Clean</span>
                <h1 className='text-4xl font-bold text-[#0099EE] mt-3'>T - Shirt</h1>
                <span className='text-[#0099EE] font-semibold mb-3 block text-lg'>{formatAmount(6)}/pc</span>
                <p className='text-[#838383]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis doloribus minima qui aspernatur. Accusamus cumque aspernatur enim eos voluptate, praesentium itaque aliquid nam facere neque optio ad voluptatum numquam debitis rerum minima odit dolores explicabo consectetur deleniti totam. Sit ut laboriosam ratione mollitia doloribus repellat laborum fugiat beatae quis labore?</p>
            </div>

            <div className='p-4 flex gap-3 items-center justify-center'>
                <div className='flex-1 flex justify-end'>
                    <div className={`h-[30px] w-[30px] rounded-full flex justify-center items-center cursor-pointer ${total <= 0 ? 'bg-[#E0E0E0]' : 'bg-[#0099EE]'}`} onClick={decrement}>
                        <span className='text-white text-[24px] relative -top-[2px]'>-</span>
                    </div>
                </div>
                <div className='flex-[0.5]'>
                    <input type="text" className="w-full border border-blue-300 rounded-lg p-2 text-gray-400 text-center" value={total} />
                </div>
                <div className='flex-1 flex justify-start'>
                    <div className='h-[30px] w-[30px] rounded-full bg-[#0099EE] flex justify-center items-center cursor-pointer' onClick={increment}>
                        <span className='text-white text-[24px] relative -top-[2px]'>+</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ProductDetail
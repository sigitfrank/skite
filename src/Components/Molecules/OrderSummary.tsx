import { useNavigate } from 'react-router-dom'
import Card from '../Atoms/Card'
import ArrowBack from '../Atoms/Icons/ArrowBack'
import ChatIcon from '../Atoms/Icons/Chat'
import { useQuery } from '@tanstack/react-query'
import { getAllProducts } from '../../Api'
import { formatAmount } from '../../Helpers/formatCurrency'
import { Product } from '../../Types/product'

const OrderSummary = () => {
    const navigate = useNavigate()

    const productsQuery = useQuery<{ response: Product[] }>({
        queryKey: ['products'],
        queryFn: getAllProducts
    })
    const products = productsQuery.data?.response ?? []
    const slicedProducts = products.slice(0, 3)

    const totalOrder = slicedProducts.reduce((acc, current) => {
        return acc + current.price
    }, 0)

    return <div className="flex flex-col items-center justify-center my-5">
        <div className='w-[350px] mb-7 cursor-pointer' onClick={() => navigate(-1)}>
            <ArrowBack fill='#0099EE' />
        </div>
        <Card className='!h-auto'>
            <p className="uppercase text-white bg-[#0099EE] font-bold p-3 text-center text-3xl">Order Summary</p>
            <p className='text-right text-[#0099EE] mt-3 mr-3 uppercase'>Order #21340</p>
            <div className='p-3 mb-7'>
                <p className='font-bold'>John Doe</p>
                <small className='text-[#525252] block mb-0'>123 Pasir Ris,</small>
                <small className='text-[#525252]'>13810, Singapore</small>
            </div>
            {
                slicedProducts.map(item => {
                    return <div className="flex gap-3 cursor-pointer" key={item.id} onClick={() => navigate('/products/1')}>
                        <div className="flex-1">
                            <img src={item.image} className="w-full object-cover" />
                        </div>
                        <div className="flex-[1.1]">
                            <h3 className="text-[#525252] font-semibold">{item.name}</h3>
                            <span className="text-[#0099EE]">Qty {item.stock}</span>
                        </div>
                        <div className="flex-1">
                            <small className="text-[#535353] block">Total</small>
                            <span className="text-[#0099EE] font-semibold">{formatAmount(item.price)}</span>
                        </div>
                    </div>
                })
            }

            <div className='flex justify-between bg-[#0099EE] font-semibold p-3 text-white mt-5'>
                <span>Total Order</span>
                <span>{formatAmount(totalOrder)}</span>
            </div>

        </Card>
        <button type="button" className="px-6 py-4 bg-[#56E4A0] text-white rounded-lg hover:bg-green-600 w-[350px] mt-7 uppercase font-semibold flex items-center justify-center gap-3">
            <ChatIcon />
            Whatsapp Us
        </button>
    </div>
}

export default OrderSummary
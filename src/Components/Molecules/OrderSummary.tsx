import { useNavigate } from 'react-router-dom'
import Card from '../Card'
import ArrowBack from '../Icons/ArrowBack'
import ChatIcon from '../Icons/Chat'

const items = [`$ 180.00`, `$ 10.00`, `$ 14.00`]

const OrderSummary = () => {
    const navigate = useNavigate()

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
                items.map(item => {
                    return <div className="flex gap-3 cursor-pointer" key={item} onClick={() => navigate('/products/1')}>
                        <div className="flex-1">
                            <img src="/images/p.png" className="w-full object-cover" />
                        </div>
                        <div className="flex-[1.1]">
                            <h3 className="text-[#525252] font-semibold">Bag of Laundry</h3>
                            <span className="text-[#0099EE]">Qty 2</span>
                        </div>
                        <div className="flex-1">
                            <small className="text-[#535353] block">Total</small>
                            <span className="text-[#0099EE] font-semibold">{item}</span>
                        </div>
                    </div>
                })
            }

            <div className='flex justify-between bg-[#0099EE] font-semibold p-3 text-white'>
                <span>Total Order</span>
                <span>$ 204.00</span>
            </div>

        </Card>
        <button type="button" className="px-6 py-4 bg-[#56E4A0] text-white rounded-lg hover:bg-green-600 w-[350px] mt-7 uppercase font-semibold flex items-center justify-center gap-3">
            <ChatIcon />
            Whatsapp Us
        </button>
    </div>
}

export default OrderSummary
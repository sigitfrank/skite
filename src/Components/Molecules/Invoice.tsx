import { useNavigate } from 'react-router-dom'
import Card from '../Card'
import NoteIcon from '../Icons/Note'
import { formatAmount } from '../../Helpers/formatCurrency'

const Invoice = () => {
    const navigate = useNavigate()

    return <div className="flex justify-center items-center mt-5">
        <div>
            <p className="uppercase text-[#3B97CB] mb-4 font-bold">Previous Order</p>
            <Card>
                <div className="flex gap-3 items-center h-full cursor-pointer" onClick={() => navigate('/order')} >
                    <div className="flex-1">
                        <img src="/images/p.png" className="w-full" />
                    </div>
                    <div className="flex-[1.1]">
                        <h3 className="mb-2 text-[#525252] font-semibold">Bag of Laundry</h3>
                        <small className="text-[#535353] block">Total Order</small>
                        <span className="text-[#0099EE] font-semibold">{formatAmount(180)}</span>
                    </div>
                    <div className="flex-1 bg-gradient-to-br from-[#0099EE] to-white h-full flex flex-col justify-center items-center">
                        <NoteIcon />
                        <span className="text-white uppercase font-semibold">Invoice</span>
                    </div>
                </div>
            </Card>
        </div>
    </div>
}

export default Invoice
import React from 'react';
import Card from '../Card';
import { formatAmount } from '../../Helpers/formatCurrency';

const BalanceCard: React.FC = () => {
    return (
        <div className="flex justify-center">
            <div className="w-full h-[125px] bg-[#F36868] absolute top-0 rounded-br-[100px] rounded-bl-[100px]">
            </div>
            <div className="z-10 mt-3 relative">
                <p className="mb-4 text-white text-2xl font-semibold">Welcome, John</p>
                <Card className='relative overflow-hidden flex justify-end items-end pr-5 pb-5'>
                    <div className="absolute -top-[35px] -left-[30px] w-[150px] h-[150px] bg-[#0099EE] rounded-full opacity-80" />
                    <div className="absolute top-4 left-[8.5rem] w-6 h-6 bg-red-400 rounded-full" />
                    <div className="relative z-10 text-center">
                        <p className="text-gray-600 font-medium">Your Balance</p>
                        <p className="text-3xl font-bold text-[#0099EE]">{formatAmount(200)}</p>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default BalanceCard;

import { useContext } from 'react'
import { GlobalStateContext } from '../../../../Store/context'
import UserIcon from '../../../Atoms/Icons/User'

type HeaderProps = {
    title?: string
}
const Header = ({ title }: HeaderProps) => {
    const user = useContext(GlobalStateContext)?.user

    return <div className='bg-white w-full py-3 px-5 flex justify-between items-center'>
        <h1 className='text-3xl font-bold text-[#303030]'>{title ? title : ''}</h1>
        <div className='flex items-center gap-3'>
            <UserIcon fill='#2E3A59' />
            <span className='text-[#0099EE] underline font-semibold'>{user?.name}</span>
        </div>
    </div>
}

export default Header
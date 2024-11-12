import { useContext } from 'react'
import UserIcon from '../Icons/User'
import { GlobalStateContext } from '../../Store/context'

type HeaderProps = {
    title?: string
}
const Header = ({ title }: HeaderProps) => {

    const user = useContext(GlobalStateContext)?.user
    return <div className='bg-white w-full py-3 px-5 flex justify-between items-center'>
        <h1 className='text-3xl font-bold'>{title ? title : ''}</h1>
        <div className='flex items-center gap-3'>
            <UserIcon fill='#2E3A59' />
            <span>{user?.name}</span>
        </div>
    </div>
}

export default Header
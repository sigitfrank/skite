import UserIcon from '../Icons/User'

type HeaderProps = {
    title?: string
}
const Header = ({ title }: HeaderProps) => {
    return <div className='bg-white w-full py-3 px-5 flex justify-between items-center'>
        <h1 className='text-3xl font-bold'>{title ? title : ''}</h1>
        <div className='flex items-center gap-3'>
            <UserIcon fill='#2E3A59' />
            <span>John Doe</span>
        </div>
    </div>
}

export default Header
import { Link } from 'react-router-dom'
import Logo from '../../../Components/Atoms/Logo'
import HomeIcon from '../../../Components/Atoms/Icons/Home'
import ProductIcon from '../../../Components/Atoms/Icons/Product'
import SalesIcon from '../../../Components/Atoms/Icons/Sales'
import SettingIcon from '../../../Components/Atoms/Icons/Setting'

const menus = [
    {
        path: '/',
        title: 'Home',
        Icon: HomeIcon
    },
    {
        path: '/products',
        title: 'Products',
        Icon: ProductIcon
    },
    {
        path: '/sales',
        title: 'Sales',
        Icon: SalesIcon
    },
    {
        path: '/settings',
        title: 'Settings',
        Icon: SettingIcon
    },
]

type SidebarProps = {
    expanded: boolean
    pathname: string
    toggleSidebar: () => void
}

const Sidebar = ({ expanded, pathname, toggleSidebar }: SidebarProps) => {

    return (<div
        className={`fixed left-0 top-0 bottom-0 bg-[#2D9CDB] text-white transition-all duration-300 overflow-hidden ${expanded ? 'w-[250px] opacity-1' : 'opacity-0 w-[0px]'}`}
        style={{ minHeight: '100dvh' }}
    >
        <div className="p-5">
            <div className='flex gap-8 items-center cursor-pointer' onClick={toggleSidebar}>
                <Logo />
                {expanded && <span className='font-bold text-lg'>BeLaundry</span>}
            </div>
            <div className='mt-10'>
                <span className='font-semibold'>Menu</span>
                <ul className='mt-2'>
                    {menus.map(menu => {
                        const isActive = pathname === menu.path
                        return (
                            <li className='mt-5' key={menu.path}>
                                <Link to={menu.path}>
                                    <div className={`flex items-center gap-4 rounded-lg py-2 px-4 transition-colors ${isActive ? 'bg-white' : ''}`}>
                                        <menu.Icon fill={isActive ? '#3B97CB' : '#FFF'} />
                                        {expanded && (
                                            <span className={`${isActive ? 'text-[#3B97CB] font-bold' : 'text-white'}`}>{menu.title}</span>
                                        )}
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </div>)
}

export default Sidebar

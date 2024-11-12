import React, { useState } from 'react'
import Sidebar from '../../Pages/Admin/Components/Sidebar'
import { useLocation } from 'react-router-dom'
import Navbar from '../../Pages/Admin/Components/Navbar'
import useBreakpoint from '../../Hooks/useBreakpoints'

type LayoutProps = {
    children: React.ReactNode
}
const enableExpand = false
const Layout = ({
    children
}: LayoutProps) => {
    const breakpoint = useBreakpoint()
    const isMobile = breakpoint === 'xs'
    const [expanded, setExpanded] = useState(true)
    const location = useLocation()
    const pathname = location.pathname

    const toggleSidebar = () => enableExpand && setExpanded(prev => !prev)
    return (<div>
        {isMobile && <Navbar />}
        <div className='flex items-start'>
            {!isMobile && <Sidebar
                expanded={expanded}
                pathname={pathname}
                toggleSidebar={toggleSidebar}
            />}
            <div className='flex-1' style={{
                marginLeft: expanded && !isMobile ? '250px' : '0'
            }}>
                {children}
            </div>
        </div>
    </div>
    )
}

export default Layout
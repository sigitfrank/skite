import React from 'react'
import ReactQueryProvider from '../Lib/ReactQuery'
import { GlobalStateProvider } from '.'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

type GlobalProviderProps = {
    children: React.ReactNode
}

const GlobalProvider = ({ children }: GlobalProviderProps) => {
    return <ReactQueryProvider>
        <GlobalStateProvider>
            {children}
            <ToastContainer />
        </GlobalStateProvider>
    </ReactQueryProvider>
}

export default GlobalProvider
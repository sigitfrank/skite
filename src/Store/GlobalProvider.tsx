import React from 'react'
import ReactQueryProvider from '../Lib/ReactQuery'
import { GlobalStateProvider } from '.'


type GlobalProviderProps = {
    children: React.ReactNode
}

const GlobalProvider = ({ children }: GlobalProviderProps) => {
    return <ReactQueryProvider>
        <GlobalStateProvider>
            {children}
        </GlobalStateProvider>
    </ReactQueryProvider>
}

export default GlobalProvider
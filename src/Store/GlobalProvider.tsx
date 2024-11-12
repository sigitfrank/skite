import React from 'react'
import ReactQueryProvider from '../Lib/ReactQuery'
import { GlobalStateProvider } from '.'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from '../Components/Molecules/ErrorBoundary';
import ErrorFallback from '../Components/Atoms/ErrorFallback';

type GlobalProviderProps = {
    children: React.ReactNode
}

const GlobalProvider = ({ children }: GlobalProviderProps) => {
    return <ReactQueryProvider>
        <GlobalStateProvider>
            <ErrorBoundary fallbackComponent={ErrorFallback}>
                {children}
            </ErrorBoundary>
            <ToastContainer />
        </GlobalStateProvider>
    </ReactQueryProvider>
}

export default GlobalProvider
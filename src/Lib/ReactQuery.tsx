import {
    QueryClientProvider,
} from '@tanstack/react-query'
import { queryClient } from './queryClient'


type ReactQueryProviderProps = {
    children: React.ReactNode
}

function ReactQueryProvider({ children }: ReactQueryProviderProps) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
export default ReactQueryProvider
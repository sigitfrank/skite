import React, { ReactNode } from 'react';
import { GlobalStateContext } from './context';
import useUser from '../Hooks/Queries/useUser';

type GlobalStateProviderProps = {
    children: ReactNode;
};
export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({ children }) => {
    const { isFetching, user } = useUser()

    if (isFetching) return <p>Fetching user profile...</p>

    return (
        <GlobalStateContext.Provider value={{ user }}>
            {children}
        </GlobalStateContext.Provider>
    );
};


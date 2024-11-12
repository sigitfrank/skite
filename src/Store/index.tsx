import React, { useState, ReactNode, useEffect } from 'react';
import { GlobalStateContext, User } from './context';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '../Api';

type GlobalStateProviderProps = {
    children: ReactNode;
};
export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const userQuery = useQuery({
        queryKey: ['user'],
        queryFn: getUser,
    })

    useEffect(() => {
        setUser(userQuery.data?.response)
    }, [userQuery.data?.response])

    if (userQuery.isFetching) return <p>Fetching user profile...</p>

    return (
        <GlobalStateContext.Provider value={{ user, setUser }}>
            {children}
        </GlobalStateContext.Provider>
    );
};


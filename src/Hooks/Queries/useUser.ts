import { useEffect, useState } from 'react'
import { getUser } from '../../Api';
import { useQuery } from '@tanstack/react-query';
import { User } from '../../Types/user';

const useUser = () => {
    const [user, setUser] = useState<User | null>(null);
    const userQuery = useQuery({
        queryKey: ['user'],
        queryFn: getUser,
    })

    useEffect(() => {
        setUser(userQuery.data?.response)
    }, [userQuery.data?.response])

    return {
        user,
        isFetching: userQuery.isFetching,
    }
}

export default useUser
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Product } from '../../Types/product';
import { getProduct } from '../../Api';

const useProductDetail = () => {
    const params = useParams()
    const [total, setTotal] = useState(0)

    const productQuery = useQuery<{ response: Product }>({
        queryKey: ['product', params.id],
        queryFn: () => getProduct(params.id as string),
        enabled: Boolean(params.id)
    });

    const productDetail = productQuery.data?.response

    const increment = () => setTotal(prev => prev + 1)
    const decrement = () => setTotal(prev => prev - 1 < 0 ? 0 : prev - 1)

    return {
        isFetching: productQuery.isFetching,
        isFetched: productQuery.isFetched,
        productDetail,
        total,
        increment,
        decrement,
    }
}

export default useProductDetail
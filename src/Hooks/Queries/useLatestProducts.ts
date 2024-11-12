import { getAllProducts } from '../../Api'
import { useQuery } from '@tanstack/react-query'
import { Product } from '../../Types/product'

const useLatestProducts = () => {
    const productsQuery = useQuery<{ response: Product[] }>({
        queryKey: ['products'],
        queryFn: getAllProducts
    })
    const products = productsQuery.data?.response ?? []

    return {
        products,
        isFetching: productsQuery.isFetching
    }
}

export default useLatestProducts
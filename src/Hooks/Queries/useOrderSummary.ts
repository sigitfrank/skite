import { getAllProducts } from '../../Api'
import { useQuery } from '@tanstack/react-query'
import { Product } from '../../Types/product'

const useOrderSummary = () => {
    const orderQuery = useQuery<{ response: Product[] }>({
        queryKey: ['products'],
        queryFn: getAllProducts
    })
    const products = orderQuery.data?.response ?? []
    const slicedProducts = products.slice(0, 3)

    const totalOrder = slicedProducts.reduce((acc, current) => {
        return acc + current.price
    }, 0)

    return {
        products: slicedProducts,
        isFetching: orderQuery.isFetching,
        totalOrder
    }
}

export default useOrderSummary
import { useNavigate } from 'react-router-dom';
import { formatAmount } from '../../Helpers/formatCurrency';
import useLatestProducts from '../../Hooks/Queries/useLatestProducts';

const LatestProducts = () => {
    const navigate = useNavigate()
    const { products, isFetching } = useLatestProducts()

    return (
        <div className="flex flex-col justify-center items-center mt-5 ">
            <div className='w-[350px]'>
                <p className="uppercase text-[#3B97CB] mb-4 font-bold text-left">Our Latest Product</p>
                <div className="carousel carousel-center rounded-box max-w-md space-x-4">
                    {
                        isFetching ? <p>Fetching products...</p> : products.map((p, index) => {
                            return <div className="carousel-item cursor-pointer" key={index} onClick={() => navigate(`/products/${p.id}`)} >
                                <div
                                    className="relative text-white w-[230px] h-[250px] transition-all duration-500 !inline-block"
                                    key={index}
                                >
                                    <img
                                        src={p.image}
                                        className="w-full absolute inset-0 h-full object-cover"
                                    />
                                    <div className="absolute z-10 bottom-0 p-3 bg-gradient-to-t from-[#0099EE] to-transparent w-full">
                                        <h3 className="font-bold text-2xl">{p.name}</h3>
                                        <p className="font-semibold">{p.stock}x | total of {formatAmount(p.price)}</p>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default LatestProducts;

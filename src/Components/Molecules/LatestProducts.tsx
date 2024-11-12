import Card from '../Card';

const products = [0, 20]
const LatestProducts = () => {

    return (
        <div className="flex flex-col justify-center items-center mt-5 ">
            <div className='w-[350px]'>
                <p className="uppercase text-[#3B97CB] mb-4 font-bold text-left">Our Latest Product</p>
                <div className="flex">
                    {products.map((p, index) => {
                        return (
                            <Card
                                className="relative text-white !w-[200px] !h-[250px] transition-all duration-500"
                                key={index}
                                style={{
                                    transform: `translateX(${p + index * 20}px)`, // Adjust translateX calculation
                                }}
                            >
                                <img
                                    src={`/images/${index % 2 === 0 ? 'p.png' : 'p2.png'}`}
                                    className="w-full absolute inset-0 h-full object-cover"
                                />
                                <div className="absolute z-10 bottom-0 p-3 bg-gradient-to-t from-[#0099EE] to-transparent w-full">
                                    <h3 className="font-bold text-2xl">Dry Cleaning</h3>
                                    <p className="font-semibold">12x | total of $ 4.000</p>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default LatestProducts;

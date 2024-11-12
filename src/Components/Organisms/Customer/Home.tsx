import Container from "../../Atoms/Container";
import BalanceCard from "../../Molecules/BalanceCard";
import Invoice from "../../Molecules/Invoice";
import LatestProducts from "../../Molecules/LatestProducts";
import ProductCard from "../../Molecules/ProductCard";

const Home = () => {
    return (
        <Container>
            <div className="flex justify-center">
                <div className="w-full sm:w-6/12 lg:w-1/2 relative py-2">
                    <BalanceCard />
                    <Invoice />
                    <ProductCard />
                    <LatestProducts />
                </div>
            </div>
        </Container>
    );
};

export default Home;

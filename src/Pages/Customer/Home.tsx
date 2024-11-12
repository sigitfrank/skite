import BalanceCard from "../../Components/Molecules/BalanceCard";
import Container from "../../Components/Atoms/Container";
import Invoice from "../../Components/Molecules/Invoice";
import ProductCard from "../../Components/Molecules/ProductCard";
import LatestProducts from "../../Components/Molecules/LatestProducts";

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

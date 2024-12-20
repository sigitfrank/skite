import Container from "../../Atoms/Container";
import ProductDetail from "../../Molecules/ProductDetail";

const Product = () => {
    return (
        <Container>
            <div className="flex justify-center">
                <div className="w-full sm:w-6/12 lg:w-1/2 relative">
                    <ProductDetail />
                </div>
            </div>
        </Container>
    );
};

export default Product;

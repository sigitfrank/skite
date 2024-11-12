import Container from "../../Components/Atoms/Container";
import OrderSummary from "../../Components/Molecules/OrderSummary";

const Order = () => {
    return (
        <Container>
            <div className="flex justify-center">
                <div className="w-full sm:w-6/12 lg:w-1/2 relative py-2">
                    <OrderSummary />
                </div>
            </div>
        </Container>
    );
};

export default Order;

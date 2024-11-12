import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_API_TOKEN as string;

export async function getUser() {
    try {
        const response = await axios.get(`${baseUrl}/user/info`, {
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
            data: {
                email: "ovickbs@gmail.com",
                password: "qwerpilkopi"
            }
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
}

export async function getCategories() {
    try {
        const response = await axios.get(`${baseUrl}/product/categories`, {
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching categoris:", error);
        throw error;
    }
}

interface CreateProductPayload {
    name: string;
    description: string;
    sku: string;
    stock: number;
    category_id: number;
    price: number;
    image: string;
}

export const createProduct = async (productData: CreateProductPayload) => {
    try {
        const response = await axios.post(
            `${baseUrl}/product`,
            {
                name: productData.name,
                description: productData.description,
                sku: productData.sku,
                stock: productData.stock,
                category_id: productData.category_id,
                price: productData.price,
                image: productData.image,
            },
            {
                headers: {
                    token: token,
                    'Content-Type': 'application/json',
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};


export const getProductSoldReport = async () => {
    try {
        const response = await axios.get(`${baseUrl}/product/report`, {
            headers: {
                token: token,
                'Content-Type': 'application/json',
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching product sold report:', error);
        throw error;
    }
};


export const getAllProducts = async () => {
    try {
        const response = await axios.get(`${baseUrl}/product`, {
            headers: {
                token: token,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const getProduct = async (productId: string) => {
    try {
        const response = await axios.get(`https://belaundry-api.sebaris.link/platform/product/${productId}`, {
            headers: {
                token: token,
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
    }
};
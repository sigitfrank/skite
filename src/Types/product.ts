export type Product = {
    active: number;
    category_id: string;
    created_at: string;
    description: string;
    id: number;
    image: string;
    name: string;
    price: number;
    sku: string;
    stock: number;
    updated_at: string | null;
    user_id: number;
}

export interface CreateProductPayload {
    name: string;
    description: string;
    sku: string;
    stock: number;
    category_id: number;
    price: number;
    image: string;
}
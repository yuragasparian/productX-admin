export type Product = {
    name: string;
    id: number;
    add_date: Date;
    last_modified_date: Date;
    sku: number;
    description: string;
    price: number;
    stock_quantity: number;
    product_image: string;
    category_id: number;
    adder_id: number;
}
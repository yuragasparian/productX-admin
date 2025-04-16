

export type ProductHistory = {
    id: number;
    product_id: number;
    change_made: string;
    change_time: Date;
}

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
    adder_id: number;
    category:keyof typeof ProductCategory
    history?:ProductHistory[]
}


export type ReqReturnType = {
    products: Product[], 
    totalProducts: number
}

export enum ProductCategory {
    Electronics = "Electronics",
    Clothing = "Clothing",
    Home_Appliances = "Home Appliances",
    Books = "Books",
    Beauty = "Beauty",
    Sports = "Sports",
    Food = "Food",
    Furniture = "Furniture",
    Toys = "Toys",
    Automotive = "Automotive"
  }
  
  export type ProductCategoryWithNone = ProductCategory | "";
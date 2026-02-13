export interface Product {
    title: string;
    description: string;
    category: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviews: number;
    imageUrl: string;
    alt: string;
    isSell?: boolean;
    isFavorite?: boolean;
}

export interface ProductCategory {
    name: string;
    isChecked: boolean;
}
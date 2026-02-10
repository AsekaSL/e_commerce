export interface Product {
    title: string;
    category: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviews: number;
    imageUrl: string;
    isSell?: boolean;
    isFavorite?: boolean;
}
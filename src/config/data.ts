import { assets } from "../assets/products/assets";
import type { Product } from "./types";

export const trendingNowData : Product[] = [
    {
        title: "Noise-Cancelling Wireless Headphones",
        category: "Tech",
        price: 299.00,
        rating: 4.9,
        reviews: 128,
        imageUrl: assets.noice_cancelling_headphones,
        isFavorite: true
    },
    {
        title: "Minimalist Ceramic Watch",
        category: "Fashion",
        price: 145.00,
        originalPrice: 190.00,
        rating: 4.7,
        reviews: 85,
        imageUrl: assets.minimalist_ceramic_watch,
        isSell: true
    },
    {
        title: "Speed Racer Athletic Sneakers",
        category: "Lifestyle",
        price: 120.00,
        rating: 4.8,
        reviews: 210,
        imageUrl: assets.speed_racer_athletic_sneakers
    },
    {
        title: "InstaMax Professional Camera",
        category: "Photography",
        price: 89.00,
        rating: 4.6,
        reviews: 56,
        imageUrl: assets.insta_max_professional_camera
    }
];
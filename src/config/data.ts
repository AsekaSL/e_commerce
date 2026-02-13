import { assets } from "../assets/products/assets";
import type { Product, ProductCategory } from "./types";

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

export const customerCareLinks = [
    { title: "Help Center", href: "#" },
    { title: "Track Your Order", href: "#" },
    { title: "Returns & Exchanges", href: "#" },
    { title: "Shipping Information", href: "#" }
];

export const companyLinks = [
    { title: "About PremiumShop", href: "#" },
    { title: "Sustainability", href: "#" },
    { title: "Privacy Policy", href: "#" },
    { title: "Terms of Service", href: "#" }
];

export const contactUsLinks = [
    { title: "support@premiumshop.com", href: "mailto:support@premiumshop.com", icon: "MdMail" },
    { title: "+1 (555) 000-1234", href: "tel:+15550001234", icon: "MdCall" },
    { title: "123 Commerce St, NY 10001", href: "#", icon: "MdLocationOn" }
];

export const categories = [
    { name: "Electronics", icon: "MdLaptopMac" },
    { name: "Fashion", icon: "IoMdShirt" },
    { name: "Home", icon: "MdWeekend" },
    { name: "Beauty", icon: "MdFace3" },
    { name: "Sports", icon: "MdSports" },
    { name: "Accessories", icon: "MdHeadphones" }
]

// Product Listting Page
export const productCategories : ProductCategory[] = [
    {
        name: "Wireless Headphones",
        isChecked: true
    },
    {
        name: "Earbuds",
        isChecked: false
    },
    {
        name: "Noise Cancelling",
        isChecked: false
    },
    {
        name: "Gaming Headsets",
        isChecked: false
    }
];
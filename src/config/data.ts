import { assets } from "../assets/products/assets";
import type { Product, ProductCategory } from "./types";

export const products : Product[] = [
    {
        title: "Noise-Cancelling Wireless Headphones",
        description: "Experience immersive sound with our top-rated noise-cancelling wireless headphones, perfect for music lovers on the go.",
        category: "Tech",
        price: 299.00,
        rating: 4.9,
        reviews: 128,
        imageUrl: assets.noice_cancelling_headphones,
        alt: "Noise-Cancelling Wireless Headphones",
        isFavorite: true
    },
    {
        title: "Minimalist Ceramic Watch",
        description: "Elevate your style with our minimalist ceramic watch, combining sleek design with durable materials for everyday elegance.",
        category: "Fashion",
        price: 145.00,
        originalPrice: 190.00,
        rating: 4.7,
        reviews: 85,
        imageUrl: assets.minimalist_ceramic_watch,
        alt: "Minimalist Ceramic Watch",
        isSell: true
    },
    {
        title: "Speed Racer Athletic Sneakers",
        description: "Run faster and train harder with our Speed Racer Athletic Sneakers, designed for optimal performance and comfort.",
        category: "Lifestyle",
        price: 120.00,
        rating: 4.8,
        reviews: 210,
        imageUrl: assets.speed_racer_athletic_sneakers,
        alt: "Speed Racer Athletic Sneakers"
    },
    {
        title: "InstaMax Professional Camera",
        description: "Capture stunning photos and videos with the InstaMax Professional Camera, featuring advanced optics and user-friendly controls.",
        category: "Photography",
        price: 89.00,
        rating: 4.6,
        reviews: 56,
        imageUrl: assets.insta_max_professional_camera,
        alt: "InstaMax Professional Camera"
    },
    {
        title: "Elite Wireless V2",
        description: "Premium noise cancellation with 40h battery.",
        category: "Headphones",
        price: 299.00,
        rating: 4.8,
        reviews: 128,
        imageUrl: assets.elite_wireless_v2,
        alt: "Elite Wireless V2"
    },
    {
        title: "Sonic Max ANC",
        description: "The perfect travel companion for audiophiles.",
        category: "Headphones",
        price: 189.00,
        rating: 4.7,
        reviews: 84,
        imageUrl: assets.sonic_max_anc,
        alt: "Sonic Max ANC"
    },
    {
        title: "AirPulse Buds",
        description: "Ultra-lightweight with spatial audio.",
        category: "Headphones",
        price: 129.00,
        rating: 4.7,
        reviews: 210,
        imageUrl: assets.airpulse_buds,
        alt: "AirPulse Buds"
    },
    {
        title: "Vintage Echo",
        description: "Classic design with modern wireless technology.",
        category: "Headphones",
        price: 210.00,
        rating: 4.9,
        reviews: 67,
        imageUrl: assets.vintage_echo,
        alt: "Vintage Echo"
    },
    {
        title: "Apex Pro Gamer",
        description: "7.1 Surround sound and noise-gate mic.",
        category: "Headphones",
        price: 155.00,
        rating: 4.1,
        reviews: 67,
        imageUrl: assets.apex_pro_gamer,
        alt: "Apex Pro Gamer"
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
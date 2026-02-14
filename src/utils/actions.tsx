import { memo } from 'react';
import { IoMdShirt } from "react-icons/io";
import { MdAddShoppingCart, MdArrowBackIosNew, MdArrowForward, MdArrowForwardIos, MdCall, MdCategory, MdChat, MdChevronLeft, MdChevronRight, MdFace3, MdFavorite, MdHeadphones, MdKeyboardArrowDown, MdLaptopMac, MdLocalShipping, MdLocationOn, MdMail, MdPayments, MdPerson, MdPublic, MdSearch, MdShare, MdShoppingBag, MdShoppingCart, MdSort, MdSports, MdStar, MdStarBorder, MdStarHalf, MdVerified, MdWeekend } from "react-icons/md";

// Memoized icon component to prevent unnecessary re-renders
const Icon = memo<{ iconName: string; className: string }>(({ iconName, className }) => {
    switch (iconName) {
        case "MdMail":
            return <MdMail className={className} />;
        case "MdCall":
            return <MdCall className={className} />;
        case "MdLocationOn":
            return <MdLocationOn className={className} />;
        case "MdPublic":
            return <MdPublic className={className} />;
        case "MdChat":
            return <MdChat className={className} />;
        case "MdShare":
            return <MdShare className={className} />;
        case "MdLaptopMac":
            return <MdLaptopMac className={className} />;
        case "IoMdShirt":
            return <IoMdShirt className={className} />;
        case "MdWeekend":
            return <MdWeekend className={className} />;
        case "MdFace3":
            return <MdFace3 className={className} />;
        case "MdHeadphones":
            return <MdHeadphones className={className} />;
        case "MdSports":
            return <MdSports className={className} />;
        case "MdShoppingBag":
            return <MdShoppingBag className={className} />;
        case "MdSearch":
            return <MdSearch className={className} />;
        case "MdFavorite":
            return <MdFavorite className={className} />;
        case "MdPerson":
            return <MdPerson className={className} />;
        case "MdShoppingCart":
            return <MdShoppingCart className={className} />;
        case "MdArrowForward":
            return <MdArrowForward className={className} />;
        case "MdArrowBackIosNew":
            return <MdArrowBackIosNew className={className} />;
        case "MdArrowForwardIos":
            return <MdArrowForwardIos className={className} />;
        case "MdStar":
            return <MdStar className={className} />;
        case "MdAddShoppingCart":
            return <MdAddShoppingCart className={className} />;
        case "MdCategory":
            return <MdCategory className={className} />;
        case "MdChevronLeft":
            return <MdChevronLeft className={className} />;
        case "MdChevronRight":
            return <MdChevronRight className={className} />;
        case "MdKeyboardArrowDown":
            return <MdKeyboardArrowDown className={className} />;
        case "MdPayments":
            return <MdPayments className={className} />;
        case "MdSort":
            return <MdSort className={className} />;
        case "MdLocalShipping":
            return <MdLocalShipping className={className} />;
        case "MdVerified":
            return <MdVerified className={className} />;
        default:
            return null;
    }
});

Icon.displayName = 'Icon';

// IconGet function now returns memoized icons
export const IconGet = (iconName: string, style: string) => {
    return <Icon iconName={iconName} className={style} />;
}

// Memoized rating stars component for better performance
export const getRatingStars = memo<{ rating: number }>(({ rating }) => {
    return (
        <>
            {[...Array(Math.floor(rating))].map((_, index) => (
                <MdStar key={index} className="fill-1 text-xs" />
            ))}
            {(rating % 1) >= 0.5 && <MdStarHalf className="fill-1 text-xs" />}
            {(rating % 1) < 0.5 && (rating % 1) > 0 && <MdStarBorder className="fill-1 text-xs" />}
        </>
    );
});

getRatingStars.displayName = 'RatingStars';
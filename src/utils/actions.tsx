import { IoMdShirt } from "react-icons/io";
import { MdAddShoppingCart, MdArrowBackIosNew, MdArrowForward, MdArrowForwardIos, MdCall, MdCategory, MdChat, MdChevronLeft, MdChevronRight, MdFace3, MdFavorite, MdHeadphones, MdKeyboardArrowDown, MdLaptopMac, MdLocationOn, MdMail, MdPayments, MdPerson, MdPublic, MdSearch, MdShare, MdShoppingBag, MdShoppingCart, MdSort, MdSports, MdStar, MdStarBorder, MdStarHalf, MdWeekend } from "react-icons/md";

export const IconGet = (iconName: string, style: string) => {
    switch (iconName) {
        case "MdMail":
            return <MdMail className={style} />;
        case "MdCall":
            return <MdCall className={style} />;
        case "MdLocationOn":
            return <MdLocationOn className={style} />;
        case "MdPublic":
            return <MdPublic className={style} />;
        case "MdChat":
            return <MdChat className={style} />;
        case "MdShare":
            return <MdShare className={style} />;
        case "MdLaptopMac":
            return <MdLaptopMac className={style} />;
        case "IoMdShirt":
            return <IoMdShirt className={style} />;
        case "MdWeekend":
            return <MdWeekend className={style} />;
        case "MdFace3":
            return <MdFace3 className={style} />;
        case "MdHeadphones":
            return <MdHeadphones className={style} />;
        case "MdSports":
            return <MdSports className={style} />;
        case "MdShoppingBag":
            return <MdShoppingBag className={style} />;
        case "MdSearch":
            return <MdSearch className={style} />;
        case "MdFavorite":
            return <MdFavorite className={style} />;
        case "MdPerson":
            return <MdPerson className={style} />;
        case "MdShoppingCart":
            return <MdShoppingCart className={style} />;
        case "MdArrowForward":
            return <MdArrowForward className={style} />;
        case "MdArrowBackIosNew":
            return <MdArrowBackIosNew className={style} />;
        case "MdArrowForwardIos":
            return <MdArrowForwardIos className={style} />;
        case "MdStar":
            return <MdStar className={style} />;
        case "MdAddShoppingCart":
            return <MdAddShoppingCart className={style} />;
        case "MdCategory":
            return <MdCategory className={style} />;
        case "MdChevronLeft":
            return <MdChevronLeft className={style} />;
        case "MdChevronRight":
            return <MdChevronRight className={style} />;
        case "MdKeyboardArrowDown":
            return <MdKeyboardArrowDown className={style} />;
        case "MdPayments":
            return <MdPayments className={style} />;
        case "MdSort":
            return <MdSort className={style} />;
        default:
            return null;
    }
}

export const getRatingStars = (rating: number) => {

    return (<>
        {
            [...Array(Math.floor(rating))].map((_, index) => (
                <MdStar key={index} className="fill-1 text-xs" />
            ))
        }
        {
            (rating % 1) >= 0.5 && <MdStarHalf className="fill-1 text-xs" />
        }
        {
            (rating % 1) < 0.5 && (rating % 1) > 0 && <MdStarBorder className="fill-1 text-xs" />
        }
    </>);
    
}
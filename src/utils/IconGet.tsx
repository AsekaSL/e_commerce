import { IoMdShirt } from "react-icons/io";
import { MdCall, MdChat, MdFace3, MdHeadphones, MdLaptopMac, MdLocationOn, MdMail, MdPublic, MdShare, MdSports, MdWeekend } from "react-icons/md";

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
        default:
            return null;
    }
}
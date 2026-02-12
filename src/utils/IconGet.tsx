import { MdCall, MdLocationOn, MdMail } from "react-icons/md";

export const IconGet = (iconName: string, style: string) => {
    switch (iconName) {
        case "MdMail":
            return <MdMail className={style} />;
        case "MdCall":
            return <MdCall className={style} />;
        case "MdLocationOn":
            return <MdLocationOn className={style} />;
        default:
            return null;
    }
}
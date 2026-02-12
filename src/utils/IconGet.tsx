import { MdCall, MdChat, MdLocationOn, MdMail, MdPublic, MdShare } from "react-icons/md";

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
        default:
            return null;
    }
}
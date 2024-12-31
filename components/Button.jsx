import Link from "next/link"
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";

export default function Button( {destination, text, icon, color} ) {
    return (
        <Link href={destination}>
            <button className={`font-playfair font-bold underline text-base ${color}`}>
                {text} <Image className="inline ml-1" src={icon} width="35" height="35" alt="button-icon"/>
            </button>
        </Link>
    )
}

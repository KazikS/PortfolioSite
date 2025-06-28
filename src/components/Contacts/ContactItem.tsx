import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";

export default function ContactItem({icon, title, link}: { icon: StaticImageData, title: string, link: string }) {
    return (
        <Link href={link}
              className='max-w-75 flex flex-col justify-between border rounded-4xl p-5 shadow-2xl shadow-gray-950 hover:-translate-y-1 transition'>
            <h2>{title}</h2>
            <Image
                width={100}
                height={100}
                src={icon}
                alt={''}
                className='rounded-4xl'
            />
        </Link>
    )
}
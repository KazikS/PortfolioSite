import Image from "next/image";

export default function CharacterImage({ image }: { image: any }) {
    return (
        <Image
            src={image}
            width={600}
            height={600}
            alt={''}
            className='rounded-4xl'
        />
    )
}
import Image from 'next/image'
import { StaticImageData } from 'next/image'

export default function ProjectPreview({image}: { image: StaticImageData }) {
    return (
        <div className='relativ aspect-video'>
            <Image
                src={image}
                alt={''}
                className='w-full h-full'
            />
        </div>

    )
}
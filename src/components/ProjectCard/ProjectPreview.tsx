import Image from 'next/image'

export default function ProjectPreview({image}: { image: any }) {
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
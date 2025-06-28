import ProjectPreview from "@/components/ProjectCard/ProjectPreview";
import ProjectDesc from "@/components/ProjectCard/ProjectDesc";
import Link from "next/link";
import { StaticImageData } from "next/image";

export default function ProjectCard({image, text, url}: { image: StaticImageData, text: string ,url: string}) {
    return (
        <Link href={url} className='flex flex-col border rounded-lg w-full max-w-xs md:max-w-sm overflow-hidden shadow-2xl shadow-gray-950 hover:-translate-y-1 transition mx-auto'>
            <ProjectPreview image={image}/>
            <ProjectDesc text={text}/>
        </Link>
    )
}
import avatar from '../../../public/avatar.jpg'
import CharacterImage from "@/components/Character/CharacterImage";
import CharacterContent from "@/components/Character/CharacterContent";


export default function CharacterPage() {
    return (
        <main className='grid grid-cols-1 p-15 md:grid-cols-2 md:gap-4'>
            <CharacterImage image={avatar}/>
            <CharacterContent />
        </main>
    )
}
import avatar from '../../../public/avatar.jpg'
import CharacterImage from "@/components/Character/CharacterImage";
import CharacterContent from "@/components/Character/CharacterContent";


export default function CharacterPage() {
    return (
        <main className='grid grid-cols-2 pl-20 gap-10 mb-25 mt-15'>
            <CharacterImage image={avatar}/>
            <CharacterContent />
        </main>
    )
}
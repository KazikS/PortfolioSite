import InfoList from "@/components/Character/InfoList";

export default function CharacterImage() {
    const personalData = {
        title: 'Обо мне',
        items: [
            '21 год, заканчиваю Московский политех',
            'Знаю английский на уровне А2',
            'Обучаюсь на специальности "Информационные системы и технологии. Программное обеспечение игровой компьютерной индустрии"'
        ]
    }
    const techStak = {
        title: 'Технологический стэк',
        items: [
            'Верстка на HTML',
            'Стилизация на CSS с использованием SCSS или Tailwind',
            'Написание скриптов на JS или TS',
            'Разработка игр на Unity'
        ]
    }

    return (
        <div className='flex flex-col justify-center'>
            <InfoList title={personalData.title} items={personalData.items}/>
            <br />
            <InfoList title={techStak.title} items={techStak.items}/>
        </div>
    )
}
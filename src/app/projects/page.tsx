import ProjectCard from "@/components/ProjectCard/page";
import toDoImage from "@/img/todolistPreview.png";
import beelinePreview from '@/img/beeline-en.svg';
import socialPulse from '@/img/favicon.png'

export default function ProjectList() {
    return (
        <main className='flex flex-col justify-center p-10'>
            <h1 className='text-center mb-10'>Список проектов:</h1>
            <div className='flex justify-center'>
                <ul className='list-none flex justify-center w-full pt-10 flex-wrap gap-8'>
                    <li className='w-full sm:w-auto'>
                        <ProjectCard
                            url={'https://github.com/KazikS/ToDoListReact'}
                            image={toDoImage}
                            text={'Список задач на React JS с использованием useState и useEffect'}
                        />
                    </li>
                    <li className='w-full sm:w-auto'>
                        <ProjectCard
                            image={beelinePreview}
                            text={"Работа над мини-приложением Билайн для телеграм на Next JS"}
                            url={'https://web.telegram.org/k/#@bee_plan_b_bot'}
                        />
                    </li>
                    <li className='w-full sm:w-auto'>
                        <ProjectCard
                            image={socialPulse}
                            text={"Приложение для анализа публикаций в VK и TG и новостей с официальных сайтов ОИВ РСО-Алания. ElectronJS NodeJS"}
                            url={'https://github.com/KazikS/SocialPulsePublic'}
                        />
                    </li>
                </ul>
            </div>
        </main>
    )
}
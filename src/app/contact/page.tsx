import ContactItem from "@/components/Contacts/ContactItem";
import gMailIcon from "../../img/gmail.svg"
import tgIcon from "../../img/telegram.svg"
import vkIcon from "../../img/vk.svg"
import gitIcon from "../../img/github.svg"
import leetCodeIcon from "../../img/leetCode.svg"

export default function Contact() {

    const gMail = 'kaziksabanaev.2@gmail.com';
    const tg = 'sabkazz';
    const vkId = '413903207';
    const msgTheme = 'Вопрос с сайта-визитки';
    const msgBody = 'Привет! Я ознакомился с твоим сайтом, у меня есть вопрос или предложение!';

    return (
        <div className='flex flex-col justify-center p-10'>
            <h2 className='p-10 flex justify-center'>Свяжитесь со мной</h2>
            <div className='flex justify-around items-center'>
                <ContactItem icon={gMailIcon} title={'Написать на GMail'}
                             link={`mailto:${encodeURIComponent(gMail)}?subject=${encodeURIComponent(msgTheme)}&body=${encodeURIComponent(msgBody)}`}/>
                <ContactItem icon={tgIcon} title={'Написать в Telegram'}
                             link={`https://t.me/${encodeURIComponent(tg)}?start=${encodeURIComponent(msgBody)}`}/>
                <ContactItem
                    icon={vkIcon}
                    title={'Написать в VK'}
                    link={`https://vk.me/sabkazz`}
                />
            </div>
            <h2 className='p-10 flex justify-center'>Мои профили на платформах</h2>
            <div className='flex justify-around items-center'>
                <ContactItem icon={gitIcon} title={'GitHub'} link={'https://github.com/KazikS'} />
                <ContactItem icon={leetCodeIcon} title={'LeetCode'} link={'https://leetcode.com/u/sabkazz/'} />
            </div>
        </div>
    )
}
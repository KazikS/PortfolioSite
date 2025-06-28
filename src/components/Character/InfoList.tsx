export default function InfoList({title, items}:{title: string; items: string[]}) {
    return (
        <>
            <h3>{title}</h3>
            <ul className='list-["—"] ml-10'>{items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}</ul>
        </>
    )
}
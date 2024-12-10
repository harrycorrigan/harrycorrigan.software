import "./tag.css"
interface TagProps{
    name: string
    colour: string
}

export function Tag({name, colour}: TagProps){
    return (
        <div className="tagBody text" style={{backgroundColor: colour}}><p className="tagText">{name}</p></div>
    )
}
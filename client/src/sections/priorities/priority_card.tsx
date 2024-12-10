import "./priority_card.css"

interface PriorityCardProps{
    icon: React.JSX.Element
    title: string
    description: string
}

export function PriorityCard({icon, title, description}: PriorityCardProps){
    return (
        <div className="priorityCard-body">
            <div className="priorityCard-img">
                {icon}
            </div>
            <p className="sub-text priorityCard-title">{title}</p>
            <p className="priorityCard-text text">{description}</p>
        </div>
    )
}
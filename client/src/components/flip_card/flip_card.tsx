import "./flip_card.css"

interface FlipCardProps{
    backSide: React.JSX.Element
    frontSide: React.JSX.Element
}

export function FlipCard({backSide, frontSide}: FlipCardProps){
    return (
        <div className="flipCard-body">
            <div className="flipCard-inner">
                <div className="flipCard-front">
                    {frontSide}
                </div>
                <div className="flipCard-back">
                    {backSide}
                </div>
            </div>
        </div>
    )
}
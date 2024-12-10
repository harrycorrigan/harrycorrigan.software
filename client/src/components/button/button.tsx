import "./button.css"

type ButtonStyle = "PRIMARY" | "SECONDARY"

interface ButtonProps{
    style: ButtonStyle
    children: string
    onClick?: () => any
}

export function Button({children, style, onClick}: ButtonProps){
    return (
        <div className={`button button-${style}`} onClick={onClick}>
            <p className="button-text text">{children}</p>
        </div>
    )
}
import { useEffect, useState } from "react"
import "./alert.css"

interface AlertProps{
    message?: string
    style: "OK" | "ERROR"
    showForS: number
    animationDurationS: number
    onComplete: () => any
}

export function Alert({message, showForS, animationDurationS, style, onComplete}: AlertProps){
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true);
        window.setTimeout(() => {
            setOpen(false);
            window.setTimeout(() => {
                onComplete();
            }, animationDurationS * 1000)
        }, showForS * 1000)
    }, [message])


    return (
        <div style={{transitionDuration: animationDurationS.toString()+"s"}} className={`alert-wrapper alert-${style.toLowerCase()} alert-wrapper-${isOpen ? "open" : "closed"}`}>
            <p className="alert-text text">{message}</p>
        </div>
    )
}
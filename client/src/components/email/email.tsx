import "./email.css"
import EmailIcon from "../../assets/ui/email.svg?react"

export function Email(){
    return (
        <div onClick={() => window.open("mailto:hello@harrycorrigan.software")} className="email-body">
            <EmailIcon className="email-icon"/><p className="email-text text">hello@harrycorrigan.software</p>
        </div>
    )
}
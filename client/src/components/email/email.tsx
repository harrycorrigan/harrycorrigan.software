import "./email.css"
import EmailIcon from "../../assets/ui/email.svg?react"

export function Email(){
    return (
        <div className="email-body">
            <EmailIcon className="email-icon"/><p className="email-text text">hello@harrycorrigan.software</p>
        </div>
    )
}
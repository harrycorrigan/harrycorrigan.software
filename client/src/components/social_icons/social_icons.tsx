import "./social_icons.css"
import GithubIcon from "../../assets/socials/github.svg?react"
import XIcon from "../../assets/socials/x.svg?react"
import LinkedinIcon from "../../assets/socials/linkedin.svg?react"

interface ClickableIconProps{
    url?: string
    icon: React.JSX.Element
}

function ClickableIcon({url, icon}: ClickableIconProps){
    return (
        <div className="socialIcons-icon" onClick={() => window.open(url, "_black")?.focus()}>
            {icon}
        </div>
    )
}

export function SocialIcons(){
    return (
        <div className="socialIcons-container">
            <ClickableIcon url="https://github.com/harrycorrigan/" icon={<GithubIcon className="socialIcon"/>}/>
            <ClickableIcon url="https://x.com/harryc_software/" icon={<XIcon className="socialIcon"/>}/>
            <ClickableIcon url="https://www.linkedin.com/in/harry-corrigan-930006227/" icon={<LinkedinIcon className="socialIcon"/>}/>
        </div>
    )
}
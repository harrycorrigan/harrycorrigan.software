import "./social_icons.css"
import GithubIcon from "../../assets/socials/github.svg?react"
import XIcon from "../../assets/socials/x.svg?react"
import LinkedinIcon from "../../assets/socials/linkedin.svg?react"

export function SocialIcons(){
    return (
        <div className="socialIcons-container">
            <div className="socialIcons-icon">
                <GithubIcon className="socialIcon"/>
            </div>
            <div className="socialIcons-icon">
                <XIcon className="socialIcon"/>
            </div>
            <div className="socialIcons-icon">
                <LinkedinIcon className="socialIcon"/>
            </div>
        </div>
    )
}
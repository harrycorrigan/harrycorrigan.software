import { Email } from "../../components/email/email"
import { SocialIcons } from "../../components/social_icons/social_icons"
import "./footer.css"

interface FooterLink{
    label: string
    link: string
}

interface FooterSectionProps{
    title: string
    links: FooterLink[]
}

function FooterSection({title, links}: FooterSectionProps){
    return (
        <div className="footerSection-body">
            <p className="footerSection-title sub-text">{title}</p>
            <div className="footerSection-links">
                {
                    links.map((e) => {
                        return <p className="footerSection-link text" onClick={() => {window.location.href = e.link}}>{e.label}</p>
                    })
                }
            </div>
        </div>
    )
}

export function Footer(){
    return (
        <div className="footerWrapper">
            <div className="footerBody section">
                <FooterSection title="Home" links={[
                    {"label": "Landing", "link": "#"},
                    {"label": "About", "link": "#about"},
                    {"label": "Priorities", "link": "#priorities"},
                    {"label": "Projects", "link": "#projects"},
                    {"label": "Contact", "link": "#contact"}
                ]}></FooterSection>
            </div>

            <div className="footerSection-last">
                <SocialIcons/>
                <div className="footerSection-last-text">
                    <Email/>
                    <p className="copyright-text text">©Harry Corrigan 2024</p>
                </div>
            </div>
        </div>
    )
}
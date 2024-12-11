import { Button } from "../../components/button/button"
import { Email } from "../../components/email/email"
import { InputBox } from "../../components/input_box/input_box"
import { SocialIcons } from "../../components/social_icons/social_icons"
import "./contact.css"

function ContactText(){
    return (
        <div className="contactText-body">
            <div className="contactText-topSection">
                <p className="contactText-title header-text">Contact Me.</p>
                <p className="contactText-text sub-text">Leave your name & email along with a description of what you need. I will get back to you as soon as possible</p>
            </div>
            <div className="contactText-bottomSection">
                <SocialIcons/>
                <p className="contactText-email-prompt sub-text">Or email me directly</p>
                <Email/>
            </div>
        </div>
    )
}

function ContactForm(){
    return (
        <div className="contactForm-body">
            <InputBox label="What's your name?" width="100%" lines={1}></InputBox>
            <InputBox label="What's your email?" width="100%" lines={1}></InputBox>
            <InputBox label="What do you need?" width="100%" lines={10}></InputBox>
            <Button style="PRIMARY">Submit</Button>
        </div>
    )
}

export function ContactSection(){
    return (
        <div id="contact" className="contactSection-wrapper">
            <div className="contactSection section">
                <ContactText/>
                <ContactForm/>
            </div>
        </div>
    )
}
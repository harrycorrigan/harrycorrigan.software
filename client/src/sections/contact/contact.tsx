import { useCallback, useState } from "react"
import { Button } from "../../components/button/button"
import { Email } from "../../components/email/email"
import { InputBox } from "../../components/input_box/input_box"
import { SocialIcons } from "../../components/social_icons/social_icons"
import "./contact.css"
import { Alert } from "../../components/alert/alert"

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

interface ContactInfo{
    name: string
    email: string
    message: string
}

interface FormErrorMsgs{
    nameMsg?: string
    emailMsg?: string
    msgMsg?: string
}

function validateEmail(email: string): boolean{
    // borrowed validation
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) != null;
  };

function ContactForm(){
    const [currErrorMsgs, setErrorMsgs] = useState<FormErrorMsgs>({});
    const [currContactInfo, setContactInfo] = useState<ContactInfo>({"name": "", "email": "", "message": ""})
    const [currAlertMessage, setAlertMessage] = useState<React.JSX.Element>();

    const updateContactInfo = useCallback((fieldName: keyof ContactInfo, data: string) => {
        switch(fieldName){
            case "email":
                if(!validateEmail(data)){
                    setErrorMsgs({...currErrorMsgs, "emailMsg": "Please enter valid email address"})
                }
                else{
                    setErrorMsgs({...currErrorMsgs, "emailMsg": undefined})
                }
                return setContactInfo({...currContactInfo, "email": data})

            case "message":
                if(data.length > 1000){
                    setErrorMsgs({...currErrorMsgs, "msgMsg": "Message too long!"}) 
                    return;
                }else{
                    setErrorMsgs({...currErrorMsgs, "msgMsg": undefined})
                }
                return setContactInfo({...currContactInfo, "message": data})

            case "name":
                if(data.length > 250){
                    setErrorMsgs({...currErrorMsgs, "msgMsg": "Name too long!"}) 
                    return;
                }else{
                    setErrorMsgs({...currErrorMsgs, "nameMsg": undefined})
                }
                return setContactInfo({...currContactInfo, "name": data})
        }
    }, [currContactInfo])

    const postForm = useCallback(() => {
        let xhr = new XMLHttpRequest()
        if(currContactInfo.email === "" || currContactInfo.message === "" || currContactInfo.name === ""){
            setAlertMessage((<Alert style="ERROR" onComplete={() => setAlertMessage(undefined)} showForS={1} animationDurationS={1} message="Please populate all fields"/>));
            return;
        }
        xhr.open("POST", "/api/submitContact", true)
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify(currContactInfo))
        xhr.onreadystatechange = () => {
            if(xhr.readyState == xhr.DONE){
                setAlertMessage((<Alert style="OK" onComplete={() => setAlertMessage(undefined)} showForS={1} animationDurationS={1} message="Thank you for your message!"/>));
                setContactInfo({"name": "", "email": "", "message": ""})
            }
        }
    }, [currContactInfo])

    return (
        <div className="contactForm-body">
            {currAlertMessage}
            <InputBox
                errorMsg={currErrorMsgs.nameMsg}
                currValue={currContactInfo.name}
                onChange={(msg) => updateContactInfo("name",msg)}
                label="What's your name?"
                width="100%"
                lines={1}
            />
            <InputBox
                errorMsg={currErrorMsgs.emailMsg}
                currValue={currContactInfo.email}
                onChange={(msg) => updateContactInfo("email",msg)}
                label="What's your email?"
                width="100%"
                lines={1}
            />
            <InputBox
                errorMsg={currErrorMsgs.msgMsg}
                currValue={currContactInfo.message}
                onChange={(msg) => updateContactInfo("message",msg)}
                label="What do you need?"
                width="100%" lines={10}
            />
            <Button onClick={() => postForm()} style="PRIMARY">Submit</Button>
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
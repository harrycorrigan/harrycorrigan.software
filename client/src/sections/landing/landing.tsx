import { Button } from "../../components/button/button"
import "./landing.css"


export function LandingSection(){
  return (
    <div className='landingSection-wrapper'>
        <p className="sub-text landing-text">Level up your business.</p>
      <div className='landingSection-text section'>
        <p className='title-text landingSection-title'>Harry Corrigan.</p>
        <p className='sub-text title-subtext'>Software Engineer <span className="title-subtext-delimiter">•</span> Full Stack Developer</p>

        <div className='landingSection-buttons'>
          <Button style="PRIMARY" onClick={() => window.location.href = "#contact"}>Contact</Button>
          <Button style="SECONDARY" onClick={() => window.location.href = "#about"}>Learn More</Button>
        </div>
      </div>
    </div>
  ) 
}
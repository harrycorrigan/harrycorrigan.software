import "./about.css"

export function AboutSection(){
    return (
        <div id="about" className="aboutSection-wrapper">
            <div className="aboutSection section">
                <p className="header-text aboutSection-header">About Me</p>
                <div className="aboutSection-body">
                    <p className="sub-text aboutSection-subtext">
                        <span className="aboutSection-subtext-emphasis">Hi, I’m Harry.</span> I am a software & full stack web developer from London, England.
                    </p>
                        <p className="large-text aboutSection-text">I've been working as a software & backend developer for 3 years, i worked previously as the lead developer on a quantitative sports betting system, building systems to bet with, and take advantage of, formulae and algorithms to gain an edge on sports markets.</p>
                        <p className="large-text aboutSection-text">My entire life I’ve been fascinated by computers, and have always enjoyed the process of solving problems. As a result of this, i have acquired a wealth of knowledge about all parts of software, i would like to use this knowledge to help your company.</p>
                        <p className="text aboutSection-text">Note: i am not a designer, as you can probably tell.</p>
                </div>
            </div>
        </div>
    )
}
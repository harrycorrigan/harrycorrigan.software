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
                        <p className="large-text aboutSection-text">I've been writing code and building things for 6 years, 3 of those years I've been working professionally. Previously I worked as the lead developer for a quantitative sports company where I utilized a variety of technologies and techniques to create the infrastructure for algorithmic betting on horse racing and football markets.</p>
                        <p className="large-text aboutSection-text">I have always been fascinated by computers, and deeply enjoy solving complex problems. As a result of this, I have acquired extensive knowledge of various aspects of software development. I am keen to leverage this knowledge to help your company achieve its full potential.</p>
                </div>
            </div>
        </div>
    )
}
import './App.css'
import { Button } from './components/button/button'
import { AboutSection } from './sections/about/about'
import { ContactSection } from './sections/contact/contact'
import { Footer } from './sections/footer/footer'
import { LandingSection } from './sections/landing/landing'
import { PrioritiesSection } from './sections/priorities/priorities'
import { ProjectsSection } from './sections/projects/projects'

function App() {
  return (
    <>
      <div className='resumeButton-container'><Button onClick={() => {window.open("resume.pdf", "_black")?.focus()}} style="PRIMARY">Download my CV</Button></div>
      <LandingSection/>
      <AboutSection/>
      <PrioritiesSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default App

import "./project_github.css"
import GithubIcon from "../../assets/socials/github-projects.svg?react"

interface ProjectGithubProps{
    link: string
}

export function ProjectGithub({link}: ProjectGithubProps){
    return (
        <div className="projectGithub-body" onClick={() => {window.open(link, '_blank')?.focus()}}>
            <GithubIcon className="projectGithub-icon"/>
        </div>
    )
}
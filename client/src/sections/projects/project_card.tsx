import { ProjectGithub } from "../../components/project_github/project_github"
import { Tag } from "../../components/tag/tag"
import "./project_card.css"

export type ProjectTagType = "C++" | "Javascript" | "Typescript" | "OpenGL" | "React"

function getTagColor(tag: ProjectTagType): string{
    switch(tag){
        case "C++":
            return "orange"
        case "Javascript":
            return "pink"
        case "OpenGL":
            return "blue"
        case "React":
            return "yellow"
        case "Typescript":
            return "white"
    }
}

interface ProjectCardProps{
    title: string
    description: string
    backgroundImageUrl?: string
    githubURL?: string
    tags: ProjectTagType[]
}

interface ProjectTag{
    name: string
    colour: string
}

interface ProjectTagsProps{
    projectTags: ProjectTag[]
}

function ProjectTags({projectTags}: ProjectTagsProps){
    return (
        <div className="projectTags-container">
            {projectTags.map((v) => <Tag key={`projectTag-${v.name}`} name={v.name} colour={v.colour}/>)}
        </div>
    )
}

export function ProjectCard({title, description, backgroundImageUrl, githubURL, tags}: ProjectCardProps){
    let colouredTags: ProjectTag[] = tags.map(
        (t) => { return {"name": t, "colour": getTagColor(t)}}
    );

    return (
        <div className="projectCard-body" 
            style={{backgroundImage: `url(${backgroundImageUrl})`}}>
            <div className="projectCard-text">
                {githubURL ? <ProjectGithub link={githubURL}/> : null}
                <p className="projectCard-title sub-text">{title}</p>
                <p className="projectCard-description text">{description}</p>
                <ProjectTags projectTags={colouredTags} />
            </div>
        </div>
    )    
}
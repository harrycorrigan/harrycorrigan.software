import "./projects.css"

import { ProjectCard } from "./project_card";


export function ProjectsSection(){
    return (
        <div id="projects" className="projectsSection section">
            <p className="header-text projectsSection-title">My Projects</p>
            <p className="projectsSection-disclaimer text">Most of my actual projects need to be tidied up & published, what's here are placeholders until that's done.</p>
            <div className="projectsSection-projects">
                <ProjectCard 
                    tags={["C++", "OpenGL"]}
                    title="Life Engine (2024)"
                    description="2D C++ game engine written with OpenGL, GLFW and GLAD"
                    backgroundImageUrl="/projects/lifeEngine.png"
                    githubURL="https://github.com/harrycorrigan/"
                />
                <ProjectCard
                    tags={["Javascript"]}
                    title="Conways Game Of Life (2023)"
                    description="Conways game of life simulation written in Typescript"
                    backgroundImageUrl="/projects/GOL.jpg"
                    githubURL="https://github.com/harrycorrigan/"
                />
                <ProjectCard 
                    tags={["C++"]}
                    title="Tape Script (2022)"
                    description="Dumb CPU emulator written in CPP"
                    backgroundImageUrl="/projects/tapeScript.png"
                    githubURL="https://github.com/harrycorrigan/Tapescript/"
                />
            </div>
        </div>
    )
}
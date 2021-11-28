import projectData from "./data"
import ProjectCard from "./ProjectCard"

var domainToSearch = "Web Development";

export default function ProjectScreen() {
    return (
        <div>
            Project Screen behold!

<form action="post">
    <input type="text" placeholder="Enter domain"/>
    <button type="submit">Search</button>
</form>

        {projectData.map((curP) => {
            return <div>


    {(curP.domain == domainToSearch) ? 
           ( <div>
                <ProjectCard project = {curP} domain = {domainToSearch}/>
            </div>): <div></div>}
        

        </div>


        })
        }

        </div>
    )
}

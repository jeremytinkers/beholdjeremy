export default function ProjectCard(props) {
    return (
        <div class="projectCard">
          <h1>Name: {props.project.name}</h1>  
          <p>Description: {props.project.descp}</p>  
        </div>
    )
}

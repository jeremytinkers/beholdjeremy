export default function ProjectCard(props) {
    return (
      
        <div className="projectCard">
          <h1>Name: {props.project.name}</h1>  
          <h3>Description: {props.project.descp}</h3>
          <ul>
          Tags
          {
            props.project.tag.map(curTag => {
              return <li>{curTag}</li>;
            })

          } 
          </ul> 
        </div>
    )
}

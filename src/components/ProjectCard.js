export default function ProjectCard(props) {
    return (
      
        <div className="projectCard">
          <h2>{props.project.name}</h2>  
          <h4>Description: </h4>
          <p>{props.project.descp}</p>
          <div id="cardTags">
          {
            props.project.tag.map(curTag => {
              return <p>{curTag}</p>;
            })

          } 
          </div> 
        </div>
    )
}

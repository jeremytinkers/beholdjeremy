export default function ProjectCard(props) {
    return (
      
        <div className="projectCard">
          <h2>{props.project.name}</h2>  
          <h4>Description: </h4>
          <p>{props.project.description}</p>
          <div id="cardTags">
          {
            props.project.topics.map(curTopic => {
              return <p>{curTopic}</p>;
            })

          } 
          </div> 
        </div>
    )
}

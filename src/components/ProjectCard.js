import { Link } from "react-router-dom";

export default function ProjectCard(props) {
    return (
      
        <div className="projectCard">
        {(props.project.html_url)?   <h2>{props.project.name}  <a href={props.project.html_url} target={"_blank"}><i class="fa fa-github fa-lg"></i></a></h2>  :
        <h2>{props.project.name}</h2>  }
        
          {(props.project.html_url)? <a id="projectLink" href={props.project.html_url} target={"_blank"}>Link</a>: <p id="projectLink">Currently Private</p>}
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

import { useState } from "react";
import { useParams } from "react-router-dom";
import ProjectCard from "../components/ProjectCard.js";

function filterProjects(tagToSearch, projectData) {
  if (tagToSearch.toLowerCase() === "all") {
    return projectData;
  }

  var filteredSet = [];

  //Exception: c++ or c-plus-plus
  if (
    tagToSearch.toLowerCase() === "c++" ||
    tagToSearch.toLowerCase() === "c-plus-plus"
  ) {
    for (let i = 0; i < projectData.length; i++) {
      if (
        projectData[i].topics.includes("c-plus-plus") ||
        projectData[i].topics.includes("c++")
      ) {
        filteredSet.push(projectData[i]);
      }
    }
    return filteredSet;
  }

  for (let i = 0; i < projectData.length; i++) {
    if (projectData[i].topics.includes(tagToSearch.toLowerCase())) {
      filteredSet.push(projectData[i]);
    }
  }

  return filteredSet;
}

// function latestTool(projectData){
//     var latestToolArr = [];
//     console.log("p:" + projectData[projectData.length -1].tag)
//     latestToolArr = projectData[projectData.length -1].topic;
//     return latestToolArr;
// }

export default function ProjectScreen(props) {
  const fullProjectData = JSON.parse(localStorage.getItem("fullProjectData"));
  const { tag } = useParams();

  let initialTag = tag ? tag : "All";

  let initialEmptyFlag = filterProjects(
    initialTag.toLowerCase(),
    fullProjectData
  ).length
    ? false
    : true;

  const [emptyFlag, setEmptyFlag] = useState(initialEmptyFlag);
  const [tagToSearch, setTagToSearch] = useState(initialTag);
  const [filteredProj, setFilteredProj] = useState(
    filterProjects(tagToSearch, fullProjectData)
  );
  
  function handleChange(e) {
    setTagToSearch(e.target.value);
  }

  function submitFilterReq(e) {
    if (e.keyCode === 13) {
      if (!filterProjects(tagToSearch, fullProjectData).length) {
        setEmptyFlag(true);
      } else {
        setEmptyFlag(false);
      }
      setFilteredProj(filterProjects(tagToSearch, fullProjectData));
    }
  }

  function submitFilterReqAll(e) {
    setFilteredProj(fullProjectData);
    setEmptyFlag(false);
  }

  return (
    <div>
      <div id="mainProjectContent">
        <p>Search for a particular skill 🔎</p>
        <input
          onKeyDown={submitFilterReq}
          id="projectSInput"
          type="text"
          onChange={handleChange}
          placeholder="Enter a Tool/TechStack Tag"
          value={tagToSearch}
        />
        <button id="buttonProject" onClick={submitFilterReqAll}>
          View All Projects
        </button>
        <div id="projectsGridParent">
          {emptyFlag ? (
            <p>No matching project. :( </p>
          ) : (
            <div id="projectsGrid">
              {filteredProj.map((curP) => {
                return <ProjectCard key={curP.id} project={curP} />;
              })}
            </div>
          )}
        </div>{" "}
        {/* close of projectsGrid */}
      </div>{" "}
      {/* close of mainProjectContent */}
    </div>
  );
}

//Latest Tools Call & Map:-
// {/* <div>
//   <h2>Currently Playing around with: </h2>
//   {latestToolArr.map((curLT) => {
//     return <li>{curLT}</li>;
//   })}
// </div>; */}

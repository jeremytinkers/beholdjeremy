import { useState } from "react";
import projectData from "./data"
import ProjectCard from "./ProjectCard"



function filterProjects(tagToSearch){

    if(tagToSearch.toLowerCase() === "all"){
        return projectData;
    }

    var filteredSet = [];
    for(var i=0 ; i< projectData.length; i++){
        if(projectData[i].tag.includes(tagToSearch.toLowerCase())){
            filteredSet.push(projectData[i]);
        }
    }

    return filteredSet;
}


export default function ProjectScreen() {

    const [emptyFlag, setEmptyFlag] = useState(false);
    const [tagToSearch, setTagToSearch] = useState("All");
    const [filteredProj, setFilteredProj] = useState(projectData);

    function handleChange(e){
        console.log(e.target.value);
        console.log("bfore:"+tagToSearch);
        setTagToSearch(e.target.value);
        console.log("after:"+tagToSearch);
    }
    function submitFilterReq(){
        console.log("final:" + tagToSearch);
        console.log(filterProjects(tagToSearch));
        if(!filterProjects(tagToSearch).length){
            setEmptyFlag(true);
        }else{
            setEmptyFlag(false);
        }
        setFilteredProj(filterProjects(tagToSearch));
    }

    return (
        <div>
            Project Screen behold!


    <input type="text" onChange = {handleChange} placeholder="Enter Tools/TechStack Tag"/>

    <button onClick = {submitFilterReq}>Search</button>

{emptyFlag? <div>No matching project. :( </div> : <div>{filteredProj.map((curP) => {

return <ProjectCard project = {curP}/>;

})
} </div>
}
        </div>
    )
}

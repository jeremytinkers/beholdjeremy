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

function latestTool(){
    
    var latestToolArr = [];
    console.log("p:" + projectData[projectData.length -1].tag)
    latestToolArr = projectData[projectData.length -1].tag;
    return latestToolArr;
}  


export default function ProjectScreen() {

    const [emptyFlag, setEmptyFlag] = useState(false);
    const [tagToSearch, setTagToSearch] = useState("All");
    const [filteredProj, setFilteredProj] = useState(projectData);
    //const [latestTool, setLatestTool] = useState("php");

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

    var latestToolArr = latestTool();
    console.log("cL:" + latestToolArr);
    
    return (
        <div>
        <h1>Project Screen behold!</h1>
        <div>
        <h2>Currently Playing around with: </h2>
    {
        latestToolArr.map((curLT)=>{
            return <li>{curLT}</li>
        })
    }
</div>
    <input type="text" onChange = {handleChange} placeholder="Enter Tools/TechStack Tag"/>

    <button onClick = {submitFilterReq}>Search</button>

{emptyFlag? <div>No matching project. :( </div> : <div>{filteredProj.map((curP) => {

return <ProjectCard key= {curP.id} project = {curP}/>;

})
} </div>
}

{/* <h1>Development Stats</h1> */}
        </div>
    )
}

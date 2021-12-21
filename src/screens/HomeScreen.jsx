import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import privateProjectData from "../data.js"
import img from '../assets/images/home1.jpg';
import "./homeScreenStyle.css";

export default function HomeScreen(props) {

    //Request for github public repo data
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [publicProjectData, setPublicProjectData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/jeremytinkers/repos")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPublicProjectData(result);
          console.log("loaded :" + isLoaded);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  
  const fullProjectData = publicProjectData.concat(privateProjectData);
  fullProjectData.sort((a, b) => (a.id > b.id) ? -1 : 1);
  console.log("fullPorjectdata in home after:" + JSON.stringify(fullProjectData));

 
  localStorage.setItem("fullProjectData", JSON.stringify(fullProjectData));
  
    let navigate = useNavigate();
    const [tagToSearch, setTagToSearch] = useState("All");

    function handleChange(e){
        console.log(e.target.value);
        console.log("bfore:"+tagToSearch);
        setTagToSearch(e.target.value);
        console.log("after:"+tagToSearch);
        
    }

    // function submitSearchReq(){
    //     var tagPath = "/projectDashboard/" + tagToSearch; 
    //     console.log(tagPath);
    //     navigate(tagPath);   
    // }

    
    return (
        <div>
            <div id="homeContent">

            <img class="homeImage" src= {img} alt= {"Jeremy Picture"} /> 
            <div class="aboutMe">
            <h2>About Me <span>🇴🇲 🇮🇳</span></h2>
            <div id="aboutPara">
            <p> Born and bred in <strong>Muscat</strong> dunes, behold another culturally bewildered <strong>Malayali</strong>!</p>
           
           <p>I like to be called Jeremy and am currently a <strong>3rd year CS Undergrad</strong> at <a href="https://www.nitt.edu/" target="_blank"><strong>NIT-T</strong></a>  with a deep passion for 
            building products with the user in focus.</p>

            {/* <p>In addition, startups, tech, stocks and marketing get my adrenaline pumping!</p> */}
            
            <p>I'm currently on the lookout for <strong>internships</strong> in the <strong>SWE/PM</strong> space(preferably startups)</p>
            
            </div>
            </div>
            
            </div>
            <div id="homeEnd">
          
            <p> Looking for expertise in a particular skill?</p>
                       
          <form action={"/projectDashboard/" + tagToSearch}>
	        <label for="search">Search</label>
	        <input onChange={handleChange} id="search" type="text" placeholder='Ex: C++, Dart' required/>
	        <span class="caret"></span>
            </form>

            </div>
        </div>
    )
}


{/* <button onClick = {submitSearchReq}>Search</button> */}
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import img from '../assets/images/home1.jpg';
import "./homeScreenStyle.css";

export default function HomeScreen(props) {
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
            <h2>About Me</h2>
            <p id="aboutPara">
            As a designer myself, I think we can play a 
            significant role in transforming people’s minds by understanding the target audience and appropriately make effective use of media so that
            the audience will understand the need of social distancing. 
            </p>
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
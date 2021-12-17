import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import img from './assets/images/home1.jpg';

export default function HomeScreen(props) {
    let navigate = useNavigate();
    const [tagToSearch, setTagToSearch] = useState("All");

    function handleChange(e){
        console.log(e.target.value);
        console.log("bfore:"+tagToSearch);
        setTagToSearch(e.target.value);
        console.log("after:"+tagToSearch);
        
    }

    function submitSearchReq(){
        var tagPath = "/projectDashboard/" + tagToSearch; 
        navigate(tagPath);   
    }

    
    return (
        <div>
            <div id="homeContent">

            <img class="homeImage" src= {img} alt= {"Jeremy Picture"} /> 
            <div class="aboutMe">
            <h2>About Me</h2>
            As a designer myself, I think we can play a 
            significant role in transforming people’s minds by understanding the target audience and appropriately make effective use of media so that
            the audience will understand the need of social distancing. 
            </div>
            
            </div>
            <div id="homeEnd">
            {/* <a href="/projectDashboard"><button>View Portfolio</button> </a> */}
            <label for="skillRequest"> Looking for expertise in a particular skill?</label>
            <input type="text" onChange={handleChange} placeholder='Example: Flutter, MySQL, C++'/>
            <button onClick = {submitSearchReq}>Search</button>
            </div>
        </div>
    )
}

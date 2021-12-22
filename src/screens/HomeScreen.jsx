import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import privateProjectData from "../data.js"
import img from '../assets/images/home1.jpg';
import img2 from '../assets/images/pic2.png';
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

            <img className="homeImage" src= {img} alt= {"Jeremy Picture"} /> 
            <div className="aboutMe">
            <h2>About Me <span>🇴🇲 🇮🇳</span> </h2>
            <div id="aboutPara">
            <p> Born and bred in <strong id='mct'><div class="tooltipCard"><a href="https://www.google.com/search?q=Muscat&rlz=1C1JZAP_enIN878IN878&sxsrf=AOaemvKJOT8q7ZimZSUvFiZpLfEDaOmjpg%3A1640192319042&ei=P1nDYaOKAoXmsAevqYfwBA&ved=0ahUKEwjjpajE8Pf0AhUFM-wKHa_UAU4Q4dUDCA4&uact=5&oq=Muscat&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyBAgjECcyBwguELEDEEMyBAgAEEMyBAguEEMyCwguEIAEEMcBEK8BMgUIABCABDIFCAAQgAQyBwgAELEDEEM6BwgjELADECc6BwgAEEcQsAM6BwgAELADEEM6CAgAEOQCELADOgoILhDIAxCwAxBDOhAILhDHARCjAhDIAxCwAxBDOhAILhDHARCvARDIAxCwAxBDOgYIABAHEB46BwguELEDEAo6CgguEMcBEK8BEApKBAhBGABKBAhGGAFQ7AFY6QRgpg5oAXACeACAAYcCiAHuA5IBAzItMpgBAKABAcgBE8ABAQ&sclient=gws-wiz" target="_blank">مسقط</a>
  <span class="tooltipCardtext">Muscat</span>
</div></strong> dunes, behold another culturally bewildered <strong id="cok"><div class="tooltipCard"><a href="https://www.google.com/search?q=kerala&rlz=1C1JZAP_enIN878IN878&oq=kerala&aqs=chrome.0.69i59j46i67i433j0i67i131i433l2j46i131i433i512j0i20i131i263i433i512j0i131i433i512j46i175i199i512j0i3l2.3048j0j7&sourceid=chrome&ie=UTF-8" target="_blank"> മലയാളി</a>
  <span class="tooltipCardtext">Malayali</span>
</div></strong>!</p>
            
            <p>I like to be called Jeremy and am currently a <strong>3rd year CS Undergrad</strong> at <a href="https://www.nitt.edu/" target="_blank"><strong>NIT-T</strong></a>  with a deep passion for 
            building products with the user in focus.</p>

            {/* <p>In addition, startups, tech, stocks and marketing get my adrenaline pumping!</p> */}
            
            <p>I'm currently on the lookout for <strong>internships</strong> in the <strong>SWE/PM</strong> space(preferably startups) </p>
            
            </div>
            
            </div>
            
            </div>
            <div id="homeEnd">
          
            <p> Looking for expertise in a particular skill?</p>
                       
          <form action={"/projectDashboard/" + tagToSearch}>
	        <label for="search">Search</label>
	        <input onChange={handleChange} id="search" type="text" placeholder='Ex: C++, Dart' required/>
	        <span className="caret"></span>
            </form>

            </div>
        </div>
    )
}


{/* <button onClick = {submitSearchReq}>Search</button> */}
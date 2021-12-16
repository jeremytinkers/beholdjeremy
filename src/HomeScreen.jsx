import { Link } from 'react-router-dom'
import img from './home1.jpg'

export default function HomeScreen(props) {
    return (
        <div>
        {/* <i class="fa fa-home"></i> */}

            <div id="homeContent">

                     
            <img class="homeImage" src= {img} alt= {"Jeremy Picture"} /> 
            <div class="aboutMe">As a designer myself, I think we can play a 
            significant role in transforming people’s minds by understanding the target audience and appropriately make effective use of media so that
            the audience will understand the need of social distancing. </div>
            
            </div>
            
            <div id="homeEnd">
            <a href="/projectDashboard"><button>View Portfolio</button> </a>
            </div>
        </div>
    )
}

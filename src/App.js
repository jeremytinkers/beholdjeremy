import { BrowserRouter, Route,Routes, useParams} from 'react-router-dom';
import './App.css';
import ResumePdf from "./assets/Resume.pdf";
import HomeScreen from './screens/HomeScreen.jsx';
import ProjectScreen from './screens/ProjectScreen';
import Test from './screens/Test';

function App() {

  return (
    <BrowserRouter>
    <div id="navParent">
            <div id="navbar">

            <h1 id="navbarHeading"> <a href="/">Jeremiah Thomas</a> </h1>

            <nav>
            
           
                <a href={"/projectDashboard"}>Projects</a>
                <div class="tooltip"><a href={ResumePdf} download="Resume.pdf"><i class="fa fa-file fa-sm"></i></a>
                <span class="tooltiptext">Resume</span>
                </div>
                
                <a href={"https://github.com/jeremytinkers"} target={"_blank"}><i class="fa fa-github fa-lg"></i></a>
                <a href={"https://www.focusmate.com/i/KwVqDUrm9H/calendar"} target={"_blank"}><i class="fa fa-whatsapp fa-lg"></i></a>
                
                <a href={"https://www.linkedin.com/in/jeremiahthomas14/"} target={"_blank"}><i class="fa fa-linkedin fa-lg"></i></a>
                
                
            </nav>

            </div>

            </div>
    <Routes>
    
    <Route path="/projectDashboard/:tag"  element={<ProjectScreen/>} ></Route>
    <Route path="/projectDashboard"  element={<ProjectScreen/>} ></Route>
    <Route  path="/" element={<HomeScreen/>} ></Route>

    </Routes>


  </BrowserRouter>

  );
}

export default App;

  // <div>
  //   <Test/>
  // </div>




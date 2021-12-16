import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './HomeScreen.jsx';
import ProjectScreen from './ProjectScreen';

function App() {
  return (
    <BrowserRouter>
    <div id="navParent">
            <div id="navbar">

            <h1>Jeremiah Thomas </h1>
         

            <nav>
                <a href={"/projectDashboard"}>Projects</a>
                <a href={"/projectDashboard"}>Github</a>
                <a href={"/projectDashboard"}>Linkedin</a>
                <a href={"/projectDashboard"}>Resume</a>
            </nav>

            </div>

            </div>
    <Routes>
    <Route path="/projectDashboard"  element={<ProjectScreen/>} ></Route>
    <Route  path="/" element={<HomeScreen/>} ></Route>
    </Routes>


  </BrowserRouter>
  );
}

export default App;




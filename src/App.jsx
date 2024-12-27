import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5, faJava } from "@fortawesome/free-brands-svg-icons";
import Home from './Home';
function App() {

  return (
   <>
   <Home/>
        <h2>git learning experiment </h2>
        <h1 className='font-bold text-2xl text-blue-600 uppercase'>hello dear react-developer</h1>
        <FontAwesomeIcon size='2xl' icon={faReact} style={{ margin: "0 10px", color: "#4267B2" }} />
        <FontAwesomeIcon size='2xl' icon={faHtml5} style={{ margin: "0 10px", color: "#1DA1F2" }} />
        <FontAwesomeIcon size='2xl' icon={faJava} style={{ margin: "0 10px", color: "#C13584" }} />
   </>
  )
}

export default App

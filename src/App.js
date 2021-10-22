import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// AXIOS
import AxiosNavbar from "./Axioss/AxiosNavbar";
import AxiosHome from "./Axioss/AxiosHome";
import AxiosGetApi from "./Axioss/AxiosGetApi";
import AxiosPostApi from "./Axioss/AxiosPostApi";

//Routing

import Headers from './Routingg/Headers'
import Mounting from './Routingg/Mounting'
import Updating from './Routingg/Updating'
import Unmounting from './Routingg/Unmounting'
import Home from "./Routingg/Home";

function App() {
  return (
    <div className="App">
      {/* ================== [ AXIOS ] ================== */}

      {/* <Router>
        <AxiosNavbar />
        <div>
          <Switch>
            <Route exact path="/">
              <AxiosHome />
            </Route>
            <Route exact path="/get">
              <AxiosGetApi />
            </Route>
            <Route exact path="/post">
              <AxiosPostApi />
            </Route>
          </Switch>
        </div>
      </Router> */}

      {/* ================== [ Routing ] ================== */}

      <Router>
     <Headers />
        <div>
          <Switch>
            <Route exact path="/">
              <Home/>
              
            </Route>
            <Route exact path="/mounting">
              <Mounting />
             
            </Route>
            <Route exact path="/updating">
              <Updating/>
            
            </Route>
            <Route exact path="/unmounting">
            <Unmounting/>
              
            </Route>
          </Switch>
        </div>
      </Router>


    </div>
  );
}

export default App;

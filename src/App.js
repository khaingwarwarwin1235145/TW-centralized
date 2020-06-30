import React from 'react';
import './App.css';
import { BrowserRouter, Route,Redirect} from "react-router-dom";
import Navbar from './Features/Nav'
import MainMenuContainer from './Pages/MainPage/container/maincontainer';
import Login from './Pages/Login/index'
import ChillerPlant from './Pages/ChillerPlant/index'

const App=()=>{
 
  return(
     
      <React.Fragment>
      <BrowserRouter>
        <div>
          <Navbar/>
          <Route exact path="/Login" component={Login} />
          <Route path="/Main" component={MainMenuContainer} />
          <Route path="/ChillerPlant" component={ChillerPlant} />
          {/* <Redirect to={routes.default} /> */}
        </div>
      </BrowserRouter>
    </React.Fragment> 
  )    

}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Navbar from './Features/Nav'
import MainMenuContainer from './Pages/MainPage/container/maincontainer';
import routes from './Routes/index'
import Login from './Pages/Login/index'
import ChillerPlant from './Pages/ChillerPlant/index'
import Sidebar from './Features/Sidebar';


const App = () => {
  const pathname = window.location.pathname
  console.log("path name ", pathname)
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="d-flex flex-column" style={{
          background: "linear-gradient(-60deg,#e6e8eA,#F6F8FA)",
          height: window.innerHeight
        }}>
          <Switch>
          {
            pathname !== '/login' && pathname !== '/' &&
            <div className="row">
              <div className="col-1"><Sidebar/></div>
              <div className="col-11">
                <div className="row">  
                  <Navbar />
                </div>
                <div className="row">
                  <Route path="/main" component={MainMenuContainer} />
                </div>
                </div>

            </div>
            
          }
          
            <Route path="/login" component={Login} exact />
            
            <Route path="/chiller-plant" component={ChillerPlant} />
            <Redirect to={routes.default} />
            </Switch>
        </div>
        
      </BrowserRouter>
    </React.Fragment>
  )

}

export default App;

import React from 'react';
//import '../assets/custom.css'; 
//import american_flag from '../Config/images/language_icon.png';
import Icon from '../Config/images/i2.JPG';
const Sidebar = (props) =>{
    return(
        <div class="container-fluid px-0">
            <div class="row collapse show no-gutters d-flex h-100 position-relative">
                <div class="col-3 p-0 h-100 w-sidebar navbar-collapse collapse d-none d-md-flex sidebar">
                    <div class="text-white position-fixed h-100 align-self-start w-sidebar" style={{ backgroundColor: "#0076b7", width:'5%'}}>
                        <div className="py-3 row justify-content-center">
                            <img src={Icon} alt="icon" style={{height: '50px',width: '50px'}}/>
                        </div>
                       
                        <ul class="nav flex-column flex-nowrap text-truncate">
                            <li class="nav-item">
                                <a class="nav-link active" href="#"></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
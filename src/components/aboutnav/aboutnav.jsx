import React, { Component } from "react";
import '../aboutnav/aboutnav.css'
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
export class Navigation extends Component {
  render() {
    return (
      <nav id="menus" className=" navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
           
            <a className="navbar-brand page-scroll" href="#page-top">
               <div class="top-icon topicon">
                    
                     <Link to={`/home`} class="linkcolor">
                     <i class="fa fa-arrow-circle-o-left icon">  </i>
                </Link>
                   
                     <div className="navbar-brands" >Back to my result</div>
                  </div>
            
            </a>
            
          </div>
     </div>
      </nav>
    );
  }
}

export default Navigation;

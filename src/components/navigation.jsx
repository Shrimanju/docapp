import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
export class Navigation extends Component {
  render() {
    return (

    //   <nav id="menu" className="navbar navbar-default navbar-fixed-top">
    //   <div className="container">
    //     <div className="navbar-header">
    //       <button
    //         type="button"
    //         className="navbar-toggle collapsed"
    //         data-toggle="collapse"
    //         data-target="#bs-example-navbar-collapse-1"
    //       >
    //         {" "}
    //         <span className="sr-only">Toggle navigation</span>{" "}
    //         <span className="icon-bar"></span>{" "}
    //         <span className="icon-bar"></span>{" "}
    //         <span className="icon-bar"></span>{" "}
    //       </button>
    //       <a className="navbar-brand page-scroll" href="#page-top">
    //        COMPANY
    //       </a>{" "}
    //     </div>

    //     <div
    //       className="collapse navbar-collapse"
    //       id="bs-example-navbar-collapse-1"
    //     >
    //       <ul className="nav navbar-nav navbar-right">
           
    //         <li>
    //           <a href="#about" className="page-scroll">
    //             About
    //           </a>
    //         </li>
           
            
    //         <li>
    //           <a href="#testimonials" className="page-scroll">
    //             Testimonials
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#team" className="page-scroll">
    //             Team
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#contact" className="page-scroll">
    //             GET IN TOUCH
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
      <nav id="menu" className=" navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
      <button
      type="button"
      className="navbar-toggle collapsed"
      data-toggle="collapse"
      data-target="#bs-example-navbar-collapse-1"
    >
      {" "}
      <span className="sr-only">Toggle navigation</span>{" "}
      <span className="icon-bar"></span>{" "}
      <span className="icon-bar"></span>{" "}
      <span className="icon-bar"></span>{" "}
    </button>
         <a className="navbar-brand page-scroll" href="#page-top">
             DOCAPP
          </a>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#" className="page-scroll">
                 FOR CLINIC AND HOSPITAL
                </a>
              </li>
              <li>
              <Link to={`/about`} >
                  About
                </Link>
                {/* <a href="#about" className="page-scroll">
                  About
                </a> */}
              </li>
              <li>
                <a href="#" className="page-scroll">
                 Contact
                </a>
              </li>
              <li>
                <a href="#" className="page-scroll">
                 Login
                </a>
              </li>
              <li>
                <a href="#" className="page-scroll">
                |
                </a>
              </li>
              <li>
                <a href="#" className="page-scroll">
                 Sign up
                </a>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;

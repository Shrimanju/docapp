import React, { Component } from "react";
import '../affordable/contact.css'
export class Contact extends Component {
  render() {
    return (
      <div id="contacts">
        <div className="section-title text-center">
          <h3>AFFORDABLE FULL CHECKUPS</h3>
        </div>
        <section class="section">

          <div className="health1image">
        <img
            src="img/portfolio/health1.png"
            className="health1"
            alt="Project Title"
          />
           <button className="button1">Dental Care</button>
           </div>


  <div class="content">

   
    <p class="paragraph">
    Lorem ipsum dolor sit amet, consectetur<br/>
  Lorem ipsum dolor sit amet, consectetur <br/>
  Lorem ipsum dolor sit amet, consectetur <br/>
  Lorem ipsum dolor sit amet, consectetur<br/>
     
    </p>
  </div>
</section>
<section class="section">
<div class="content">

<p class="paragraph1">

  Lorem ipsum dolor sit amet, consectetur
  Lorem ipsum dolor sit amet, consectetur 
  Lorem ipsum dolor sit amet, consectetur 
  Lorem ipsum dolor sit amet, consectetur 
</p>
</div>
<div className="health2image">
        <img
            src="img/portfolio/health2.png"
            className="health2"
            alt="Project Title"
          />
 <button className="button2">Eye Care</button>
 </div>
</section>
      </div>
    );
  }
}

export default Contact;

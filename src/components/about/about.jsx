import React, { Component } from 'react';
import '../about/about.css';
// import Image from '../../../public/img/about.jpg';
export class about extends Component {

  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6 ">
               
<div >
  
<div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row">
            <div class="col-xl-12 col-md-12">
                <div class="card user-card-full">
                    <div class="row m-l-0 m-r-0">
                        <div class="col-sm-4 bg-c-lite-green user-profile">
                            <div class="card-block text-center text-white">
                            <img
                        src="img/portfolio/abcd.png"
                        className="img-responsive"
                        alt="Project Title"
                      />
                                {/* <div class="m-b-25"> <img src={Image} class="img-radius" alt="User-Profile-Image"> </div> */}
                                <div class="star">
                                <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<p class="review">(123 reviews)</p>
                                </div>
                                <div class="line">
                                <div class=" b-b-default"></div>
                                </div>
                                {/* <div class=" b-b-default lines"></div> */}
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">JAN 26,2019</p>
                                        <h6 class="text-muted f-w-400">02:00 PM</h6>
                                    </div>
                                    </div>
                                 <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="card-block">
                            <h4 class="heading mb-0 mt-0 f-w-600">Dr.Mohamed Abdul Raouf</h4> 
                            <span class="desc">Specialist-Dermatology<br/>16Yrs of Experience</span>
                                {/* <h6 class="m-b-20 p-b-5  f-w-600"></h6>
                                <p class="m-b-10 f-w-600">Specialist</p> */}
                                <div class="row">
                               
                                    <div class="col-sm-12">
                                      
                                    <h4 class="heading mb-0 mt-0 f-w-600">Abeer Medical Center</h4> 
                            <span class="desc">Specialist-Dermatology</span>
                                    </div>
                                    <div class="col-sm-12">
                                    <h4 class="heading mb-0 mt-0 f-w-600">info.abcdefg@gmail.com</h4> 
                            <span class="desc">Email</span>
                                    </div>
                                    <div class="col-sm-12">
                                    <h4 class="heading mb-0 mt-0 f-w-600">+91 123456789</h4> 
                            <span class="desc">Contact hospital</span>
                                    </div>
                                    
                                </div>

                                <div class=" b-b-default lines"></div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">25 SAR</p>
                                        <h6 class="text-muted f-w-400">Constitution fee</h6>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600 changedate">change date</p>
                                        {/* <h6 class="text-muted f-w-400">Dinoter husainm</h6> */}
                                    </div>
                                    
                                </div>

                                {/* <ul class="social-link list-unstyled m-t-40 m-b-10">
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

                </div>

                
 <div className="col-xs-12 col-md-6">
 
        <div id="contact">
          <div className="container col-xs-12 col-md-12">
            <div className="col-md-12">
              <div className="row">
                <div className="section-title">
                  <h2>Confirm your appointment</h2>
                  {/* <h5>Existing User?LOGIIN</h5> */}
               
               <div className="section-titles">
                
               <p> Existing User?<a>LOGIIN</a></p>
               </div></div>
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Patient Name"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>

                    
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email ID"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>


                  <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="number"
                          id="number"
                          className="form-controls"
                          placeholder="Mobile No"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                 
                    
                    <p className="verification"> you will receive an SMS with a verification code on this<br/> number.</p>
                    <div className="check">
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="checkbox"/>
  <label for="vehicle1"> By looking this appointment ,you agree to DOCAPP terms&Condition<br/>Cond
  </label>
  </div>

                  <div className="submit">
                  <button type="submit" className="btn btn-custom btn-lg">
                    submit
                  </button>
                  </div>
                  
                </form>
              </div>
              </div>
        </div>
       
</div>
            </div>
              </div>
        </div>
      </div>
    )
  }
}

export default about

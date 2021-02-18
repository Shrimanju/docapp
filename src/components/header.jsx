import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                   Search and book appointment
                    <span></span>
                  </h1>
                
<div class="form-group">
  <div class="input-group">
    <span class="select input-group-btn">
      <select class="form-control" name="id" id="id">
      <option value="">Location</option>
                <option value="0">select1</option>
                <option value="1">select2</option>
                <option value="2">select3</option>
      </select>
    </span>
    <span class="select input-group-btn">
      <select class="form-control" name="nr" id="nr">
      <option value="">Select Specification</option>
                <option value="0">select1</option>
                <option value="1">select2</option>
                <option value="2">select3</option>
      </select>
    </span>
    <span class="select input-group-btn">
      <select class="form-control" name="nr" id="nr">
      <option value="">Select options</option>
                <option value="0">select1</option>
                <option value="1">select2</option>
                <option value="2">select3</option>
      </select>
    </span>
  </div>	 
</div>
                <a
                    href="#"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Search
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

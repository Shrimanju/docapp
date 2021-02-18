import React, { Component, Fragment } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';

import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/Team';
import Contact from '../src/components/affordable/contact';
import JsonData from './data/data.json';
import Footer from './components/Footer/footer';
import Aboutnav from './components/aboutnav/aboutnav';
import About from './components/about/about';
import Aboutfooter from './components/aboutfooter/aboutfooter'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({ landingPageData: JsonData })
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Switch>
              <Route
                exact path='/' >
                <div id="background">
                  <Navigation />
                  <Header data={this.state.landingPageData.Header} />
                  <Testimonials data={this.state.landingPageData.Testimonials} />
                  <Contact data={this.state.landingPageData.Contact} />
                  <Footer />
                </div>
              </Route>
              <Route
                path='/home'>
                <div id="background">
                  <Navigation />
                  <Header data={this.state.landingPageData.Header} />
                  <Testimonials data={this.state.landingPageData.Testimonials} />
                  <Contact data={this.state.landingPageData.Contact} />
                  <Footer />
                </div>
              </Route>
              <Route
                exact
                path='/about'>
                <div id="background">
                  <Aboutnav />
                  <About data={this.state.landingPageData.About} />
                  <Aboutfooter />
                </div>
              </Route>
            </Switch>
          </Fragment>
        </Router>
      </div>
    )
  }
}

export default App;

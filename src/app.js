import React, { Component } from "react";
import "../src/css/bootstrap.min.css";
import './css/App.css'
import "../src/css/mainStyle.css"
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Header from './components/Header'
import Features from './components/Features'
import Plans from './components/Plans'
import Activities from './components/Activities'
import Posts from './components/Posts'
import University from './components/University'
import Contacts from './components/Contacts'
import Footer from "./components/Footer";
import FixedFooter from './components/FixedFooter'
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Introduction />
        <Features />
        <Plans />
        <Activities />
        <Posts />
        <University />
        <Contacts />
        <Footer />
        <FixedFooter />
      </div>
    );
  }
}

export default App;

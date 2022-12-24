import { Slider } from 'antd';
import React, { Component } from 'react';
import './App.css';
import Addmission from './components/addmission form/Addmission';
import Contact from './components/Contact/contact';

import CoursesCard from './components/courses/Courses';

import Navbar from './components/navbar/Navbar';
import ISlider from './components/slider/Slider';

class App extends Component {

  render() {
    return (
      <div className="App">
         <Navbar isInline/>
     <ISlider/>
     <CoursesCard />
    <Addmission />
    <Contact />
      </div>
    );
  }
}


export default App;


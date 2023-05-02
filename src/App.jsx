import React from 'react';
// import { Header } from "antd/es/layout/layout";
import Header from './components/header/Header';
import './App.css';
import Cover from './components/cover/Cover';
import Counts from './components/counts/Counts';
import About from './components/about/About';
import Service from './components/service/Service';
import Carousel from './components/carousel/Carousel';


function App() {
  return (
    <div className="App">
      <Header />
      <Cover />
      <Counts />
      <About />
      <Service />
      <Carousel />
    </div>
  );
}

export default App;

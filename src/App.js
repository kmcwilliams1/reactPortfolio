import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import AboutMe from './components/AboutMe';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <AboutMe />
        <h2> Work</h2>
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import './App.css';
import {NavBar, Header, Content, Contact} from './components';
import './components/style.css'

const about = "Hello my name is Joseph and I am the greatest there ever was."
const info = {
  name: "Tommy Tutone",
  phone: "867-5309",
  email: "jennyigot@your.number"
}

class App extends Component {
  render() {
    return (
      <div className='main-app'>
        <NavBar />
        <Header title="Henlo" headerMessage="Friembs" />
        <Content about={about} />
        <Contact info={info} />
      </div>
    );
  }
}

export default App;

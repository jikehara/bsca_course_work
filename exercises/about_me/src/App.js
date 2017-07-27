import React, { Component } from 'react';
import './App.css';
import {NavBar, Header, Content} from './components';
import './components/style.css'

const about = "Hello my name is Joseph and I am the greatest there ever was."

class App extends Component {
  render() {
    return (
      <div className='main-app'>
        <NavBar />
        <Header title="Henlo" headerMessage="Friembs" />
        <Content about={about} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {AboutRestaurant, FoodItems, Data} from './Components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello from App!</h1>
        <AboutRestaurant name={Data.title} address={Data.address} phone={Data.phone} />
        <FoodItems />
      </div>
    );
  }
}

export default App;

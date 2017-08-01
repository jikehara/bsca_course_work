import React, { Component } from 'react';
import {AboutRestaurant, FoodItems, Data} from './Components';

class App extends Component {

  state = {
    spiceTolerance: 10
  }

  updateSpiceTolerance = (event) => {
    this.setState({spiceTolerance: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <h1>Hello from App!</h1>
        <AboutRestaurant name={Data.title} address={Data.address} phone={Data.phone} />
        <FoodItems items={Data.items} spicy={this.state.spiceTolerance}/>
      </div>
    );
  }
}

export default App;

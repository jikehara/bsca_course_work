import React, { Component } from 'react';
import {AboutRestaurant, FoodItems, Data} from './Components';

class App extends Component {

  state = {
    spiceTolerance: 5
  }

  updateSpiceTolerance = (event) => {
    this.setState({spiceTolerance: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <h1>Hello from App!</h1>
        <AboutRestaurant name={Data.title} address={Data.address} phone={Data.phone} />

        <h3>Select your spice tolerance! (current is {this.state.spiceTolerance})</h3>
        <form onSubmit={this.handleFormSubmit}>
        <input onChange={this.updateSpiceTolerance} />
        </form>

        <FoodItems items={Data.items} spicy={this.state.spiceTolerance}/>
      </div>
    );
  }
}

export default App;

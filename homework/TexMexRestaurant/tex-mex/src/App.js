import React, { Component } from 'react';
import {AboutRestaurant, FoodItems, Data} from './Components';

class App extends Component {

  state = {
    spiceTolerance: 5,
    category: "Amazing Appetizers"
  }

  updateSpiceTolerance = (event) => {
    this.setState({spiceTolerance: event.target.value})
  }

  // never ever do this again
  updateCategoryAppetizers = () => {
    // four categories: Amazing Appetizers, Delicious Desserts, Incredible Entrees, Spicy Specials
    this.setState({category: "Amazing Appetizers"})
  }
  // never ever do this again
  updateCategoryDesserts = () => {
    // four categories: Amazing Appetizers, Delicious Desserts, Incredible Entrees, Spicy Specials
    this.setState({category: "Delicious Desserts"})
  }
  // never ever do this again
  updateCategoryEntrees = () => {
    // four categories: Amazing Appetizers, Delicious Desserts, Incredible Entrees, Spicy Specials
    this.setState({category: "Incredible Entrees"})
  }
  // never ever do this again
  updateCategorySpecials= () => {
    // four categories: Amazing Appetizers, Delicious Desserts, Incredible Entrees, Spicy Specials
    this.setState({category: "Spicy Specials"})
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

        {/* some naughty code, but right idea
          find a way to make buttons update state*/}
        <h3> Select a food category! (Current is {this.state.category})</h3>
        <button onClick={this.updateCategoryAppetizers}>Amazing Appetizers</button>
        <button onClick={this.updateCategoryDesserts}>Delicious Desserts</button>
        <button onClick={this.updateCategoryEntrees}>Incredible Entrees</button>
        <button onClick={this.updateCategorySpecials}>Spicy Specials</button>

        <FoodItems items={Data.items} spicy={this.state.spiceTolerance} cat={this.state.category}/>
      </div>
    );
  }
}

export default App;

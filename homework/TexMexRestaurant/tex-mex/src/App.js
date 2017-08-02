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

  updateFoodCategory = (props) => {
    // four categories: Amazing Appetizers, Delicious Desserts, Incredible Entrees, Spicy Specials
    this.setState({category: props.newCategory})
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

        {/* some broken code, but right idea 
          find a way to make buttons update state*/}
        <h3> Select a food category! (Current is {this.state.category})</h3>
        <button onClick={()=> console.log("Amazing Appetizers")}>Amazing Appetizers</button>
        <button onClick={()=> console.log("Delicious Desserts")}>Delicious Desserts</button>
        <button onClick={()=> console.log("Incredible Entrees")}>Incredible Entrees</button>
        <button onClick={()=> console.log("Spicy Specials")}>Spicy Specials</button>

        <FoodItems items={Data.items} spicy={this.state.spiceTolerance} cat={this.state.category}/>
      </div>
    );
  }
}

export default App;

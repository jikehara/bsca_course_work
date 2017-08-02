import React from 'react';

const FoodItems = (props) => {

  // const MappedFood = props.items.map((food, index) => {
  //   return (
  //     <div key={index} className="food-cards">
  //       <h3>{food.name} for {food.price} dollars</h3>
  //       <p>category: {food.category} </p>
  //       <p>spicy level: {food.spiceLevel}</p>
  //       <img src={food.img} alt="dummy alt text" />
  //     </div>
  //   )
  // })

  const FilteredBySpice = props.items.filter((items) => {
    return items.spiceLevel < props.spicy && items.category===props.cat
  }).map((food, index) => {
    return (
      <div key={index} className="food-cards">
        <h3>{food.name} for {food.price} dollars</h3>
        <p>category: {food.category} </p>
        <p>spicy level: {food.spiceLevel}</p>
        <img src={food.img} alt="dummy alt text" />
      </div>
    )
  })


  return (
    <div>
      <h1>Hello from Food Items!</h1>
      <ul className="food-list">
        {FilteredBySpice}
      </ul>
    </div>
  )
}

export default FoodItems;

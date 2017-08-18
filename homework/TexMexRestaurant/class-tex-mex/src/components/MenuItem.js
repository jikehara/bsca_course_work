import React from 'react';

const MenuItem = (props) => {
  return (
    <div>
      <h3>{props.item.name} for {props.item.price} dollars</h3>
      <p>category: {props.item.category} </p>
      <p>spicy level: {props.item.spiceLevel}</p>
      <img src={props.item.img} alt="dummy alt text" />
    </div>
  )
}

export default MenuItem;

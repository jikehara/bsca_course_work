import React from 'react';

const AboutRestaurant = (props) => {
  return (
    <div>
      <h1>Hello from {props.name}!</h1>
      <h3>Contact us!</h3>
      <p>Phone Number: {props.phone}</p>

      <div className="address">
        <p>{props.address.street}</p>
        <p>{props.address.suite}</p>
        <p>{props.address.city}, {props.address.state} {props.address.zip}</p>
      </div>
    </div>
  )
}

export default AboutRestaurant;

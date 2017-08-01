import React from 'react';

const Contact = (props) => {

  return (
    <div className="contact-sec">
      <h3 className="sec-header">Name: { props.info.name }</h3>
      <p>Phone Number: { props.info.phone }</p>
      <p>Email Address: { props.info.email }</p>
    </div>
  )
}

export default Contact;

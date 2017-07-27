import React from 'react';

const Content = (props) => {

  return (
    <div className='app-content'>
      <h3 className='sec-header'>Who I am</h3>
      <p>{props.about}</p>
    </div>
  )
}

export default Content;

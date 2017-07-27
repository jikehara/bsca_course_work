import React from 'react';
// import './style.css';

const Header = (props) => {
  return (
    <div className='app-header'>
      <h1>{ props.title }</h1>
      <h3>{ props.headerMessage }</h3>
    </div>
  )
}

export default Header;

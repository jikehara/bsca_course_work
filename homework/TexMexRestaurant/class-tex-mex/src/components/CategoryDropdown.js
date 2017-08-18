import React from 'react';

const CategoryDropdown = (props) => {
  return (
    <div>
      <select onChange={props.onCategorySelected}>
      <option value={null}>Please Select a Category</option> 
        {
          props.categories.map((category, index) => <option value={category} key={index}>{ category } </option> )
        }
      </select>
    </div>
  )
}

export default CategoryDropdown;

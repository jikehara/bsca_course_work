import React, { Component } from 'react';
import './App.css';
import DATA from './DATA';
import CategoryDropdown from './components/CategoryDropdown';
import MenuList from './components/MenuList';
import SpiceFilter from './components/SpiceFilter'

const categoryDummies = ["cat1", 'cat2', 'cat3'];

class App extends Component {

  state = {
    categories: [],
    selectedSpiceLevel: 0,
    selectedCategory: 'none'
  }

  componentDidMount = () => this.loadData();

  loadData() {
    const initCategories = DATA.items.reduce((cat, i) => {
      if (cat.indexOf(i.category) === -1) {
        cat.push(i.category)
      }
      return cat
    }, [])

    this.setState({categories: initCategories})
  }

  onCategorySelected = (event) => this.setState({selectedCategory: event.target.value})

  onFilterChanged = (event) => this.setState({selectedSpiceLevel: event.target.value})

  filterCategory = (items) => {
    if (this.state.selectedCategory === 'none') {
      return items;
    }
    const filteredItems = DATA.items.filter((item) => item.category === this.state.selectedCategory)
    return filteredItems
  }

  filterSpice = (items) => {
    if (this.state.selectedSpiceLevel === 0) {
      return items
    }
    return items.filter((item) => item.spiceLevel < this.state.selectedSpiceLevel)
  }

  render() {
    const filterItems = this.filterSpice(this.filterCategory(DATA.items));

    return (
      <div>
        {
          this.state.categories ?
          <div>
            <CategoryDropdown categories={this.state.categories} onCategorySelected={this.onCategorySelected}/>
            <MenuList items={filterItems} />
            <SpiceFilter onFilterChanged={this.onFilterChanged} />
          </div>
          : "Loading"
        }
      </div>
    )
  }
}

export default App;

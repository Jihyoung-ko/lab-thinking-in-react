import React, { Component } from "react";

class SearchBar extends Component {
  
  searchHandler = (e) => {
    this.props.onSearch(e.target.value);
  }

  checkboxHandler = (e) => {
    this.props.onClick(e.target.checked);
  }

  render() {
    return (
      <div>
        <p>Search</p>
        <input className="search-input" type="text" name="searchbar" onChange={this.searchHandler} />
        <div style={{marginBottom:"15px"}}>
          <input  type="checkbox" name="" id="" onClick={this.checkboxHandler}/>
          <label>Only show products on stock</label>
        </div>
      </div>
    )
  }
}

export default SearchBar;
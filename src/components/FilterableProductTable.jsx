import React, { Component } from "react";
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class FilterableProductTable extends Component {
  
  constructor(props) {
    super(props);
    const { products } = this.props;
    this.state = {
      products,
    }
  }

  searchHandler =(query) =>{ 
    const { products } = this.props;
    const productsCopy = [...this.state.products];
    let searchedProducts = [];
    (query ? searchedProducts = productsCopy.filter(product => product.name.toLowerCase().includes(query)) : searchedProducts = products)
    this.setState({
      products: searchedProducts
    })
  }

  checkboxHandler = (checkbox) => {
    const { products } = this.props;
    const productsCopy = [...this.state.products];
    let productsInStock = [];
    (checkbox ? productsInStock = productsCopy.filter(product => product.stocked === true) : productsInStock = products)
    
    this.setState({
      products: productsInStock
    })
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar onSearch={this.searchHandler} onClick={this.checkboxHandler}/>
        <ProductTable products={products}/>
      </div>
    )
  }
}

export default FilterableProductTable;
import React, { Component } from "react";
import ProductRow from './ProductRow';

class ProductTable extends Component {
  
  render() {
    const { products } = this.props;
    return (
      <table style={{width:"100%"}}>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        { products.map(product => {
          return <ProductRow item={product} />
        })}
      </table>
    )
  }
}

export default ProductTable;
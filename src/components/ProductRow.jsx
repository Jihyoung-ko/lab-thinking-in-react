import React,{ Component } from "react";

class ProductRow extends Component {
  render(){
    const { item } = this.props;
    const textColor = {color: (item.stocked ? "black" : "red")}

    return (
      <tr>
        <td style={textColor}>{item.name}</td>
        <td>{item.price}</td>
      </tr>
    )
  }
}

export default ProductRow;
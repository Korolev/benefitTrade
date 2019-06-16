import React, { Component } from 'react'
import ProductsListItem from './products-list-item'
import './products-list.css'

class ProductsList extends Component {
  static propTypes = {}

  render() {
    const { products } = this.props
    return (
      <div className="products-list">
        {products.map((item, i) => (
            <div className="products-list-item card" key={i}>
                <ProductsListItem product={item} />
            </div>
        ))}
      </div>
    )
  }
}

export default ProductsList

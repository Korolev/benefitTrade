import React, { Component } from 'react'

class ProductsListItem extends Component {
  static propTypes = {}

  render() {
    const { product } = this.props
    return (
      <div>
        <div
          className="products-list-item__image"
          style={{
            backgroundImage: 'url(' + product.image + ')',
            backgroundColor: '#fff'
          }}
        ></div>
        <div><label className="products-list-item__label typo_size_s">Название:</label></div>
        <div><span className="products-list-item__text typo_size_l">{product.name}</span></div>
        <div><label className="products-list-item__label typo_size_s">Количество в упаковке:</label></div>
        <div><span className="products-list-item__text typo_size_l">{product.packCount}</span></div>
        <div><label className="products-list-item__label typo_size_s">Вид молока:</label></div>
        <div><span className="products-list-item__text typo_size_l">{product.storageTime}</span></div>
        <div><label className="products-list-item__label typo_size_s">Сырьё:</label></div>
        <div><span className="products-list-item__text typo_size_l">{product.raw}</span></div>
        <div><label className="products-list-item__label typo_size_s">Упаковка:</label></div>
        <div><span className="products-list-item__text typo_size_l">{product.packType}</span></div>
        <div><label className="products-list-item__label typo_size_s">Страна-изготовитель:</label></div>
        <div><span className="products-list-item__text typo_size_l">{product.country}</span></div>
      </div>
    )
  }
}

export default ProductsListItem

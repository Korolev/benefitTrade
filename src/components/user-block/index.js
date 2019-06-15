import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StarRating from '../starrating'
import './user-block.css'

class UserBlock extends Component {
  static propTypes = {
    size: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string
  }

  state = {
    editable: false
  }

  render() {
    return (
      <div className="row no-gutters user-menu-large">
        <div
          className={'user-block user-block_size_ col-md-4' + this.props.size}
          style={{
            width: sizes[this.props.size],
            height: sizes[this.props.size],
            backgroundImage: 'url(' + this.props.user.avatar + ')',
            backgroundColor: 'lightblue'
          }}
        ></div>
        {this.showUserInMenu}
        {this.showAllUserRating}
      </div>
    )
  }

  get showAllUserRating() {
    if (this.props.size !== 'l') return ''
    return (
      <div className="user-rating">
        {this.userRating}
        <ul className="critery">
          <li>Регулярность закупок</li>
          <li>Объёмы закупок</li>
          <li>Платёжеспособность</li>
        </ul>
      </div>
    )
  }

  get userRating() {
    if (this.props.size !== 'l') return ''
    return <StarRating starsSelected={this.props.user.rating}></StarRating>
  }

  get showUserInMenu() {
    if (this.props.size !== 's') return ''
    return (
      <div className="col-md-8 user-profile">
        <div className="user-name">{this.props.user.name}</div>
        <div className="user-id">ИНН: {this.props.user.id}</div>
      </div>
    )
  }

  // get userId() {
  //   if (this.props.size !== 's') return ''
  //   return 'ИНН: ' + this.props.user.id
  // }
}

const sizes = {
  l: 100,
  s: 46
}

export default UserBlock

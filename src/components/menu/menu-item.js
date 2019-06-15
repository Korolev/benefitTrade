import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Icon from '../icon/index.js'
import './menu.css'

class MenuItem extends Component {
  static propTypes = {}

  render() {
    const { link, children, icon } = this.props
    return (
      <div className="nav-elem">
        <Icon type={icon}></Icon>
        <NavLink to={link} activeStyle={{ color: '#109CF1' }}>
          {children}
        </NavLink>
      </div>
    )
  }
}

export default MenuItem

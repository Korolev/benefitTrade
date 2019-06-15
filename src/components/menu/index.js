import React, { Component } from 'react'
import MenuItem from './menu-item'

class Menu extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="nav-menu box-shadow">
        <h2 className="nav-menu__title typo_color_active">СНАБЖЕНИЕ</h2>
        <nav>{this.props.children}</nav>
      </div>
    )
  }
}

export { MenuItem }
export default Menu

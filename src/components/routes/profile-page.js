import React, { Component, Fragment } from 'react'
import Menu, { MenuItem } from '../menu'

class ProfilePage extends Component {
  static propTypes = {}

  render() {
    return (
      <Fragment>
        <Menu>
          <MenuItem link="/home">HomePage</MenuItem>
          <MenuItem link="/profile">ProfilePage</MenuItem>
          <MenuItem link="/login">LoginPage</MenuItem>
        </Menu>
        <h2>ProfilePage</h2>
      </Fragment>
    )
  }
}

export default ProfilePage

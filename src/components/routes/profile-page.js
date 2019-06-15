import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import history from '../../helpers/history'
import Menu, { MenuItem } from '../menu'
import UserBlock from '../user-block'
import { userSelector, userLoggedInSelector } from '../../selectors'

class ProfilePage extends Component {
  static propTypes = {}

  componentDidMount() {
    this.checkLogin();
  }

  componentDidUpdate() {
    this.checkLogin();
  }

  render() {
    return (
      <Fragment>
        <Menu>
          <MenuItem link="/home">HomePage</MenuItem>
          <MenuItem link="/profile">ProfilePage</MenuItem>
          <MenuItem link="/login">LoginPage</MenuItem>
        </Menu>
        <div className="content">
          <h2>ProfilePage</h2>
          <div>
            <div><UserBlock size="l" username={this.props.user.name} avatar={this.props.user.avatar} /></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </Fragment>
    )
  }

  checkLogin = () => {
    if (!this.props.loggedIn) {
      history.push('/login')
    }
  }
}

export default connect(
  (state) => ({
    user: userSelector(state),
    loggedIn: userLoggedInSelector(state)
  }),
  null
)(ProfilePage)

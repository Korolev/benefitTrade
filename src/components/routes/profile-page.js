import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import history from '../../helpers/history'
import Menu, { MenuItem } from '../menu'
import UserBlock from '../user-block'
import { userSelector, userLoggedInSelector } from '../../selectors'

class ProfilePage extends Component {
  static propTypes = {}

  componentDidMount() {
    this.checkLogin()
  }

  componentDidUpdate() {
    this.checkLogin()
  }

  render() {
    return (
      <Fragment>
        <Menu>
          {/* <MenuItem link="/home">HomePage</MenuItem>
          <MenuItem link="/login">LoginPage</MenuItem> */}
          <div>
            <UserBlock size="s" user={this.props.user} />
          </div>
          <MenuItem link="/profile" icon="profile">
            Мой профиль
          </MenuItem>
          <MenuItem link="/profile" icon="buyers">
            Мои поставщики
          </MenuItem>
          <MenuItem link="/profile" icon="notification">
            Мои уведомления
          </MenuItem>
          <MenuItem link="/profile" icon="orders">
            Мои заказы
          </MenuItem>
          <MenuItem link="/profile" icon="find-buyer">
            Найти поставщика
          </MenuItem>
          <MenuItem link="/profile" icon="more">
            Дополнительно
          </MenuItem>
        </Menu>
        <div className="content">
          <h2>ProfilePage</h2>
          <div>
            <div>
              <UserBlock size="l" user={this.props.user} />
            </div>
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

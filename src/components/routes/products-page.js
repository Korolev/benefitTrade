import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import history from '../../helpers/history'
import Menu, { MenuItem } from '../menu'
import UserBlock from '../user-block'
import { loadProductsByUserId, loadViewedUser } from '../../ac'
import { userSelector, userLoggedInSelector, userProductsSelector, userViewedSelector } from '../../selectors'

class ProductsPage extends Component {
  static propTypes = {}

  componentDidMount() {
    this.checkLogin()
    loadViewedUser(this.props.match.params.id)
    // loadProductsByUserId(this.props.user.id)
  }

  componentDidUpdate() {
    this.checkLogin()
  }

  render() {
    return (
      <Fragment>
        <Menu>
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
        <div className="content box-shadow">
          <div>
            <div>
              <UserBlock size="s" user={this.props.providerUser} />
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
    loggedIn: userLoggedInSelector(state),
    providerUser: userViewedSelector(state),
    products: userProductsSelector(state)
  }),
  { loadProductsByUserId, loadViewedUser }
)(ProductsPage)

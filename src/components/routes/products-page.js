import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import history from '../../helpers/history'
import Menu, { MenuItem } from '../menu'
import Search from '../search'
import Breadcrumbs from '../breadcrumbs'
import UserBlock from '../user-block'
import { loadProductsByUserId, loadViewedUser } from '../../ac'
import {
  userSelector,
  userLoggedInSelector,
  userProductsSelector,
  userViewedSelector
} from '../../selectors'
import ProductsList from '../products/products-list';

class ProductsPage extends Component {
  static propTypes = {}

  componentDidMount() {
    const { loadViewedUser, loadProductsByUserId, match } = this.props
    const userId = match.params.id
    this.checkLogin()
    console.log('!')
    loadViewedUser(this.props.match.params.id)
    loadProductsByUserId(userId)
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
        <Search></Search>
        <div className="wrapper">
          <div className="content">
            <div>
              <div>
                <UserBlock size="s" user={this.props.providerUser} />
              </div>
              <button className="button float-right">Предварительный заказ</button>
              <div className="clearfix"></div>
              <Breadcrumbs/>
              <ProductsList products={this.props.products} />
            </div>
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

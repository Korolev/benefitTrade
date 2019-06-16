import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import history from '../../helpers/history'
import Menu, { MenuItem } from '../menu'
import Search from '../search'
import Grid from '../grid'
import { getProviders } from '../../db/index'
import StarRating from '../starrating'
import {
  userSelector,
  userLoggedInSelector,
  userProvidersSelector,
  userConsumerSelector
} from '../../selectors'
import UserBlock from '../user-block'
import './home-page.css'
import { loadProviders, loadConsumers } from '../../ac'

class HomePage extends Component {
  static propTypes = {}

  componentDidMount() {
    this.checkLogin()
    console.log(this.props, '<<PROPS')
    if (this.props.user && this.props.user.type === 'consumer') {
      this.props.loadProviders()
    } else {
      this.props.loadConsumers()
    }
  }

  componentDidUpdate() {
    this.checkLogin()
  }

  render() {
    const itemList = this.props.itemList

    const dataMap = {
      connected: '',
      name: 'Название компании',
      phone: 'Котактный телефон',
      type: 'Статус поставщика',
      rating: 'Рейтинг',
      categories: 'Категории поставщика'
    }

    const columnSequences = Object.keys(dataMap)

    const sortableColumns = ['name', 'rating']

    const sortByColumn = 'rating'

    const columnComponents = {
      name: (item, key) => (
        <div>
          <NavLink to={'/profile/' + item.id}>
            <UserBlock size="xs" user={item} />
          </NavLink>
        </div>
      ),
      rating: (item, key) => <StarRating starsSelected={item[key]} />,
      connected: (item, key) => (
        <span
          className={
            Math.random() * 10 > 5
              ? 'connection-star'
              : 'connection-star connected'
          }
        ></span>
      ),
      categories: (item, key) => (
        <span style={{ color: 'red' }}>{item[key].join(', ')}</span>
      )
    }

    return (
      <Fragment>
        <Menu>
          <MenuItem link="/home">HomePage</MenuItem>
          <MenuItem link="/login">LoginPage</MenuItem>
          <MenuItem link="/products/101">Products</MenuItem>
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
        <div className="content content-height-auto box-shadow">
          <Grid
            items={itemList}
            dataMap={dataMap}
            columnSequences={columnSequences}
            columnComponents={columnComponents}
            sortableColumns={sortableColumns}
            sortByColumn={sortByColumn}
          />
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
  (state) => {
    console.log(state, '<<STATE')
    console.log(
      state && state.user.type === 'consumer',
      'state.user.type === consumer'
    )
    const listSelector =
      state && state.user.type === 'consumer'
        ? userProvidersSelector
        : userConsumerSelector
    return {
      user: userSelector(state),
      loggedIn: userLoggedInSelector(state),
      itemList: listSelector(state)
    }
  },
  {
    loadProviders,
    loadConsumers
  }
)(HomePage)

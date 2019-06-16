import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import history from '../../helpers/history'
import Menu, { MenuItem } from '../menu'
import Search from '../search'
import Grid from '../grid'
import { getConsumers, getProviders } from '../../db/index'
import StarRating from '../starrating'
import { userSelector, userLoggedInSelector } from '../../selectors'
import Icon from '../icon'
import UserBlock from '../user-block'

class HomePage extends Component {
  static propTypes = {}

  componentDidMount() {
    this.checkLogin()
  }

  componentDidUpdate() {
    this.checkLogin()
  }

  render() {
    const traders = getProviders()

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
          <UserBlock size="xs" user={this.props.user} />
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
        >
          <Icon type="star" />
        </span>
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
            items={traders}
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
  (state) => ({
    user: userSelector(state),
    loggedIn: userLoggedInSelector(state)
  }),
  null
)(HomePage)

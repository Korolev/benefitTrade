import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import history from '../../helpers/history'
import Menu, { MenuItem } from '../menu'
import Grid from '../grid'
import { getConsumers, getProviders } from '../../db/index'
import StarRating from '../starrating'
import { userSelector, userLoggedInSelector } from '../../selectors'

class HomePage extends Component {
  static propTypes = {}

  componentDidMount() {
    this.checkLogin();
  }

  componentDidUpdate() {
    this.checkLogin();
  }

  render() {
    const traders = getProviders()

    const dataMap = {
      name: 'Название компании',
      phone: 'Котактный телефон',
      type: 'Статус поставщика',
      categories: 'Категории поставщика',
      rating: 'Рейтинг'
    }

    const columnSequences = Object.keys(dataMap)

    const columnComponents = {
      rating: (rating) => <StarRating starsSelected={rating} />
    }

    const sortByKey = (ascdesc) => (key) => (a, b) => {
      if (ascdesc === 'asc') {
        return a[key] < b[key] ? 1 : -1
      } else {
        return a[key] < b[key] ? -1 : 1
      }
    }

    const items = traders.sort(sortByKey('asc')('rating'))
    return (
      <Fragment>
        <Menu>
          <MenuItem link="/home">HomePage</MenuItem>
          <MenuItem link="/login">LoginPage</MenuItem>
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
          <h2>HomePage</h2>
          <Grid
            items={items}
            dataMap={dataMap}
            columnSequences={columnSequences}
            columnComponents={columnComponents}
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

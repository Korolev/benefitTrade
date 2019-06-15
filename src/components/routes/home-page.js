import React, { Component, Fragment } from 'react'
import Menu, { MenuItem } from '../menu'
import Grid from '../grid'
import { getConsumers, getProviders } from '../../db/index'
import StarRating from '../starrating'

class HomePage extends Component {
  static propTypes = {}

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
        <h2>HomePage</h2>
        <Grid
          items={items}
          dataMap={dataMap}
          columnSequences={columnSequences}
          columnComponents={columnComponents}
        />
      </Fragment>
    )
  }
}

export default HomePage

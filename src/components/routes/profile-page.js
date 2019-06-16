import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import history from '../../helpers/history'
import Menu, { MenuItem } from '../menu'
import Search from '../search'
import ClientMap from '../client-map'
import UserBlock from '../user-block'
import { userSelector, userLoggedInSelector } from '../../selectors'
import './profile-page.css'
import Icon from '../icon'

class ProfilePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: 'ИП Мирохина А. Н.',
        inn: '12345667890',
        phones: ['+7(123)456-78-90', '+7(123)456-71-71'],
        addresses: [
          'Республика Крым, г. Симферополь, ул. Вернадского, д. 4',
          'Республика Крым, г. Симферополь, ул. Кирова, д. 3'
        ],
        specif: {
          Бакалея: ['Каши', 'Супы']
        }
      }
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit = (prop) => (event) => {
    this.setState({
      user: {
        [prop]: event.target.value
      }
    })
  }

  componentDidMount() {
    this.checkLogin()
  }

  componentDidUpdate() {
    this.checkLogin()
  }

  render() {
    const { user, readonly } = this.state

    const pensilIcon = (
      <div className="edit-icon-container">
        <div className="edit-icon">
          <Icon type="pencil" />
        </div>
      </div>
    )

    return (
      <Fragment>
        <Menu>
          <div>
            <UserBlock size="s" user={this.props.user} />
          </div>
          <MenuItem link="/profile" icon="profile">
            Мой профиль
          </MenuItem>
          <MenuItem link="/home" icon="buyers">
            Мои поставщики
          </MenuItem>
          <MenuItem link="/home" icon="notification">
            Мои уведомления
          </MenuItem>
          <MenuItem link="/home" icon="orders">
            Мои заказы
          </MenuItem>
          <MenuItem link="/home" icon="find-buyer">
            Найти поставщика
          </MenuItem>
          <MenuItem link="/home" icon="more">
            Дополнительно
          </MenuItem>
        </Menu>
        <Search></Search>
        <div className="content box-shadow">
          <div className="container custom-container">
            <div className="row custom-row">
              <div className="col-sm-3 custom-col">
                <div className="col-content">
                  <UserBlock size="l" user={this.props.user} />
                </div>
              </div>
              <div className="col-sm custom-col">
                <form className="input-form">
                  <div className="col-content">
                    <div className="input-container">
                      <label className="input-container__title">
                        Название юр. лица:
                      </label>
                      <input
                        className="input"
                        type="text"
                        title={'Название юр. лица'}
                        value={user.name}
                        onChange={this.handleEdit('name')}
                      />
                    </div>
                    {pensilIcon}
                  </div>

                  <div className="col-content">
                    <div className="input-container">
                      <label className="input-container__title">ИНН:</label>
                      <input
                        className="input"
                        type="text"
                        title={'ИНН'}
                        value={user.inn}
                        onChange={this.handleEdit('inn')}
                      />
                    </div>
                    {pensilIcon}
                  </div>

                  <div className="col-content">
                    <div className="input-container">
                      <label className="input-container__title">
                        Контактный телефон:
                      </label>
                      {user.phones.map((item, index) => (
                        <input
                          className="input"
                          key={index + item}
                          type="text"
                          title={'Контактный телефон'}
                          value={item}
                          //onChange={this.handleEdit("phones")}
                        />
                      ))}
                    </div>
                    {pensilIcon}
                  </div>

                  <div className="col-content">
                    <div className="input-container">
                      <label className="input-container__title">
                        Адреса торговых точек:
                      </label>
                      {user.addresses.map((item, index) => (
                        <input
                          className="input"
                          key={index + item}
                          type="text"
                          title={'Адрес'}
                          value={item}
                          //onChange={this.handleEdit("addresses")}
                        />
                      ))}
                    </div>
                    {pensilIcon}
                  </div>
                </form>
                <div className="col-content">
                  <div className="user-map-block">
                    <label className="input-container__title">
                      Проверить адрес на корректность
                    </label>
                    <ClientMap></ClientMap>
                  </div>
                </div>
              </div>
              <div className="col-sm custom-col">
                <div className="col-content">
                  <button className="save-button">Сохранить</button>
                </div>
              </div>
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
    loggedIn: userLoggedInSelector(state)
  }),
  null
)(ProfilePage)

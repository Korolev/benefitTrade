import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import history from '../../helpers/history'
import Menu, { MenuItem } from '../menu'
import Search from '../search'
import ClientMap from '../client-map'
import UserBlock from '../user-block'
import Brands from '../brands'
import { userSelector, userLoggedInSelector } from '../../selectors'
import './profile-page.css'
import Icon from '../icon'

class ProfilePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: this.props.user
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit = (prop) => (event) => {
    this.setState({
      profile: {
        [prop]: event.target.value
      }
    })
    console.log('SSTATE', this.state)
  }

  componentDidMount() {
    this.checkLogin()
  }

  componentDidUpdate() {
    this.checkLogin()
  }

  render() {
    const { user } = this.props
    const { profile } = this.state

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
            <UserBlock size="s" user={user} />
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
        <div className="content card box-shadow">
          <div className="container custom-container">
            <div className="row custom-row">
              <div className="col-sm-2 custom-col user-profile">
                <div className="col-content">
                  <UserBlock size="l" user={user} />
                </div>
              </div>
              <div className="col-sm custom-col col-without-pad">
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
                        value={profile.name}
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
                        value={profile.inn}
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
                      {/*{user.phones.map((item, index) => (*/}
                      {/*  <input*/}
                      {/*    className="input"*/}
                      {/*    key={index + item}*/}
                      {/*    type="text"*/}
                      {/*    title={'Контактный телефон'}*/}
                      {/*    value={item}*/}
                      {/*    //onChange={this.handleEdit("phones")}*/}
                      {/*  />*/}
                      {/*))}*/}
                    </div>
                    {pensilIcon}
                  </div>

                  <div className="col-content">
                    <div className="input-container">
                      <label className="input-container__title">
                        Адреса торговых точек:
                      </label>
                      {/*{user.addresses.map((item, index) => (*/}
                      {/*  <input*/}
                      {/*    className="input"*/}
                      {/*    key={index + item}*/}
                      {/*    type="text"*/}
                      {/*    title={'Адрес'}*/}
                      {/*    value={item}*/}
                      {/*    //onChange={this.handleEdit("addresses")}*/}
                      {/*  />*/}
                      {/*))}*/}
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
              <div className="col-sm custom-col save-button">
                <div className="col-content">
                  <button className="button">Сохранить изменения</button>
                </div>
                <Brands></Brands>
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

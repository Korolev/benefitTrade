import React, { Component } from 'react'
import PropTypes from 'prop-types'
import history from '../../helpers/history'
import { connect } from 'react-redux'
import { login } from '../../ac'
import { userLoggedInSelector } from '../../selectors'
import './login-form.css'

class LoginForm extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool
  }

  state = {
    id: ''
  }

  componentDidMount() {
    this.handleLogin()
  }

  componentDidUpdate() {
    this.handleLogin()
  }

  render() {
    return (
      //     <div>
      // <h2>Форма входа</h2>
      // Ваш ИНН:
      // <input
      //   type="text" name="id"
      //   value={this.state.id}
      //   className={this.getClassName('id')}
      //   onChange={this.handleChange('id')}
      // />
      // <input type="submit" value="Войти"  disabled={!this.isValidField('id')} onClick={this.submitForm} />
      // </div>
      <section className="main-page">
        <article className="login-block">
          <h1>Снабжение</h1>
          <p className="description">Площадка для сотрудничества</p>
          <p className="description">местных производителей и покупателей</p>
          <div className="user-category">
            <div className="form-check">
              <div className="category producer">
                <input
                  className="form-check-input radio"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Я поставщик
                </label>
              </div>
              <div className="category buyer">
                <input
                  className="form-check-input radio"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  Я покупатель
                </label>
              </div>
            </div>
            <form className="form-signin">
              <input
                type="text"
                name="id"
                value={this.state.id}
                className={this.getClassName('id')}
                onChange={this.handleChange('id')}
                placeholder="Логин (ИНН)"
              />
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Пароль"
              />
              <div className="row">
                <div className="col remember-me">
                  <input type="checkbox" value="remember-me" /> Запомнить меня
                </div>
                <div className="forgot-pass col">Забыли пароль?</div>
              </div>
              <input
                type="submit"
                value="Войти"
                disabled={!this.isValidField('id')}
                onClick={this.submitForm}
                className="button"
              />
              <div className="gosuslugi">
                Войти через портал Госуслуги (ЕСИА)
              </div>
            </form>
          </div>
        </article>
      </section>
    )
  }

  isValidField = (type) => this.state[type].length >= limits[type].min

  getClassName = (type) =>
    this.isValidField(type) ? 'form-control' : 'form-input__error form-control'

  handleChange = (type) => (ev) => {
    const { value } = ev.target
    if (value.length > limits[type].max) return
    this.setState({
      [type]: value
    })
  }

  submitForm = (event) => {
    event.preventDefault()
    if (this.state.id !== '') {
      this.props.handleLogin(this.state.id)
    }
  }

  handleLogin = () => {
    if (this.props.loggedIn) {
      history.push('/home')
    }
  }
}

const limits = {
  id: {
    min: 1,
    max: 10
  }
}

export default connect(
  (state) => ({
    loggedIn: userLoggedInSelector(state)
  }),
  (dispatch) => ({
    handleLogin: (id) => dispatch(login(id))
  })
)(LoginForm)

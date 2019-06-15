import React, { Component } from 'react'
import PropTypes from 'prop-types'
import history from '../helpers/history'
import { connect } from 'react-redux'
import { login } from '../ac'
import { userLoggedInSelector } from '../selectors'

class LoginForm extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool
  }

  state = {
    id: ''
  }

  componentDidMount() {
    this.handleLogin();
  }

  componentDidUpdate() {
    this.handleLogin();
  }

  render() {
    return (
      <div>
        <h2>Форма входа</h2>
        Ваш ИНН:
        <input
          type="text" name="id"
          value={this.state.id}
          className={this.getClassName('id')}
          onChange={this.handleChange('id')}
        />
        <input type="submit" value="Войти"  disabled={!this.isValidField('id')} onClick={this.submitForm} />
      </div>
    )
  }

  isValidField = (type) => this.state[type].length >= limits[type].min

  getClassName = (type) => (this.isValidField(type) ? '' : 'form-input__error')

  handleChange = (type) => (ev) => {
    const { value } = ev.target
    if (value.length > limits[type].max) return
    this.setState({
      [type]: value
    })
  }

  submitForm = (event) => {
    event.preventDefault();
    if (this.state.id !== '') {
      this.props.handleLogin(this.state.id);
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

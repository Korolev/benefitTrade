import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Menu, { MenuItem } from './menu'
import LoginPage from './routes/login-page'
import HomePage from './routes/home-page'
import ProfilePage from './routes/profile-page'

class App extends Component {
  render() {
    return (
      <div>
        <Menu>
          <MenuItem link="/home">HomePage</MenuItem>
          <MenuItem link="/profile">ProfilePage</MenuItem>
          <MenuItem link="/login">LoginPage</MenuItem>
        </Menu>
        <Switch>
          <Redirect from="/" exact to="/login" />
          <Route path="/home" component={HomePage} exact />
          <Route path="/profile" component={ProfilePage} exact />
          <Route path="/login" component={LoginPage} />
          <Route path="*" render={() => <h1>Not Found Page</h1>} />
        </Switch>
      </div>
    )
  }
}

export default App

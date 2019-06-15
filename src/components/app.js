import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Counter from './counter'
import Menu, { MenuItem } from './menu'
import LoginPage from './routes/login-page'

class App extends Component {
  render() {
    return (
      <div>
        <Menu>
          <MenuItem link="/counter">Counter</MenuItem>
          <MenuItem link="/login">LoginPage</MenuItem>
        </Menu>
        <Switch>
          <Redirect from="/" exact to="/login" />
          <Route path="/counter" component={Counter} exact />
          <Route path="/login" component={LoginPage} />
          <Route path="*" render={() => <h1>Not Found Page</h1>} />
        </Switch>
      </div>
    )
  }
}

export default App

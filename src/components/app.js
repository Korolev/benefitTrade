import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import LoginPage from './routes/login-page'
import HomePage from './routes/home-page'
import ProfilePage from './routes/profile-page'
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'

class App extends Component {
  render() {
    return (
      <div>
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

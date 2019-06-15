import React, { Component } from 'react'
import Icon from '../icon/index.js'
import './search.css'

class Search extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="search">
        <Icon type="search"></Icon>
        <input
          type="search"
          className="form-control"
          placeholder="Начните вводить текст"
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
      </div>
    )
  }
}

export default Search

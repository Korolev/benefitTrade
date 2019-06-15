import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './user-block.css'

class UserBlock extends Component {
  static propTypes = {
    size: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    username: PropTypes.string
  }

  state = {
    editable: false
  }

  render() {
    return (
      <div>
        <div
          className={("user-block user-block_size_" + this.props.size)}
          style={{
            width: sizes[this.props.size],
            height: sizes[this.props.size],
            backgroundImage: "url(" + this.props.avatar + ")",
            backgroundColor: 'lightblue'
          }}
        ></div>
        <div>
          {this.userRating}
        </div>
      </div>
    )
  }

  get userRating() {
    if (this.props.size !== 'l') return ''
    return 'rating'
  }
}

const sizes = {
  l: 100,
  s: 46
}

export default UserBlock

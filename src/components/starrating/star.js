import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'

const Star = ({ selected = false, onClick = (f) => f }) => (
  <div className={selected ? 'star selected' : 'star'} onClick={onClick}>
    <Icon type="rateStar" />
  </div>
)

Star.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func
}

export default Star

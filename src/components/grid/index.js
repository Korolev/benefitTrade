import React from 'react'
import PropTypes from 'prop-types'
import './grid.css'
import GridHead from './gridhead'
import GridBody from './gridbody'

const Grid = (props) => (
  <table className="table">
    <GridHead {...props} />
    <GridBody {...props} />
  </table>
)

Grid.propTypes = {
  items: PropTypes.array,
  columnSequences: PropTypes.array,
  dataMap: PropTypes.object
}

export default Grid

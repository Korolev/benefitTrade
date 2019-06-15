import React from 'react'
import PropTypes from 'prop-types'

const GridHead = ({ columnSequences = [0], dataMap = {} }) => (
  <thead>
    <tr>
      {columnSequences.map((key, i) => (
        <th key={i}>{dataMap[key]}</th>
      ))}
    </tr>
  </thead>
)

GridHead.propTypes = {
  columnSequences: PropTypes.array,
  dataMap: PropTypes.object
}

export default GridHead

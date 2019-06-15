import React from 'react'
import PropTypes from 'prop-types'

const GridBody = ({
  items,
  columnSequences = [0],
  dataMap = {},
  columnComponents = {}
}) => (
  <tbody>
    {items.map((item, i) => (
      <tr key={i}>
        {columnSequences.map((key, i) => (
          <td key={i}>
            {(columnComponents[key] && columnComponents[key](item[key])) ||
              item[key]}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
)

GridBody.propTypes = {
  items: PropTypes.array,
  columnSequences: PropTypes.array,
  dataMap: PropTypes.object
}

export default GridBody

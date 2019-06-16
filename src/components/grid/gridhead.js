import React from 'react'
import PropTypes from 'prop-types'

const GridHead = ({
  columnSequences = [0],
  dataMap = {},
  sortableColumns = [],
  onSortableClick = (f) => f
}) => (
  <thead>
    <tr>
      {columnSequences.map((key, i) => (
        <th
          key={i}
          className={[
            'head-col',
            sortableColumns.includes(key) ? 'sortable-col' : ''
          ].join(' ')}
          onClick={() => onSortableClick(key)}
        >
          <span>{dataMap[key]}</span>
        </th>
      ))}
    </tr>
  </thead>
)

GridHead.propTypes = {
  columnSequences: PropTypes.array,
  sortableColumns: PropTypes.array,
  dataMap: PropTypes.object
}

export default GridHead

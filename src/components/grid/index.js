import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './grid.css'
import GridHead from './gridhead'
import GridBody from './gridbody'
import sortByKey from '../../helpers/sortByKey'

export default class Grid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sortType: 'asc',
      sortByColumn: props.sortByColumn,
      items: props.items.concat().sort(sortByKey('asc')(props.sortByColumn))
    }

    this.sortByField.bind(this)
  }

  sortByField(colName) {
    const { sortType, sortByColumn } = this.state
    let newSortType = 'asc'

    if (this.props.sortableColumns.includes(colName)) {
      if (sortByColumn === colName) {
        newSortType = sortType === 'asc' ? 'desc' : 'asc'
      }

      this.setState({
        sortType: newSortType,
        sortByColumn: colName,
        items: this.props.items.concat().sort(sortByKey(newSortType)(colName))
      })
    }
  }

  render() {
    return (
      <table className="table">
        <GridHead
          {...this.props}
          onSortableClick={(key) => this.sortByField(key)}
        />
        <GridBody {...this.props} items={this.state.items} />
      </table>
    )
  }
}

Grid.propTypes = {
  sortByColumn: PropTypes.string.isRequired,
  items: PropTypes.array,
  sortableColumns: PropTypes.array,
  columnSequences: PropTypes.array,
  dataMap: PropTypes.object
}

Grid.defaultProps = {
  items: [],
  sortableColumns: [],
  columnSequences: [],
  dataMap: {}
}

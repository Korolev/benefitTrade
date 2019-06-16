import React from 'react'
import PropTypes from 'prop-types'

const Breadcrumbs = () => (
  <div className="breadcrumbs typo_size_s">
      <span>Молочные продукты</span>&gt;<span>Молоко</span>
  </div>
)

Breadcrumbs.propTypes = {
  crumbs: PropTypes.array
}

export default Breadcrumbs

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Generate from './generate'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div>
      <div>
        <h3>Welcome, {email}</h3>
      </div>
      <div>
        <Generate />
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}

import React from 'react'
import PropTypes from 'prop-types'

const Team = props => (
  <ul>
    {props.members.map((member, index) => ( 
      <li key={index}>{member.name}</li>
    ))}
  </ul>
)

Team.defaultProps = {
  members: [
    { name: 'Tom' }
  ]
}

Team.propTypes = {
  members: PropTypes.array
}

export default Team;

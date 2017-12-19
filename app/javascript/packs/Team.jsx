import React from 'react';
import PropTypes from 'prop-types';
import Member from './Member';

const Team = props => (
  <div>
  {props.members.map((member, index) => ( 
    <Member key={index} {...member} />
  ))}
  </div>
)

Team.defaultProps = {
  members: [
    { name: 'Tom', assignments: ['#A00', '#A00', '#000', '', ''] }
  ]
}

Team.propTypes = {
  members: PropTypes.array
}

export default Team;

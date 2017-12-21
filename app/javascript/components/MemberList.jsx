import React from 'react';
import PropTypes from 'prop-types';
import Member from './Member';

const MemberList = ({ members, addMember }) => (
  <div>
  {members.map((member, index) => ( 
    <Member key={index} {...member} />
  ))}
  <button onClick={ () => addMember("Tom") }>+</button>
  </div>
)

MemberList.propTypes = {
  members: PropTypes.array
}

export default MemberList;

import React from 'react';
import Assignment from './Assignment';
import '../styles/Member';

const Member = ({ name, assignments }) => (
  <div className="member-row">
    <p className="member-name">{name}</p>
    {assignments.map((assignment, index) => ( 
      <Assignment key={index} assignment={assignment}/>
    ))}
  </div>
)

export default Member;

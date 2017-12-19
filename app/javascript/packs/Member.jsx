import React from 'react';
import Assignment from './Assignment';
import './Member.scss'

const Member = props => (
  <div className="member-row">
    <p className="member-name">{props.name}</p>
    {props.assignments.map((assignment, index) => ( 
      <Assignment key={index} assignment={assignment}/>
    ))}
  </div>
)

export default Member;

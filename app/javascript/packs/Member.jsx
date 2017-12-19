import React from 'react';
import Assignment from './Assignment';

const Member = props => (
  <div>
    <p>{props.name}</p>
    {props.assignments.map((assignment, index) => ( 
      <Assignment key={index}/>
    ))}
  </div>
)

export default Member;

import React from 'react';
import '../styles/Assignment';

const Assignments = ({ assignment } )=> (
  <div className='grid-box' style={{backgroundColor: assignment}}></div>
)

export default Assignments;

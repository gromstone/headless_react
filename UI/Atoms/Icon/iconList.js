import React from 'react';

import Icon from '../../../src/Components/Icon';
import icons from './icons'

function Icons() {
  const iconArray = [];

  Object.keys(icons).forEach( (name) => {
    if(icons[name]) {
      iconArray.push(
        <div style={{ margin:5}}>
          <Icon icon={icons[name]}/>
        </div>
      )
    }
  });

  return (
    <div>
      <ul>
        <li></li>
        { iconArray.map( (el,i) => {
          console.log(el);
          <li key={i}>{el}</li>
        })}
      </ul>
    </div>
  );
}

export default Icons;

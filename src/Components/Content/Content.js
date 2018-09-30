import React from "react";

const Content = (props) => (
  <div className='flex__row'>
    <div className='flex__col--xs-2'>MENU</div>
    <div className='flex__col--xs-10'>
      CONTENT
      { props.children }
    </div>
  </div>
);

export default Content;

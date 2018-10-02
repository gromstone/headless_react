import React from "react";

const Content = (props) => (
  <div className='flex__row'>
    <aside className='flex__col--xs-2'>MENU</aside>
    <div className='flex__col--xs-10'>
      CONTENT
      { props.children }
    </div>
  </div>
);

export default Content;

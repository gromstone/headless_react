import React, { Component } from 'react';

class Container extends Component {
  render() {
    const { story } = this.props;
    const prepStyles = {
      padding: '3em',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }

    return (
      <React.StrictMode>
        <div
          data-floating-menu-container
          role="main"
          style={{
            padding: '3em',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          {story}
        </div>
      </React.StrictMode>
    );
  }
}

export default Container;

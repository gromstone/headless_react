import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

class Jumbotron extends Component {

  static propTypes = {
    fluid:PropTypes.bool,
    flyby:PropTypes.bool,
    children:PropTypes.node,
    className:PropTypes.string,
  }

  static defaultProps = {
    fluid: false,
    tag: 'div'
  }

  render(){

    let { tag: Tag, className, fluid, flyby, jumbo, children, ...attributes } = this.props;
    const jumboclasses = classNames(
      'jumbotron',
      fluid ? 'jumbotron--fluid' : false,
      className
    );

    const flybyclasses = classNames(
      'container flyby',
      className
    );

    let component = <Tag {...attributes} className={jumboclasses}> { children } </Tag>

    if(flyby){
      component = (
        <Tag {...attributes} className={flybyclasses}>
          { children }
        </Tag>
      )
    }

    return component;
  }
}

export default Jumbotron;

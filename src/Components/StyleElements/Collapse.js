import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

const SHOW = "SHOW";
const SHOWN = "SHOWN";
const HIDE = "HIDE";
const HIDDEN = "HIDDEN";

const DELAYS = {
  show: 400,
  hide: 400
}
class Collapse extends Component {
  state = {
    collapse: this.props.isOpen ? SHOWN : HIDDEN,
    height: null
  }

  static propTypes = {
    isOpen: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    delay: PropTypes.oneOfType([
      PropTypes.shape({show: PropTypes.number, hide: PropTypes.number,}),
      PropTypes.number
    ]),
    navbar: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {
    isOpen: false,
    delay: DELAYS,
    onOpen: () => {},
    onClose: () => {}
  };

  componentWillReceiveProps(nextProps) {
    const willOpen = nextProps.isOpen;
    const collapse = this.state.collapse;

    if( willOpen && collapse === HIDDEN){
      this.setState({
        collapse: SHOW
      }, () => {
        this.setState({ height: this.getHeight() });
        this.transitionTag = setTimeout( () => {
          this.setState({
            collapse:SHOWN,
            height: null
          })
        }, this.getDelay('show'));
      });

    } else if (!willOpen && collapse === SHOWN) {
      this.setState({
        height: this.getHeight()
      }, () => {
        this.setState ({
          collapse: HIDE,
          height: this.getHeight()
        }, () => {
          this.setState({height: 0});
        })
      });

      this.transitionTag = setTimeout( () => {
        this.setState({
          collapse:HIDDEN,
          height:null
        })
      }, this.getHeight('hide'));
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.collapse === SHOWN && prevState && prevState.collapse !== SHOWN) {
      this.props.onOpen();
    }
    if (this.state.collapse === HIDDEN && prevState && prevState.collapse !== HIDDEN) {
      this.props.onClose();
    }
  }

  componentWillUnmount(){
    clearTimeout(this.transitionTag);
  }

  getDelay(key){
    const { delay } = this.props;
    if(typeof delay === 'object') {
      return isNaN(delay[key]) ? DELAYS[key] : delay[key];
    }
    return delay;
  }

  getHeight(){
    return this.element.scrollHeight
  }

  render(){

    let { isOpen, onOpen, onClose, delay, navbar, className, children, ...attributes } = this.props;
    let collapseClasses;

    const { collapse, height } = this.state;
    switch (collapse) {
      case SHOW:
        collapseClasses = 'collapsing'
        break;
      case SHOWN:
        collapseClasses = 'collapse--show'
        break;
      case HIDE:
        collapseClasses = 'collapsing'
        break;
      case HIDDEN:
        collapseClasses = 'collapse'
        break;
      default:
        collapseClasses = 'collapse'
    }

    const classes = classNames(
      collapseClasses,
      navbar && 'navbar--collapse',
      className
    )

    let style = height === null ? null : { height };

    return(
      <div
        { ...attributes }
        style={{ ...attributes.style, ...style}}
        className={ classes }
        ref={ (c) => {this.element = c;} }
      >
        { children }
      </div>
    );
  }

}

export default Collapse;

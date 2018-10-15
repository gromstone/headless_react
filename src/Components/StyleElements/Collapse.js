import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

const SHOW = "SHOW";
const SHOWN = "SHOWN";
const HIDE = "HIDE";
const HIDDEN = "HIDDEN";

const DELAYS = {
  show: 350,
  hide: 350
}
class Collapse extends Component {
  state ={
    collapse: props.isOpen ? SHOWN : HIDDEN,
    height: null
  }

  static propTypes = {
    tag: PropTypes.string,
    zoom: PropTypes.bool,
    hover: PropTypes.bool,
    round: PropTypes.bool,
    cascade: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {
    tag: 'div'
  };

  componentWillReceiveProps(nextProps) {
    const willOpen = nextProps.isOpen;
    const collapse = this.state.collapse;

    if( willOpen && collapse === HIDDEN){
      this.setState({
        collapse: SHOW
      }, () => {
        this.setState({ height: this.getHeight() });
        this.transitionTag = setTimeOut( () => {
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

      this.transitionTag = setTimeOut( () => {
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

    let {
      tag: Tag, src, zoom, hover, round, cascade, className, children, ...attributes
    } = this.props;

    const classes = classNames(
      'view',
      zoom && 'zoom',
      round && 'rounded',
      hover && 'overlay',
      cascade && 'view-cascade',
      className
    )

    return(
      <Tag
        { ...attributes }
        className={ classes }
        onMouseDown={ this.handleClick.bind(this) }
        onTouchStart={ this.handleClick.bind(this) }
        style={ srcview }
      >
        { children }
      </Tag>
    );
  }

}

export default Collapse;

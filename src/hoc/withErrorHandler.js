import React, { Component } from 'react';
import Aux from '../aux';
//import Modal from '../Components/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentWillMount() {
        }

        componentWillUnmount() {
        }

        errorConfirmHandler = () => {
        }

        render(){
            return (
                <Aux>
                  {/*
                    <Modal
                    show={this.state.error}
                    modalClose={this.errorConfirmHandler}>
                    { this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                  */}
                </Aux>
            );
        }
    }
}


export default withErrorHandler;

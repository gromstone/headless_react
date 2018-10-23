import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';

import Aux from '../../hoc/aux';
import { HeaderHero, Flipper } from '../StyleElements';
import { Row, Col } from '../FlexGrid';
import { Card, CardHeader, CardImg, CardTitle, CardBody, CardContent, CardFooter } from '../CardElements';

class Contact extends Component {
  state = {
    isVerified: false
  }

  handleSubscribe = this.handleSubscribe.bind(this);
  recaptchaLoaded = this.recaptchaLoaded.bind(this);
  verifyCallback = this.verifyCallback.bind(this);

  recaptchaLoaded() {
    console.log('capcha successfully loaded');
  }

  handleSubscribe() {
    if (this.state.isVerified) {
      alert('You have successfully subscribed!');
    } else {
      alert('Please verify that you are a human!');
    }
  }

  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true
      })
    }
  }

  render() {
    const sitekey = process.env.REACT_APP_CAPTCHA_KEY;

    return (
      <Aux>
        <HeaderHero
          contact
          bgcolor={'default'}
        />

        <Row>
          <Col auto />
          <Col sm={4} >
            <Flipper >
              <Card personal className="face front">
                <CardImg top className={'img-fluid'} alt="tractor image" src="https://images.freeimages.com/images/large-previews/1ad/tractor-2-1386664.jpg" />
                <CardBody>
                  <CardContent>
                    January's a great month to visit San Diego! (So are all the other months.) Want a list of every beach you can comfortably bask on in the middle of "winter?".
                  </CardContent>
                  <p>click card to rotate</p>
                </CardBody>
              </Card>
              <Card personal className="face back">
                <CardBody>
                  <h4>About Me</h4>
                  <hr className="hr-underline"/>
                  <CardContent>
                    January's a great month to visit San Diego! (So are all the other months.) Want a list of every beach you can comfortably bask on in the middle of "winter?".
                  </CardContent>
                </CardBody>
              </Card>
            </Flipper>
          </Col>
          <Col auto />
        </Row>
        <Row>
          <Col auto />
          <Col sm={6}>
            <Recaptcha
              sitekey={sitekey}
              render="explicit"
              onloadCallback={this.recaptchaLoaded}
              verifyCallback={this.verifyCallback}
            />
          </Col>
          <Col auto />
        </Row>

      </Aux>
    )
  }
}

export default Contact;

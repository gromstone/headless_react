import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from '@storybook/addon-a11y';

import { FlexContainer, Row, Col } from '../../src/Components/FlexGrid';

storiesOf('Atom/Typography', module)
  .addDecorator(checkA11y)
  .add('Font Family', () =>
  <FlexContainer style={{textAlign:"center"}}>
    <h2>Font Family</h2>
    <h3>Dosis</h3>
    <Row>
      <Col sm={4}> </Col>
      <Col sm={4} style={{borderTop:"1px solid #d8d8d8"}}>
        <p style={{fontFamily:"Dosis"}}>Dosis Regular - 400</p>
        <p style={{fontFamily:"Dosis"}}>Body copy, standard size font (Set 16px base)</p>
      </Col>
      <Col sm={4}> </Col>
    </Row>
    <h3>Dosis Bold</h3>
    <Row>
      <Col sm={4}> </Col>
      <Col sm={4} style={{borderTop:"1px solid #d8d8d8"}}>
        <p style={{fontFamily:"Dosis", fontWeight:"700"}}>Dosis SemiBold - 700</p>
        <p style={{fontFamily:"Dosis", fontWeight:"700"}}>For important text and highlights</p>
      </Col>
      <Col sm={4}> </Col>
    </Row>
    <h3>Rokkitt</h3>
    <Row>
      <Col sm={4}> </Col>
      <Col sm={4} style={{borderTop:"1px solid #d8d8d8"}}>
        <p style={{fontFamily:"Rokkitt"}}>Rokkitt - 400</p>
        <h2 style={{fontFamily:"Rokkitt"}}>For Titles, headlines and big size fonts</h2>
      </Col>
      <Col sm={4}> </Col>
    </Row>
  </FlexContainer>
)
.add('Headings', () =>
  <FlexContainer style={{textAlign:"center"}}>
    <h2>Headings</h2>
    <Row>
      <Col sm={6} style={{borderTop:"1px solid #d8d8d8"}}>
        <h1 className="xlHeadline heading-color" style={{fontFamily:"Dosis"}}>H1 Dosis - 56px</h1>
      </Col>
      <Col sm={6} style={{borderTop:"1px solid #d8d8d8"}}>
        <h1 className="xlHeadline heading-color" style={{fontFamily:"Rokkitt"}}>H1 Rokkitt - 56px</h1>
      </Col>
    </Row>
    <Row>
      <Col sm={6} style={{borderTop:"1px solid #d8d8d8"}}>
        <h2 className="lgHeadline heading-color" style={{fontFamily:"Dosis"}}>H2 Dosis - 34px</h2>
      </Col>
      <Col sm={6} style={{borderTop:"1px solid #d8d8d8"}}>
        <h2 className="lgHeadline heading-color" style={{fontFamily:"Rokkitt"}}>H2 Rokkitt - 34px</h2>
      </Col>
    </Row>
    <Row>
      <Col sm={6} style={{borderTop:"1px solid #d8d8d8"}}>
        <h3 className="mdHeadline heading-color" style={{fontFamily:"Dosis"}}>H3 Dosis - 28px</h3>
      </Col>
      <Col sm={6} style={{borderTop:"1px solid #d8d8d8"}}>
        <h3 className="mdHeadline heading-color" style={{fontFamily:"Rokkitt"}}>H3 Rokkitt - 28px</h3>
      </Col>
    </Row>
    <Row>
      <Col sm={6} style={{borderTop:"1px solid #d8d8d8"}}>
        <h4 className="smHeadline" style={{fontFamily:"Dosis"}}>H4 Dosis - 24px</h4>
      </Col>
      <Col sm={6} style={{borderTop:"1px solid #d8d8d8"}}>
        <h4 className="smHeadline" style={{fontFamily:"Rokkitt"}}>H4 Rokkitt - 24px</h4>
      </Col>
    </Row>
    <Row>
      <Col sm={6} style={{borderTop:"1px solid #d8d8d8"}}>
        <h5 className="lg-copy" style={{fontFamily:"Dosis"}}>H5 Dosis - 19px</h5>
      </Col>
      <Col sm={6} style={{borderTop:"1px solid #d8d8d8"}}>
        <h5 className="lg-copy" style={{fontFamily:"Rokkitt"}}>H5 Rokkitt - 19px</h5>
      </Col>
    </Row>
    <Row>
      <Col sm={6} style={{borderTop:"1px solid #d8d8d8"}}>
        <h6 className="" style={{fontFamily:"Dosis"}}>H6 Dosis</h6>
      </Col>
      <Col sm={6} style={{borderTop:"1px solid #d8d8d8"}}>
        <h6 className="" style={{fontFamily:"Rokkitt"}}>H6 Rokkitt</h6>
      </Col>
    </Row>
  </FlexContainer>
  )
  .add('Body Copy', () =>
    <FlexContainer style={{textAlign:"center"}}>
      <h2>body copy</h2>
      <Row>
        <Col sm={6} style={{borderTop:"1px solid #d8d8d8"}}>
          <h3>Rokkitt Standard copy</h3>
          <p style={{fontFamily:"Rokkitt"}}>Don’t get into the habit of thinking that if you update it a few times a day, you’ll grow your traffic. Yes, more blog posts means more sharing. But if you rush to push articles out, quality may suffer. If quality suffers, posts won’t get shared and you’ll lose readers. Tread carefully. Quality above all!</p>
        </Col>
        <Col sm={6} style={{borderTop:"1px solid #d8d8d8"}}>
          <h3>Dosis Standard copy</h3>
          <p style={{fontFamily:"Dosis"}}>Readers of Wonkblog are also followers of the news. What separates Wonkblog from a news product is that it gives analysis of the stories that make the news. For instance, when the Syrian people had their internet shut down, instead of just reporting the news, Wonkblog asked an interesting question. As another example, around Thanksgiving time the Wonkblog had a fact-filled piece about why turkeys are getting fatter.</p>
        </Col>
      </Row>
      <Row>
        <Col sm={6} style={{borderTop:"1px solid #d8d8d8"}}>
          <h3>inactive copy color</h3>
          <p className='inactive' style={{fontFamily:"Dosis"}}>Don’t get into the habit of thinking that if you update it a few times a day, you’ll grow your traffic. Yes, more blog posts means more sharing. But if you rush to push articles out, quality may suffer. If quality suffers, posts won’t get shared and you’ll lose readers. Tread carefully. Quality above all!</p>
        </Col>
        <Col sm={6} style={{borderTop:"1px solid #d8d8d8"}}>
          <h3>Small copy</h3>
          <p className='sm-copy' style={{fontFamily:"Dosis"}}>Readers of Wonkblog are also followers of the news. What separates Wonkblog from a news product is that it gives analysis of the stories that make the news. For instance, when the Syrian people had their internet shut down, instead of just reporting the news, Wonkblog asked an interesting question. As another example, around Thanksgiving time the Wonkblog had a fact-filled piece about why turkeys are getting fatter.</p>
        </Col>
        <Row>
          <Col sm={6} style={{borderTop:"1px solid #d8d8d8",backgroundColor:"#585858"}}>
            <h3 style={{color:"white"}}>Rokkitt Standard copy</h3>
            <p style={{fontFamily:"Rokkitt",color:"white"}}>Don’t get into the habit of thinking that if you update it a few times a day, you’ll grow your traffic. Yes, more blog posts means more sharing. But if you rush to push articles out, quality may suffer. If quality suffers, posts won’t get shared and you’ll lose readers. Tread carefully. Quality above all!</p>
          </Col>
          <Col sm={6} style={{borderTop:"1px solid #d8d8d8",backgroundColor:"#585858"}}>
            <h3 style={{color:"white"}}>Dosis Standard copy</h3>
            <p style={{fontFamily:"Dosis",color:"white"}}>Readers of Wonkblog are also followers of the news. What separates Wonkblog from a news product is that it gives analysis of the stories that make the news. For instance, when the Syrian people had their internet shut down, instead of just reporting the news, Wonkblog asked an interesting question. As another example, around Thanksgiving time the Wonkblog had a fact-filled piece about why turkeys are getting fatter.</p>
          </Col>
        </Row>
      </Row>
    </FlexContainer>
    )

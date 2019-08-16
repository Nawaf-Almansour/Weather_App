import React, { Component } from 'react';
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
  Button
} from 'react-bootstrap';

export default class About extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
      <Row className="show-grid text-center">
        <Col xs={12} sm={4} smOffset={2} className="pwerson-wrapper">
          <Image src="assets/image-1.jpg"  className="rounded-circle img-fluid" rpunded/>
          <h3>Node</h3>
          <p>It is a lot of fun. If you didn't have baby clouds, you wouldn't
          have big clouds. Just let your mind wander and enjoy.</p>
        </Col>
      </Row>
      </div>
    );

  }

}

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
  Button
} from 'react-bootstrap';
import './Home.css'
export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
      <Jumbotron>
        <h2>Welcom to ...</h2>
        <p>build Ract app
        </p>
      </Jumbotron>
      <Row className="show-grid text-center">
        <Col xs={12} sm={4} className="pwerson-wrapper">
          <Image src="assets/image-1.jpg"  className="rounded-circle img-fluid"/>
          <h3>Node</h3>
          <p>It is a lot of fun. If you didn't have baby clouds, you wouldn't
          have big clouds. Just let your mind wander and enjoy.</p>
        </Col>
        <Col xs={12} sm={4} className="pwerson-wrapper">
          <Image src="assets/image-1.jpg"  className="rounded-circle img-fluid"/>
          <h3>Node</h3>
          <p>It is a lot of fun. If you didn't have baby clouds, you wouldn't
          have big clouds. Just let your mind wander and enjoy.</p>
        </Col>
        <Col xs={12} sm={4} className="pwerson-wrapper">
          <Image src="assets/image-1.jpg"  className="rounded-circle img-fluid"/>
          <h3>Node</h3>
          <p>It is a lot of fun. If you didn't have baby clouds, you wouldn't
          have big clouds. Just let your mind wander and enjoy.</p>
        </Col>
      </Row>
    </Container>);
  }

}

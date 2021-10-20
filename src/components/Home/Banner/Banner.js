import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';



import './Banner.css'

const Banner = () => {
    return (
     <Row className="p-0 m-0">
      <Col lg={12} sm={12} xs={12} className="p-0 m-0">
         <div className="banner-container">
       <Container>
       <Row>
              <Col xxl={6} lg={6} md={6} sm={12} xs={12}>
                    <h5 className="banner-small">Explore us all</h5>
                    <h1 className="banner-heading">Connect and get our full dental support </h1>
                    <p>Dental Support Group was founded on the belief that dentists should be able to commit their time to helping people achieve good oral health.</p>
                    <button className="btn btn-regular">Get An Appoinment</button>
              </Col>
          </Row>
       </Container>
           
        </div>
         </Col>
     </Row>
    );
};

export default Banner;
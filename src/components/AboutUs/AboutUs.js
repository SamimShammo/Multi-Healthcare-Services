import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AboutUs.css'
import img from '../img/about-1.jpg'
import { useHistory } from 'react-router';

const AboutUs = () => {

  

    return (
        <div className="about-container">
         <Container>
               <Row>
                 
                 <Col xxl={6} lg={6} md={6} sm={12} xs={12}>
                     <div className="about-img">
                       <img src={img} alt="" className="img-fluid"/>
                     </div>
                   </Col>
                  <Col xxl={6} lg={6} md={6} sm={12} xs={12}>
                     <div className="about-content">
                      <h1 >About us</h1>
                       <h2 >How to Improve Learning Skills</h2>
                        <p className="banner-p"> Grow Skills is an online learning platfrom our goal of creating a set of online tools that help educate students.The organization produces short lessons in the form of videos.Its website also includes supplementary practice exercises and materials for educators. All resources are available for free to users of the website and application.</p>
                        <button className="btn btn-regular">Our Course</button>
                     </div>
                   </Col>

                 </Row>
      </Container>
        </div>
    );
};

export default AboutUs;
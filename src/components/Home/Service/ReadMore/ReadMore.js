import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import img from '../../../img/service-details-7.jpg'

import './ReadMore.css';

const ReadMore = () => {
   const {serviceId} =useParams()
   const [service, setService] = useState({})

   useEffect(() => {
       fetch(`https://api.npoint.io/0c7a189fed17da9d3463/services/${serviceId}`)
       .then(res => res.json())
       .then(data => setService(data))
   }, [])

   const history = useHistory()
   const goBackHome = () => {
       history.push('/home')
   } 
   
    return (
        <div className="read-container">
        <div className="readmore-container">
            <div className="background-color">
                <h2>Doctors Details</h2>
            </div>
        </div>
        <Container>
            <Row>
            <Col xxl={8} xl={8} lg={8} md={8} xm={12} xs={12} className="m-auto">
                 <div className="readMore-content ">
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                          <Image src={service.banner} className="img-fluid readmore-img"/>
                          </Col>
              <div className="read-content">
                      <h3>{service.title} </h3>
                      <p >{service.longDescription} {service.title} {service.body} {service.name}</p>
                      <button onClick={goBackHome} className="btn btn-regular">Go Back Home</button>
              </div>
                      
                 </div>
            </Col>
            </Row>
        </Container>
        </div>
    );
};

export default ReadMore;
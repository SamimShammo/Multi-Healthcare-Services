import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Services.css'

const Services = (props) => {
   console.log(props)
    const {title, id, thumbnail, description} = props.service;
    const {service} = props;
    const history = useHistory();
    const readMoreHandler = () => {
        history.push(`/services/${id}`)
    }
    return (
       <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
           <div className="services-container">
                 <Image src={thumbnail} className="img-fluid service-img" />
                <div className="service-content">
                 <h3>{title}</h3>
                 <p className="service-p">{description.slice(0, 170)}</p>
                 <button className="btn btn-regular " onClick={() => readMoreHandler(service)}>Read More</button>
                </div>
           </div>
       </Col>
    );
};

export default Services;
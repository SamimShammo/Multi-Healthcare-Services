import React from 'react';
import { Col, Row, Image, ProgressBar, Container } from 'react-bootstrap';
import AppointmentImg from  '../../img/appointment.jpg';
import './Appointment.css';

const Appointment = () => {
    return (
        <div className="appointment">
           <Container>
               <Row>
                   <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                       <div className="appointment-content">
                           <h5>Quick appointment</h5>
                           <h1>Let's make an appointment easily</h1>
                           <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                           <button className="btn btn-regular">Read More</button>
                       </div>
                   </Col>
                   <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                       <div className="appointment-img">
                           <Image src={AppointmentImg} className="img-fluid"/>
                       </div>
                   </Col>
               </Row>
           </Container>
        </div>
    );
};

export default Appointment;
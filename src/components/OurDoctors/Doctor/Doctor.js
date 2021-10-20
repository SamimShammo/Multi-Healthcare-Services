import React from 'react';
import { Card, CardGroup, Col, Image, Row } from 'react-bootstrap';
import './Doctor.css'

const Doctor = (props) => {
    const {name, id, img, category, email} = props.doctor;

    return (
        <>  
       
            <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
                    <CardGroup>
                        <Card className="text-center mb-4  doctor">
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                            <Card.Title className="card-heading">{name}</Card.Title>
                            <Card.Text>
                                  {category}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="bg-white border-0">
                            <div className="doctor-icon"><i class="fab fa-facebook"></i> <i class="fab fa-linkedin"></i> <i class="fab fa-twitter-square"></i></div>
                            </Card.Footer>
                        </Card>
                        </CardGroup>
            </Col>
        </>
    );
};


export default Doctor;
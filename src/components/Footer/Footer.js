import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row className="p-0 m-0">
                    <Col md={4}>
                        <div className="widget">
                            <Link to="/home" className="mb-4">
                                <Image className="mb-3 " src={logo} alt="Maxon" />
                            </Link>
                            <p className="widget-p">Medicare works with health care providers to be sure they have the resources and information needed to coordinate your care. Coordinated care helps make sure you get the right care </p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="widget widget-address ">
                            <h3 className="widget-title">Contact Info</h3>
                            <address>
                                <span><i className="fas fa-map-marker-alt text-black"></i>67 Sasha Cove,67 Sasha Cove Eest</span>
                                <a href="tel:+0263949822698" className="text-decoration-none"><i className="fas fa-phone-alt text-black"></i> +02 639 4982 2698</a>
                                <a href="mailto:info@t.com" className="text-decoration-none"><i className="fas fa-envelope text-black"></i> info@medicare.com</a>
                            </address>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="widget">
                            <h3 className="widget-title"> Find us On</h3>
                            <div className="d-flex">
                                <Row className="p-0 m-0 widget-address">
                                    <a href="https://www.facebook.com"  target="_blank"className="m-0"> <i className="fab fa-facebook"> </i> Facebook</a>
                                    <a href="https://www.instagram.com" target="_blank"> <i className="fab fa-instagram"> </i> Instagram</a>
                                    <a href="https://www.twitter.com" target="_blank"> <i className="fab fa-twitter"> </i> Twitter</a>
                                </Row>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div >
    );
};

export default Footer;
import React from 'react';
import { Col } from 'react-bootstrap';
import './Choose.css';

const Choose = (props) => {
    const {name, description, icon} = props.choose;
    return (
        <Col xxl={4} lg={4} md={4} sm={12} xs={12}>
             <div className="single-choose">
                 <i className={icon}></i>
                 <h3>{name}</h3>
                 <p>{description}</p>
                 <button className="btn btn-choose">Read More</button>
             </div>
        </Col>
    );
};

export default Choose;
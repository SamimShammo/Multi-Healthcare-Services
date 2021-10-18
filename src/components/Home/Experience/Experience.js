import { render } from '@testing-library/react';
import React from 'react';
import { Col, Row, Image, ProgressBar, Container } from 'react-bootstrap';
import experience2 from '../../img/experience.jpg'
import './Experience.css'

const Experience = () => {

    return (
         <div className="experience">
            <Container>
            <Row className="p-0 m-0">
              <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                 <div className="experience-img">
                 <Image src={experience2} className="img-fluid" />
                 </div>
              </Col> 
              <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} >
                     <div className="experience-content">
                      <h6>16+ years of experience</h6>
                       <h1>Welcome to Covax dental unit</h1>
                       <p>We are one of the best agency and have a 16+ years working exp. into the global market. mCare makes your tooth care in a proper way with the most effective way. We have brilliant history.</p>
                        <p className="pro-p">Dental tease</p>
                       <ProgressBar now="85" label="85%" className="progress-height text-dark"/>
                       <p className="pro-p">Root cannel</p>
                       <ProgressBar now="75" label="75%" className="progress-height"/>
                       <p className="pro-p">Tooth exreaction</p>
                       <ProgressBar now="78" label="78%" className="progress-height"/>
                       <p className="pro-p">Feeling</p>
                       <ProgressBar now="67" label="67%" className="progress-height"/>
                       <p className="pro-p">Children density</p>
                       <ProgressBar now="79" label="79%" className="progress-height"/>
                     </div>
               

               
                </Col>
           </Row>
            </Container>
          </div>
    );
};

export default Experience;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Choose from './Choose/Choose';
import './WhyChoose.css'

const WhyChoose = () => {

      const chooseus = [
          {   id: 1,
              icon:"fas fa-user-md",
              name: "Qualified doctors",
              description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
          },
          {   id: 2,
              icon:"fas fa-brain",
              name: "Modern equipment",
              description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
          },
          {   id: 3,
              icon:"fas fa-ambulance",
              name: "Frequently support",
              description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
          },
      ]
     
    return (
        <div className="margin-top-bottom">
            <Container>
                <Row>
                    <Col xxl={6} lg={6} md={6} sm={6} xs={12} className="m-auto">
                        <div className="Chooseus">
                            <h5>Reason to choose</h5>
                            <h1 style={{color:"#207EF7"}}>Why You Choose us</h1>
                            <hr className="line-bottom"/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        chooseus.map(choose => <Choose 
                        key={choose.id}
                        choose={choose}
                        ></Choose>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default WhyChoose;
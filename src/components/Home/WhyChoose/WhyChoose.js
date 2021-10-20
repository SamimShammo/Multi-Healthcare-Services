import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Choose from './Choose/Choose';
import './WhyChoose.css'

const WhyChoose = () => {

      const chooseus = [
          {   id: 1,
              icon:"fas fa-user-md",
              name: "Qualified doctors",
              description:"There are many ways to find a qualified medical doctor. If you are truly looking only to see if they are qualified to treat it may be  as checking their medical.",
          },
          {   id: 2,
              icon:"fas fa-brain",
              name: "Modern equipment",
              description:"List of modern equipment of the Syrian Arab Army. The vast majority of Syrian military  was Soviet  but equipment the  and Syrian military majority doctrine was .",
          },
          {   id: 3,
              icon:"fas fa-ambulance",
              name: "Frequently support",
              description:"My computer does not turn on, what do I do now s power cord to make sure it is completely  into the wall socket. If you are using a plug strip, make sure it is ",
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
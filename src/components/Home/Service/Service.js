import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Services from './Services/Services';
import './Service.css'

const Service = () => {
        const [services, setServices] = useState([])
        useEffect( () => {
            fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))

        },[])
    return (
        <div className="service-container">
           <Container>
           <h1 className="text-center text-primary">Our Service</h1>
                  <hr className="line-bottom"/>
               <Row>
                
                   
                    
                    {
                        services.map(service => <Services
                         key={service.id}
                         service={service}
                         ></Services>)
                    }
               </Row>
           </Container>
        </div>
    );
};

export default Service;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Doctor from './Doctor/Doctor';
import './OurDoctors.css'

const OurDoctors = () => {
const doctors = [
    {   id: 1,
        name: 'Dr. Glenn K Riley',
        category: 'Dog Specialist',
        email: 'glennriley@gmail.com',
        img: 'https://i.ibb.co/Bjs8MR0/doctor-1.jpg'

    },
    {    id: 2,
        name: 'Dr. Peter Adlock',
        category: 'Orthopedics Surgeon',
        email: 'peteradlock@gmail.com',
        img: 'https://i.ibb.co/2y9G8CC/doctor-2.jpg'

    },
    {    id:3,
        name: 'Dr. Norman Colins',
        category: 'Surgeon, Сardiologist',
        email: 'normancolins@gmail.com',
        img: 'https://i.ibb.co/v1zN4kQ/doctor-3.jpg'

    },
   
    {    id:5,
        name: 'Dr. James J Workman',
        category: 'Cat Specialist',
        email: 'jamesworkman@gmail.com',
        img: 'https://i.ibb.co/D7bn9SP/doctor-5.jpg'

    },
    {    id: 6,
        name: 'Dr. Tom Henry',
        category: 'Dog Specialist',
        email: 'tomhenry@gmail.com',
        img: 'https://i.ibb.co/MpQ7Z6f/doctor-6.jpg'

    },
    {    id: 7,
        name: 'Dr. David Seek',
        category: 'Pediatritian',
        email: 'davidseek@gmail.com',
        img: 'https://i.ibb.co/h1s9XcL/doctor-7.jpg'

    },
    {   id: 8,
        name: 'Dr. Ertan Peter',
        category: 'Gynecologist',
        email: 'ertanpeter@gmail.com',
        img: 'https://i.ibb.co/5Lzf5MK/doctor-8.jpg'

    },
   
    {   id: 9,
        name: 'Dr. James Alison',
        category: 'Orthopedics Surgeon',
        email: 'jamesalison@gmail.com',
        img: 'https://i.ibb.co/VjyY7gH/doctor-9.jpg'

    },
    {    id: 4,
        name: 'Dr. Estela G Howerton',
        category: 'Rabbit Specialist',
        email: 'estelahowerton@gmail.com',
        img: 'https://i.ibb.co/j4hWKq0/doctor-4.jpg'

    },
]


    return (
      <>
       <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="readmore-container mb-5">
            <div className="background-color">
                <h2>Our Doctor</h2>
            </div>
         </div>
        
       </Col>
       <div className="Our-Doctors-container">
        <Container>
            <Row>
                <h3 className="text-center" style={{color:"#207EF7"}}>Let's check-out our special doctors <br /> and their activity</h3>
                {
                  doctors.map(doctor => <Doctor 
                  key={doctor.id}
                  doctor={doctor}
                  ></Doctor>)
                }
            </Row>
        </Container>
            
        </div>
        </>
    );
};

export default OurDoctors;
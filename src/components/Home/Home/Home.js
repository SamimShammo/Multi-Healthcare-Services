import React from 'react';


import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Experience from '../Experience/Experience';
import Service from '../Service/Service';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
        
            <Banner></Banner>
            <WhyChoose></WhyChoose>
            <Experience></Experience>
            <Service></Service>
            <Appointment></Appointment>
       
        </div>
    );
};

export default Home;
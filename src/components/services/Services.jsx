import React from 'react'
import './Services.css';

import theme_pattern from "../../assets/theme_pattern.svg";
import services_data from "../../assets/services_data";
import arro from "../../assets/arrow_icon.svg";



const Services = () => {
  return (
    <div id='services' className="services">
      <div className="service-title" >
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className='service-container'>
        {services_data.map((Service,index)=>{
            return (
              <div key={index} className="service_format">
                <h3>{Service.s_no}</h3>
                <h2>{Service.s_name}</h2>
                <p>{Service.s_desc}</p>
                <div className="service-readmore">
                  <p>Read More</p>
                  <img src={arro} alt="" />
                </div>
              </div>
            );
        })}

      </div>
    </div>
  );
}

export default Services
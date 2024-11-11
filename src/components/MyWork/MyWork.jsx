import React from 'react'
import './MyWork.css'
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arro from "../../assets/arrow_icon.svg";




const MyWork = () => {
  return (
    <div id='work' className="mywork">
      <div className="mywrk_title">
        <h1>My Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork_container">{mywork_data.map((work,index)=>{
        return <img key={index}src={work.w_img}/>
      })}</div>
      <div className="mywork-showmore">

        <p>Show More</p>
        <img src={arro} alt="" />

      </div>
    </div>
  );
}

export default MyWork
import React from "react";

const About = () => {
  return (
    <div className="about">
      <h3>About</h3>
      <div className="about_img">
        <img src="" />
      </div>
      <div className="about_info">
        <div className="about_infotitle">
          <span className="title_text">
            I am a 
            <span className="title_text_highlight">Web Developer</span>
          </span>
        </div>
        <div className="about_about_text">
          <span className="about_about">
            I am from India.And I am a
            <span className="highlight">Full Stack MERN Dveloper</span>
          </span>
          <span className="about_desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ut
            cum, consectetur consequuntur, aperiam quasi veritatis similique
            enim eveniet sequi ab modi repellendus eligendi totam repudiandae
            ipsum sapiente itaque! Libero!
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;

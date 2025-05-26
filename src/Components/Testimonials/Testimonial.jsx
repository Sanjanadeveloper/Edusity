import React, { useRef } from "react";
import "./Testimonial.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonial = () => {
  const slider = useRef();
  let tx = 0; //tx = translate X

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>John Doe</h3>
                  <span>Software Engineer, USA</span>
                </div>
              </div>
              <p>
                My experience with Edusity helped me develop new skills that
                boosted my career growth significantly.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Amy Smith</h3>
                  <span>Marketing Specialist, UK</span>
                </div>
              </div>
              <p>
                Edusity provided me with the tools and knowledge I needed to
                excel in digital marketing strategies.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>David Lee</h3>
                  <span>Data Analyst, Australia</span>
                </div>
              </div>
              <p>
                Edusity's courses helped me sharpen my analytical skills,
                allowing me to make data-driven decisions efficiently.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Sarah Miller</h3>
                  <span>Graphic Designer, Canada</span>
                </div>
              </div>
              <p>
                Learning with Edusity has enhanced my design portfolio and
                opened up new opportunities in creative industries.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;

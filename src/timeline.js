import { React, useEffect } from "react";
import "./timeline.css";
import profilePic from "./imgs/profilePicture_image.svg";
import walking from "./imgs/Human walk cycle.gif";
const Timeline = () => {
  useEffect(() => {
    const spanItem = document.getElementById("spanItem");
    spanItem.addEventListener("click", (e) => {
      e.preventDefault();

      const walk = document.getElementById("walkingContainer");
      const card = document.getElementById("timelineCard");
      walk.classList.add("walk");

      if (
        card.classList.contains("cardShow") &&
        walk.classList.contains("walk")
      ) {
        card.classList.remove("cardShow");
        walk.classList.remove("walk");
        walk.style.display = "flex";
      } else {
        setTimeout(() => {
          card.classList.add("cardShow");
          walk.classList.add("walk");
          walk.style.display = "none";
          console.log("dal ulazi u else samo");
        }, 500);
      }
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="walkingContainer" id="walkingContainer">
        <img
          className="walk"
          id="walking"
          src={walking}
          alt="walking"
          width="50px"
        />
      </div>
      <div className="timeline">
        <div className="line" id="spanItem">
          <div className="timelineItem">
            <span className="date">2004-2008 </span>
            <div className="timelineCard" id="timelineCard">
              <a href="#">
                <img className="cardImage" src={profilePic} alt="some_image" />
                <div className="cardContent">
                  <h3 className="cardTitle">Timeline Title</h3>
                  <hr />
                  <p className="cardSubtitle">
                    Timeline Subtitle Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Consectetur, ullam quidem quod doloribus
                    facilis quaerat suscipit enim quam optio placeat temporibus
                    unde quibusdam possimus facere animi ipsam autem quas ad.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Timeline;

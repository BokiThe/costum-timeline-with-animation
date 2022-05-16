import { React, useEffect } from "react";
import "./timeline.css";
// import walking from "./imgs/Human walk cycle.gif";
const Timeline = () => {
  // useEffect(() => {
  //   const walkingContainer = document.getElementById("walkingContainer");
  //   walkingContainer.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     const walk = document.getElementById("walking").classList.toggle("walk");

  //     return walk;
  //   });
  // }, []);

  return (
    <div className="wrapper">
      <div className="timeline">
        <div className="line">
          <div className="timelineItem">
            <span className="date">2004-2008 </span>
            <div className="timelineCard">
              <a href="#">
                <img src="" alt="some image" />
                <h5 className="timelineTitle">Timeline Title</h5>
                <p className="timelineSubtitle">Timeline Subtitle</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Timeline;

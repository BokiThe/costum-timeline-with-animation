import { React, useEffect } from "react";
import "./timeline.css";
import walking from "./imgs/Human walk cycle.gif";
const Timeline = () => {
  useEffect(() => {
    const divTimeline = document.getElementById("timeline1");
    divTimeline.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("walking").classList.toggle("walk");
    });
  }, []);

  return (
    <div className="timeline" id="timeline1">
      <img id="walking" width="50px" src={walking} alt="walking..." />
    </div>
  );
};
export default Timeline;

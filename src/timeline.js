// IMPORTS
import { React, useCallback } from "react";
import "./timeline.css";
import TimlineCard from "./timlineCard";
import profilePic from "./imgs/profilePicture_image.svg";
import walking from "./imgs/Human walk cycle.gif";

// FUNCTIONAL COMPONENT
const Timeline = () => {
  // HANDLE FUNCTIONS

  let handleShow = useCallback(() => {
    // VARIABLES
    const walk = document.getElementById("walkingContainer");
    const card = document.getElementById("timelineCard");
    walk.classList.add("walk");
    setTimeout(() => {
      card.classList.add("cardShow");
      walk.classList.add("walk");
      walk.style.display = "none";
    }, 500);
  }, []);

  return (
    <div
      className="wrapper"
      onKeyUp={(e) => {
        e.preventDefault();
        console.log(e.key);
      }}
    >
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
            <span className="date" onClick={handleShow}>
              2004-2008{" "}
            </span>
            <TimlineCard
              image
              src={profilePic}
              alt="profile_picture"
              title="lorem ipsum"
              subtitle=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate corrupti explicabo aliquid quae id, cumque aut, delectus veniam nostrum repellendus ducimus dicta consequuntur facilis nulla! Atque reprehenderit voluptatibus laborum aut?
           Eveniet velit autem modi, ipsum nihil dolor sunt tempore, temporibus fugiat ad quisquam repellat error sequi quis. Voluptate nihil facere nam tempora, saepe aliquam, debitis iure adipisci vero illum animi.
           Incidunt perspiciatis neque vel maxime cupiditate harum recusandae eos eveniet architecto in. Eum facere, corrupti aperiam nihil eaque vel, impedit aliquam maxime soluta quam est sapiente quis quod iste excepturi!
           Rerum provident expedita ipsam temporibus esse nam eaque, animi quibusdam, iste debitis sapiente molestias. Nulla, rem iure laborum facere, excepturi corrupti aut sit saepe repudiandae a dicta necessitatibus expedita porro?
           Omnis velit cum ducimus ratione error dolor magni reprehenderit nesciunt et quae, incidunt fugit, in ea quod asperiores libero porro odit aliquid voluptatibus enim, tempore veniam culpa dicta commodi! Saepe."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Timeline;

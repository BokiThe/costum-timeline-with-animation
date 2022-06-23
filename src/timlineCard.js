import { React, useCallback } from "react";

const TimlineCard = (props) => {
  let handleHide = useCallback(() => {
    // VARIABLES
    const walk = document.getElementById("walkingContainer");
    const card = document.getElementById("timelineCard");
    card.classList.remove("cardShow");
    walk.classList.remove("walk");
    walk.style.display = "flex";
  }, []);
  return (
    <div className="timelineCard" id="timelineCard" onClick={handleHide}>
      <div className="card">
        {props.image ? (
          <img className="cardImage" src={props.src} alt={props.alt} />
        ) : (
          false
        )}
        <div className="cardContent">
          <h3 className="cardTitle">{props.title}</h3>
          <hr />
          <p className="cardSubtitle">{props.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default TimlineCard;

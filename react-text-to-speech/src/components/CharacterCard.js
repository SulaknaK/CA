import React from "react";
import "../styles/CharacterCard.css";
import { Droppable } from "react-beautiful-dnd";
import RoleDraggable from "../components/RoleDraggable.js";
import draganddropicon from "../Pictures/draganddropicon.png";

function CharacterCard({ character, role }) {
  return (
    <div className="character-card">
      <div
        className="card p-2 mb-5"
        style={{ width: "200px", height: "150px" }}
      >
        <div className="card-img-container">
          <img
            src={draganddropicon}
            className="card-img-top"
            alt={character.charater_name}
          />
        </div>
        <div className="card-body">
          <Droppable droppableId={character.charater_name}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="droppable-area"
              >
                {role && (
                  <RoleDraggable
                    draggableId={role.Role}
                    role={role}
                    index={0}
                  />
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default CharacterCard;

import React from "react";
import { TeamList } from "../helpers/TeamList";
import TeamItem from "../components/TeamItem";
import "../styles/Team.css";

function Team() {
  return (
    <div className="team">
      <h1 className="teamTitle">Our Team</h1>
      <div className="teamList">
        {TeamList.map((teamItem, key) => {
          return (
            <TeamItem
              key={key}
              image={teamItem.image}
              name={teamItem.name}
              role={teamItem.role}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Team;
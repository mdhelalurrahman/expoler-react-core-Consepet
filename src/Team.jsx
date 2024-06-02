import {useState} from "react";

function Team() {
  const [team, setTeam] = useState(11);
  const teamStyle = {
    border: "2px solid purple",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };
  const handlerAdd = () => {
    setTeam(team + 1);
  };

  return (
    <div style={teamStyle}>
      <h3>Players:{team}</h3>
      <button onClick={handlerAdd}>Add Player</button>
      <button
        onClick={() => {
          setTeam(team - 1);
        }}>
        remove
      </button>
    </div>
  );
}
export default Team;

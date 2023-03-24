import React from "react";
import "./Ninjas.css";

const Info = ({ ninjas, deleteNinja }) => {
  // const { ninjas } = props;
  const ninjasList = ninjas.map((infos) => {
    return infos.age > 20 ? (
      <div className="infos" key={infos.id}>
        <div>Name: {infos.name}</div>
        <div>Age: {infos.age}</div>
        <div>Belt: {infos.belt}</div>
        <button
          onClick={() => {
            deleteNinja(infos.id);
          }}
        >
          {" "}
          Delete Ninja
        </button>
      </div>
    ) : null;
  });
  return <div className="ninjas-list">{ninjasList}</div>;
};

export default Info;

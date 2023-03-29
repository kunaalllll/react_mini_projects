import React, { useState } from "react";
import Table from "./Table";
import "./style.css";

const Search = ({ Users }) => {
  const [query, setquery] = useState("");

  const searchFunction = (data) => {
    return data.filter(
      (users) =>
        users.first_name.toLowerCase().includes(query) ||
        users.email.toLowerCase().includes(query)
    );
  };

  return (
    <>
      <input
        placeholder="search items ..."
        type="text"
        className="search"
        onChange={(e) => setquery(e.target.value)}
      />

      <Table data={searchFunction(Users)} />

      {/* 
      <ul className="list">
        {Users.filter((users) =>
          users.first_name.toLowerCase().includes(query)
        ).map((users) => (
          <li key={users.id} className="listItems">
            {users.first_name}
          </li>
        ))}
      </ul> */}
    </>
  );
};

export default Search;

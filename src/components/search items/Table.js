import React from "react";

const Table = ({ data }) => {
  return (
    <>
      <table className="table">
        <tbody>
          <tr>
            <th>Sr. No. </th>
            <th>Name</th>
            <th>Email</th>
          </tr>

          {data.map((users) => (
            <>
              <tr key={users.id}>
                <td>{users.id}</td>
                <td>{users.first_name}</td>
                <td>{users.email}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;

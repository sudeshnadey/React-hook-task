import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Table = () => {
  const { data, selectedData, search, handleSelectData } = useContext(
    DataContext
  );

  const filteredData = data.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Phone</th>
          <th>Select</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((d) => (
          <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.name}</td>
            <td>{d.username}</td>
            <td>{d.phone}</td>
            <td>
              <button
                onClick={() => handleSelectData(d)}
                disabled={selectedData.find((sd) => sd.id === d.id)}
              >
                Select
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

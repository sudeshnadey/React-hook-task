import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";

const Modal = () => {
  const {
    data,
    selectedData,
    setSelectedData,
    search,
    setSearch,
    handleUnselectData,
    handleSearch
  } = useContext(DataContext);

  const [showModal, setShowModal] = useState(false);

  const filteredData = data.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && (
        <div className="modal-wrapper">
          <div className="modal">
            <div className="modal-header">
              <input
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search available columns"
              />
            </div>
            <div className="modal-body">
              <div className="modal-columns">
                <div className="available-columns">
                  <h3>Available Columns</h3>
                  <ul>
                    {filteredData.map((d) => (
                      <li key={d.id}>
                        {d.name} - {d.username} - {d.phone}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="selected-columns">
                  <h3>Selected Columns</h3>
                  <ul>
                    {selectedData.map((d) => (
                      <li key={d.id}>
                        {d.name} - {d.username} - {d.phone}
                        <button onClick={() => handleUnselectData(d.id)}>
                          Unselect
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

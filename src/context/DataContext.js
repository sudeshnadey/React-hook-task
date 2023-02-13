import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [data, setData] = useState([
    
  ]);
  const [selectedData, setSelectedData] = useState([]);
  const [search, setSearch] = useState("");

  const handleSelectData = (id) => {
    const selected = data.find((d) => d.id === id);
    setSelectedData([...selectedData, selected]);
  };

  const handleUnselectData = (id) => {
    setSelectedData(selectedData.filter((d) => d.id !== id));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };


  return (
    <DataContext.Provider
      value={{
        data,
        selectedData,
        handleSelectData,
        handleUnselectData,
        search,
        setSearch,
        handleSearch,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

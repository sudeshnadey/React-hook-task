import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataContext } from "./context/DataContext";
import Table from "./components/Table";
import Modal from "./components/Modal";

const App = () => {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res.data);
    });
  }, []);

  const handleSelectData = (item) => {
    setSelectedData([...selectedData, item]);
  };

  const handleUnselectData = (item) => {
    setSelectedData(selectedData.filter((d) => d.id !== item.id));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        selectedData,
        setSelectedData,
        search,
        setSearch,
        handleSelectData,
        handleUnselectData,
        handleSearch
      }}
    >
      <Table />
      <Modal />
    </DataContext.Provider>
  );
};

export default App;


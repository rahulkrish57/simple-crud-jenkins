import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const initial = {
    name: "",
    age: "",
    gender: "",
    email: "",
    contact: "",
  };
  const [errAlertState, setErrAlertState] = useState(false);
  function alertFunc() {
    setErrAlertState(false);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    const user = { ...userData };
    user[name] = value;
    setUserData(user);
  }
  function onSubmit() {
    const { name, age, gender, email, contact } = userData;
    if (name !== "" && age !== "" && gender !== "" && email !== "" && contact) {
      postUserData();
      setUserData(initial);
    } else {
      setErrAlertState(true);
      setTimeout(alertFunc, 5000);
    }
  }
  function alertFunc() {
    setNewAlertState(false);
  }
  const URL = "https://654b872f5b38a59f28ef3e96.mockapi.io/api/v2/users";

  const [userData, setUserData] = useState(initial);
  console.log("userData", userData);
  const [editState, setEditState] = useState(false);
  const [userTable, setUserTable] = useState([]);
  const [newAlertState, setNewAlertState] = useState(false);
  const [editId, setEditId] = useState(null);
  // axios GET method
  async function getUserData() {
    try {
      const response = await axios.get(URL);
      console.log("Response GET", response);
      setUserTable(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  async function editUserData() {
    try {
      const response = await axios.put(`${URL}/${editId}`, userData);
      console.log("Response PUT", response);
      getUserData();
      reset();
    } catch (error) {
      console.error(error);
    }
  }
  function editForm(index, id) {
    setEditId(id);
    const data = userTable[index];
    console.log("data", data);
    setUserData(data);
    setEditState(true);
  }
  function reset() {
    setEditState(false);
    setUserData(initial);
    setEditId(null);
  }
  // axios POST method
  async function postUserData() {
    try {
      const response = await axios.post(URL, userData);
      const data = [...userTable];
      data.push(response.data);
      setUserTable(data);
      setNewAlertState(true);
      setTimeout(alertFunc, 5000);
      // setUserTable(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  async function deleteUserData(id) {
    try {
      const response = await axios.delete(`${URL}/${id}`);
      console.log("Response DELETE", response);
      getUserData();
      reset();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <AppContext.Provider
      value={{
        userData,
        setUserData,
        userTable,
        setUserTable,
        postUserData,
        newAlertState,
        editState,
        reset,
        editUserData,
        editId,
        errAlertState,
        getUserData,
        handleChange,
        deleteUserData,
        editForm,
        onSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

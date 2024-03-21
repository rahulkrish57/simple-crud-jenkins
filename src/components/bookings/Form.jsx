import React, { useState } from "react";
import { useGlobalContext } from "../../context/appContext";
export const Form = (props) => {
  let {
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
    handleChange,
    onSubmit,
  } = useGlobalContext();

  const { name, age, gender, email, contact } = userData;

  return (
    <div className="">
      {/* Form here */}
      {errAlertState && (
        <div class="alert alert-danger position-fixed" role="alert">
          please Fill All Fields
        </div>
      )}
      {newAlertState && (
        <div class="alert alert-success position-fixed" role="alert">
          New Data Added
        </div>
      )}

      <div className="m-3 ">
        <label htmlFor="">Name</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
      </div>
      <div className="m-3">
        <label htmlFor="">age</label>
        <input type="number" name="age" value={age} onChange={handleChange} />
      </div>
      <div className="m-3">
        <label htmlFor="">Gender</label>
        <select
          name="gender"
          className="form form-select"
          value={gender}
          onChange={handleChange}
        >
          <option key={""}>--Select--</option>
          <option key={"male"}>male</option>
          <option key={"female"}>female</option>
        </select>
      </div>
      <div className="m-3">
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className="m-3">
        <label htmlFor="">Contact</label>
        <input
          type="text"
          name="contact"
          value={contact}
          maxLength={10}
          onChange={handleChange}
        />
      </div>
      {editState ? (
        <>
          <button type="button" className="btn btn-info" onClick={editUserData}>
            save
          </button>
          <button type="button" className="btn btn-danger" onClick={reset}>
            cancel
          </button>
        </>
      ) : (
        <button type="button" className="btn btn-primary" onClick={onSubmit}>
          Submit
        </button>
      )}
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { Form } from "../components/bookings/Form";
import { Table } from "../components/bookings/Table";
import { useGlobalContext } from "../context/appContext";
import axios from "axios";
export const Bookings = () => {
  let { getUserData } = useGlobalContext();
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <div>
        <Form />
        <Table />
      </div>
    </>
  );
};

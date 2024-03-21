import React from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useGlobalContext } from "../../context/appContext";
export const Table = ({}) => {
  let { userTable, deleteUserData, editForm } = useGlobalContext();

  return (
    <div className="d-flex justify-space-between">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {userTable.length > 0 &&
            userTable.map(
              ({ id, name, age, gender, email, contact }, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>{gender}</td>
                  <td>{email}</td>
                  <td>{contact}</td>
                  <td
                    className="cursor-pointer"
                    onClick={() => editForm(index, id)}
                  >
                    <FaEdit />
                  </td>
                  <td onClick={() => deleteUserData(id)}>
                    <MdDelete />
                  </td>
                </tr>
              )
            )}
        </tbody>
      </table>
    </div>
  );
};

import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

export const ApiTable = () => {
  const [userList, setuserList] = useState([]);
  const getData = async () => {
    const res = await axios.get("https://reqres.in/api/users?page=1");
    setuserList(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container-fluid ">
      <table class="table table-dark table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First_name</th>
            <th scope="col">Last_name</th>
            <th scope="col">Email</th>
            <th scope="col">Avtar</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => {
            return (
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  <img src={user.avatar} alt="img" />
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                  <button className="btn btn-success">Update</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

"use client";

import React, { useState, useEffect } from "react";

function FacultyPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch(
        "https://68cb91e6716562cf50740a49.mockapi.io/Student"
      );
      const data = await res.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <>
      <h1>User Page</h1>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>View More</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u:any) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.Name}</td>
              <td>{u.Email}</td>
              <td>
                <button className="btn btn-primary btn-sm">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default FacultyPage;
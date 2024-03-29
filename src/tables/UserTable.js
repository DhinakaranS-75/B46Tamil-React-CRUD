import React from "react";

const UserTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => {
            const { id, name, username } = user;
            return (
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>
                  <button onClick={() => props.deleteUser(id)} style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "5px"
                  }}>Delete</button>
                  <button onClick={() => props.editUser(id, user)} style={{
                    background: "green",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "5px",
                    margin: "5px",
                  }}>Edit</button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={4}>No users found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;

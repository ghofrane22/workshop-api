import axios from "axios";
import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, id: Date.now(), name: e.target.value });
  };

  const sendUser = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", user)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: "40px",
        alignItems: "center",
      }}
    >
      <h1>Workshop API</h1>

      <input type="text" placeholder="Type your name" onChange={handleChange} />
      <button onClick={sendUser} style={{ color: "violet" }}>
        Send
      </button>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "9px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {users.map((user, index) => (
          <div key={index}>
            <h1>{user.id}</h1>
            {user.name && <p>{user.name}</p>}
            <h1>{user.username}</h1>
            <h1>{user.email}</h1>
            {user.address && (
              <>
                <h1>{user.address.street}</h1>
                <h1>{user.address.suite}</h1>
                <h1>{user.address.city}</h1>
                <h1>{user.address.zipcode}</h1>
                {user.address.geo && (
                  <>
                    <h1>{user.address.geo.lat}</h1>
                    <h1>{user.address.geo.lng}</h1>
                  </>
                )}
              </>
            )}
            <h1>{user.phone}</h1>
            <h1>{user.website}</h1>
            <h1>{user.company.name}</h1>
            <h1>{user.company.catchPhrase}</h1>
            <h1>{user.company.bs}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;

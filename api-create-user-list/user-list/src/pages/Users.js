import { useState, useEffect } from "react";
import axios from "axios";


function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:9001/api/users')
      .then(function (res) {
        setUsers(res.data)
      }).catch(err => {
        throw err;
      });
  })
  return (
    <div>
      <h1>Users</h1>
      {users.map(user => (
        <div key={user.id}>
          <a href={`/users/${user.id}`}> {user.name} </a>
        </div>
      ))}
      <button type="button">
        Create
      </button>
    </div>
  )
}

export default Users;
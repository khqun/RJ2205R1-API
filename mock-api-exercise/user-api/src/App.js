import { useState, useEffect } from 'react';
import axios from 'axios'
function App() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:9001/api/articles')
      .then(function (response) {
        setUser(response.data);
      })
      .catch(function (error) {
        throw error
      })
  }, [users]);
  const renderUser = () => {
    return (
      users.map((data,index) => {
        return (
          <div>
            <h1 key={index}>user: {data.name}</h1>
          </div>
        )
      })
    )
  }
  return (
    <div>
      <h1>Users</h1>
      <ul>
      {renderUser()}
      </ul>
    </div>
  )
}

export default App;

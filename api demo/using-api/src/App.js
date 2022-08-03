import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
function App() {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/api/user/peter')
      .then(function (response) {
        setMessages(response.data)
      })
      .catch(function (error) {
      })
      .then(function () {
        setLoading(false)
      })
  }, [messages]);

  const renderMessageList = () => {
    return (
      messages.map(data => {
        return (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.title}</td>
          </tr>
        )
      })
    )
  }
  if (loading) {
    return <>loading</>
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {renderMessageList()}
        </tbody>
      </table>
    </>
  )
}

export default App;
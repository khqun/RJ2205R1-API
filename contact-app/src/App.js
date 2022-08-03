import axios from 'axios'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
function App() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const deleteBook = (index) => {
    users.splice(index, 1);
    setUsers([...users]);
    axios
      .delete(`https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts/${index}`)
      .then(res => {
        console.log(res.data);
      });
  }
  const navigateToEdit = (index) => {
    navigate(`/add-contact/${index}`)
  }
  const navigateToAdd = () => {
    navigate(`/add-contact`)
  }
  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts')
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        throw err
      })
  }, [])
  const renderLibary = () => {
    return users.map((user, index) => {
      return (
        <tr key={index}>
          <td ><img src={user.image} alt='ava' /> <div>{user.name}</div></td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>
            <button className="btn btn-lg btn-primary" onClick={() => navigateToEdit(user.id)}>Edit</button>
            <button className="btn btn-lg btn-danger" onClick={() => deleteBook(user.id)}>Delete</button>
          </td>
        </tr>
      )
    })
  }
  return (
    <div className='container'>
      <div className='header'>
        <h2 className='title'>Contact</h2>
        <button className='btn btn-lg btn-success' onClick={navigateToAdd}>Add user</button>
      </div>
      <div >
        <table className='table'>
          <thead>
            <tr className='border-bot'>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {renderLibary()}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App;

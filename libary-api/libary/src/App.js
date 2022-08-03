import axios from 'axios'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
function App() {
  const [libary, setLibary] = useState([]);
  const navigate = useNavigate();
  const deleteBook = (index) => {
    libary.splice(index, 1);
    setLibary([...libary]);
    axios
      .delete(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${index}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  }
  const navigateToEdit = (index) => {
    navigate(`/add-new-book/${index}`)
  }
  const navigateToAdd = () => {
    navigate(`/add-new-book`)
  }
  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books')
      .then(res => {
        setLibary(res.data)
      })
      .catch(err => {
        throw err
      })
  }, [])
  const renderLibary = () => {
    return libary.map((book, index) => {
      return (
        <tr key={index}>
          <td>{book.title}</td>
          <td>{book.quantity}</td>
          <td>
            <button className="btn btn-lg btn-primary" onClick={() => navigateToEdit(book.id)}>Edit</button>
            <button className="btn btn-lg btn-danger" onClick={() => deleteBook(book.id)}>Delete</button>
          </td>
        </tr>
      )
    })
  }
  return (
    <div className='container'>
      <div className='header'>
        <h2 className='title'>Libary</h2>
        <button className='btn btn-lg btn-success' onClick={navigateToAdd}>Add new book</button>
      </div>
      <div >
        <table className='table'>
          <thead>
            <tr className='border-bot'>
              <th>Title</th>
              <th>Quantity</th>
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

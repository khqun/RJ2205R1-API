import './App.css';
import Users from './pages/Users';
import UserDetails from './pages/UserDetail';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path={"/users/add"} element={<UserDetails />} />
        <Route path={`/users/:userId`} element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

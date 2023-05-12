import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from "./components/User/UserList"
import UserCreate from "./components/User/UserCreate"
import UserEdit from "./components/User/UserEdit"
import Navigation from './components/Nav/Nav';



function App() {
  return (
    <div className="container main-container">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index path="/" element={<UserList />} />
          <Route path="user/create" element={<UserCreate />} />
          <Route path="user/:id/edit" element={<UserEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import axios from 'axios';
import { UserContextProvider } from './UserContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';

axios.defaults.baseURL='http://192.168.0.227:4000'
axios.defaults.withCredentials=true;

function App() {
  return (
    <UserContextProvider>
    <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Route>
    </Routes>
    </UserContextProvider>    
  );
}

export default App;

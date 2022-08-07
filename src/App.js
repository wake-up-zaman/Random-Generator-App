import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Home/Navbar';
import Random from './Random/Random'
import Login from './Authentication/Login/Login';
import Register from './Authentication/Register/Register';
import RequireAuth from './Authentication/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/random' element={
            <RequireAuth>
              <Random></Random>
            </RequireAuth>
        }>

        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;

import Landing from './componentes/landing/Landing';
import Home from './componentes/home/Home';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Form from './componentes/form/Form';
import Detail from './componentes/detail/Detail';
import Register from './componentes/register/Register';
import AdminUser from './componentes/admin/AdminUser';
import ConfirmarCorreo from './componentes/confirmar-correo/ConfirmarCorreo';
import Login from './componentes/login/Login';
import axios from 'axios';
import UserPerfil from './componentes/user/UserPerfil';
import AllUsers from './componentes/allusers/AllUsers';
import PasForUser from './componentes/pasForUser/PasForUser';
axios.defaults.baseURL = 'https://proy-blu-black.onrender.com/'

function App() {


  return (
    <div>
      <Routes>

        <Route path='/' element={<Landing />} >  </Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/home' element={<Home />} >  </Route>
        <Route path='/pasxuser' element={<PasForUser />} >  </Route>
        <Route path='/form' element={<Form />}></Route>
        <Route path='/admin' element={<AllUsers />} >  </Route>
        <Route path='/confirmar-correo' element={<ConfirmarCorreo />} >  </Route>
         <Route path='/user/:id' element={ < UserPerfil/> } />
         <Route path='/pasforuser/:id' element={<PasForUser />} >  </Route>
      </Routes>
    </div>
  )
}

export default App

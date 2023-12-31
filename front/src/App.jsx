import LandingPage from './componentes/landing/LandingPage';
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
axios.defaults.baseURL = 'https://zeussistemas.dyndns.org:30001/'

function App() {


  return (
    <div>
      <Routes>

        <Route path='/' element={<LandingPage />} >  </Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/home' element={<Home />} >  </Route>
        <Route path='/admin' element={<AdminUser />} >  </Route>
        <Route path='/confirmar-correo' element={<ConfirmarCorreo />} >  </Route>
         <Route path='/user/:id' element={ < UserPerfil/> } />
      </Routes>
    </div>
  )
}

export default App

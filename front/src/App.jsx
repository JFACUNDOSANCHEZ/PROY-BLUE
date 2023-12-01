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



function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} >  </Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/home' element={<Home />} >  </Route>
        <Route path='/home/post' element={<Form />} >  </Route>
        <Route path='/home/detail/:id' element={<Detail />} >  </Route>
        <Route path='/admin' element={<AdminUser />} >  </Route>
        <Route path='/confirmar-correo' element={<ConfirmarCorreo />} >  </Route>
         <Route path='/login' element={<Login />} >  </Route> 
      </Routes>
    </div>
  )
}

export default App

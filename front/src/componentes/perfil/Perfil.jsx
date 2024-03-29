import { useEffect } from 'react';
import './perfil.css'; 
import { Link } from 'react-router-dom';
import Nav from '../nav/Nav';

const Perfil = ({user}) => {




  const level = user?.nivel === '3' ? 'superAdmin' : 'admin' 
  console.log(level)

  useEffect(() => {
    const handleClick = (e) => {
      if (e.which !== 1) return false;

      document.querySelector('.card--front').classList.toggle('card--front--flip');
      document.querySelector('.card--back').classList.toggle('card--back--flip');
    };

    const handleLinkClick = (e) => {
      e.stopPropagation();
    };

    document.addEventListener('mouseup', handleClick);
    document.querySelectorAll('a').forEach((link) => link.addEventListener('mouseup', handleLinkClick));

    return () => {
      document.removeEventListener('mouseup', handleClick);
      document.querySelectorAll('a').forEach((link) => link.removeEventListener('mouseup', handleLinkClick));
    };
  }, []);

  return (<div>

      <Nav></Nav>
    <div className="container">
     
      <div className="card card--front">
        <div className="logo">

        </div>
        <div className="text">
          <header className="head">
            <h1 className="head__name">
              <b className="name__fn">{user?.nombreCompleto}</b>
    
            </h1>
            <p className="head__subtitle"><p> {user?.correoElectronico}</p></p>
          </header>
        </div>
      </div>

      <div className="card card--back">
        <div className="card__content">
          <ul className="contact">       
            <li><p>Email: {user?.correoElectronico}</p></li>
            <li><p>Nombre: {user?.nombreCompleto}</p></li> 
            <li><p>Activo: {user?.activo ? 'Sí' : 'No'}</p></li>
            <li><p>Rol: {level}</p></li>
          </ul>
        </div>
      </div>

      <div className="card-shadow"></div>
    </div>
  </div>
  );
};

export default Perfil;

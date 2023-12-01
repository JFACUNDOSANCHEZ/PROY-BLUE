const validation = (userData) => {
    const errors = {};
    
    if(!/\S+@\S+\.\S+/.test(userData.correoElectronico)) {
        errors.correoElectronico = 'No es un email válido'
    }
    if(userData.correoElectronico === '') {
        errors.email = 'El campo no puede estar vacío'
    }
    if(userData.correoElectronico.length > 35) {
        errors.email = 'Debe ser menor que 35 caracteres'
    }

    if(!/\d/.test(userData.contraseña)) {
        errors.password = 'Debe contener al menos un número'
    }
    if(userData.contraseña.length < 3) {
        errors.password = 'Debe tener al menos 6 caracteres'
    }
    if(userData.contraseña.length > 10) {
        errors.password = 'No puede ser mayor a 10 caracteres'
    }
    
    return errors;
};

export default validation;
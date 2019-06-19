import {signUpUser} from './view-controller.js';

export default () => {
    const formRegister  = document.createElement("div");
    formRegister.className='contenedor-login'
    const tmpRegister = `
    <div class="login1">
        <img src="./imagen/travel-worl.jpg" class="logo logo-desktop">
    </div>
    <div class="login2">
      <div>
        <img src="./imagen/logo-maleta.jpg" class="logo-maleta centrar"
      </div> 
        <form class='form-login centrar'>
            <input type='text' id='name' placeholder ='Nombre y apellido' class='block centrar'/>
            <input type='email' id='email2' placeholder ='Email' class='block centrar'/>
            <input type='password' id='password2' placeholder ='Password'class='block centrar'/>
            <button type='button' id='btn-signup' class='block centrar boton-login'>Sign Up</button>
            <p id='error'></p>
            <p>Ya tienes una cuenta <span><a href='#/login'>Inicia Sesion</a></span></p>
        </form>
        `
    formRegister.innerHTML = tmpRegister;

    const btnSignUp = formRegister.querySelector('#btn-signup');
    btnSignUp.addEventListener('click', signUpUser);

    return formRegister;
};

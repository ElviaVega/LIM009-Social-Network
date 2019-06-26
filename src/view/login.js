import { logInOnSubmit, logInGoogle } from './view-controller.js';

export default () => {
  const formLogin  = document.createElement('div');
  formLogin.className='contenedor-login'
  const tmpLogin = `    
    <div class='login1'>
        <img src='./imagen/travel-worl.jpg' class='logo logo-desktop'>
    </div>
    <div class='login2'>
      <div>
        <img src='./imagen/logo-maleta.jpg' class='logo-maleta centrar'
      </div>
      <h3 class='centrar'> ¡BIENVENID@ VIAJER@! </h3>
    
      <form class='form-login centrar'>
        <input type='email' id='email' placeholder ='Email' class='block centrar'/>
        <input type='password' id='password' placeholder ='Password' class='block centrar'/>
        <button type='button' id='btn-login' class='block centrar boton-login'>Log in</button>
        <p id='error'></p>
        <p class='centrar' > O bien ingresa con: </p>
        <a  id='btn-google'>
          <img src='./imagen/logo-google.png' alt='Google' class='logo-google'>
        </a>		
        <p>¿No  tienes una cuenta? <span><a href='#/register'>Regístrate</a></span></p>
      </form>
    </div>
    `
    formLogin.innerHTML = tmpLogin;
   
    const btnlogIn = formLogin.querySelector('#btn-login');
    btnlogIn.addEventListener('click', logInOnSubmit);
    
    const btnGoogle = formLogin.querySelector('#btn-google');
    btnGoogle.addEventListener('click', logInGoogle);
    
    return formLogin;     
    
};


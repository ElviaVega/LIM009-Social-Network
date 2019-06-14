import { logInOnSubmit, logInGoogle } from "./view-controller.js";

export default () => {
  const formLogin  = document.createElement("div");
  const tmpLogin = `
    <div class='imagen-portada'>
      <img src="./imagen/colash.jpg">        
    </div>
    <div class='logo'>
        <img src="./imagen/logo-travelovers.png">
        <p>"Por que viajar es la mejor manera de perderse y encontrarse al mismo tiempo"  </P>        
    </div>
    <p> Inicia Sesión </p>
    <form class='form-login'>
      <input type='email' id='email' placeholder ='Email' class='block'/>
      <input type='password' id='password' placeholder ='Password' class='block'/>
      <button type='button' id='btn-login' class='block'>Log in</button>
      <p id='error'></p>
      <p> O bien ingresa con: </p>
      <a  id='btn-google'>
        <img src='./imagen/logo-google.png' alt="Google" class='logo-google'>
      </a>		
      <p>Si no  tienes una cuenta <span><a href="#/register">Registrate</a></span></p>
    </form>
    `
    formLogin.innerHTML = tmpLogin;
   
    const btnlogIn = formLogin.querySelector('#btn-login');
    btnlogIn.addEventListener('click', logInOnSubmit);
    
    const btnGoogle = formLogin.querySelector('#btn-google');
    btnGoogle.addEventListener('click', logInGoogle);
    
    return formLogin;     
    
};


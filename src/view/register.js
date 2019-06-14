import {signUpUser} from './view-controller.js';

export default () => {
    const formRegister  = document.createElement("div");
    const tmpRegister = `
    <div class='logo'>
        <img src="./imagen/logo-travelovers.png">        
    </div> 
        <form>
            <input type='text' id='name' placeholder ='Nombre y apellido' class='block'/>
            <input type='email' id='email2' placeholder ='Email' class='block'/>
            <input type='password' id='password2' placeholder ='Password'class='block'/>
            <button type='button' id='btn-signup' class='block'>Sign Up</button>
            <p id='error'></p>
            <p>Ya tienes una cuenta <span><a href='#/login'>Inicia Sesion</a></span></p>
        </form>
        `
    formRegister.innerHTML = tmpRegister;

    const btnSignUp = formRegister.querySelector('#btn-signup');
    btnSignUp.addEventListener('click', signUpUser);

    return formRegister;
};

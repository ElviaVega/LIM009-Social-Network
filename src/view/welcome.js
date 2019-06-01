import formPost from './post.js'
//import formPostCollection from './postCollection.js'
import {logOut} from './view-controller.js'
import userProfile from './userProfile.js';

export default () => {
    const formWelcome  = document.createElement("div");
    const tmpWelcome = `
        <div >
        <header>
            <nav>
                <ul class='menu-nav'>
                    <li> perfil</li>
                    <li> Consejos viajeros </li>
                    <li><a id='sign-out'>Cerrar Sesión</a></li>             
                 </ul>
            </nav>
        </header>
        <h2> Bienvenido </h2>
        
        </div>       
        `
        formWelcome.innerHTML = tmpWelcome;
        formWelcome.appendChild(formPost());
        formWelcome.appendChild(userProfile());
        
        //formWelcome.appendChild(formPostCollection());

        const btnSignOut = formWelcome.querySelector('#sign-out');
        btnSignOut.addEventListener('click', logOut)
               
        return formWelcome;
        } 
        

 
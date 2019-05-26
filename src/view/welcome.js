import {logOut} from './view-controller.js'

export default () => {
    const formWelcome  = document.createElement("div");
    const tmpWelcome = `
        <div >
        <header>
            <ul class='header'>
                <li><a id='sign-out'>Cerrar Sesión</a></li>
            </ul>
        </header>
        <h2> Bienvenido </h2>
        </div>
        `
        formWelcome.innerHTML = tmpWelcome;
        const btnSignOut = formWelcome.querySelector('#sign-out');
        btnSignOut.addEventListener('click', logOut)
        
        /*
        btnSignOut.addEventListener('click', () => {
            console.log('hice click em cerrar sesion');
            logOut()
                .then(() => {
                    console.log('se cerro de manera exitosa')
                })
        });*/
        return formWelcome;
        } 
        

 
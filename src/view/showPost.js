//import { showPost } from "./view-controller.js";

export default (post) => {
    
    const formshowPost  = document.createElement("div");
    const tmpshowPost = `
        <div>
            <header>
               <p> Publicado por: </p>
               <button  id="btn-eliminar" type = "button" class="btn-eliminar" > &#xf410</button>
            </header>

            <p id ="post" > </p>
            
            <button  id="btn-editar" type = "button" class="btn-editar" > Editar </button>
            <button id="btn-like" type = "button"> me gusta </button>           
            
        </form>
        </div>
        `
    formshowPost.innerHTML = tmpshowPost;
   
    //const btnCompartir = formPost.querySelector('#id="btn-editar');
    //const btnEliminar = formPost.querySelector('#id="btn-eliminar');
   // btnCompartir.addEventListener('click', getToCollection);
     
    return formshowPost;     
}


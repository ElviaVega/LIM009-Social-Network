import { showPost } from "./view-controller.js";

export default () => {
    showPost()
    const formPost1  = document.createElement("div");
    const tmpPost1 = `
        <div>
            <header>
               <p> Publicado por: ${user.displayName} </p>
               <button  id="btn-eliminar" type = "button" class="btn-eliminar" >&#xf410</button>
            </header>

            <p id ="post" > </p>
            <select>
                <option value="privado">Privado</option>
                <option value="publico">Publico</option>
            </select>
            <button  id="btn-editar" type = "button" class="btn-editar" > Editar </button>
            
            
        </form>
        </div>
        `
    formPost1.innerHTML = tmpPost1;
   
    //const btnCompartir = formPost.querySelector('#id="btn-editar');
    //const btnEliminar = formPost.querySelector('#id="btn-eliminar');
   // btnCompartir.addEventListener('click', getToCollection);
     
    return formPost;     
}


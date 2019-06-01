import { getToCollection } from "./view-controller.js";

export default () => {
    const formPostCollection  = document.createElement("div");
    const tmpPostCollection = `
        <div>
        <form>
            <p id ="post" > </p>
            <select>
                <option value="privado">Privado</option>
                <option value="publico">Publico</option>
            </select>
            <button  id="btn-editar" type = "button" class="btn-enviar" > Editar </button>
            <button  id="btn-editar" type = "button" class="btn-enviar" > Eliminar </button>
            
        </form>
        </div>
        `
    formPostCollection.innerHTML = tmpPostCollection;
   
    const btnCompartir = formPost.querySelector('#btn-compartir');
   // btnCompartir.addEventListener('click', getToCollection);
     
    return formPost;     
}
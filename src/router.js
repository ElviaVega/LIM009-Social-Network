import {components} from "./view/components.js";


const changeTmp = (hash) => {
    if (hash === '' || hash === '#' || hash === '#/') {
        return viewTmp('#/login');
    } else if (hash === '#/login' || hash === '#/register' || hash === '#/welcome') {
        return viewTmp(hash);
    }else {
        return viewTmp('#/pgError');
    }
};

export const viewTmp = (routers) => {
    const router = routers.substr(2, routers.length - 2)
    const root = document.getElementById('root');
      root.innerHTML = '';
      switch (router) {
        case 'login' :
              root.appendChild(components.login());
              break; 
        case 'register':
              root.appendChild(components.register());
              break; 
        case 'welcome':
              root.appendChild(components.welcome());
              break;
        default:
              root.appendChild(components.pgError());              
              break; 
    }
};
export const initRouter = () => {
    window.addEventListener('load',changeTmp(window.location.hash))
    if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash)
}


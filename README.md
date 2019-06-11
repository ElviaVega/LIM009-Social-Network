Creando una Red Social
Bienvenida a tu primer proyecto del track de Frontend en Laboratoria.

En este proyecto construirás una red social, cuya temáticas dejaremos a tu elección.

Aquí algunas ideas para inspirarte:

* Alimentación
* Feminismo
* Educación
* Salud
* Energías Renovables

Las caraterísticas técnicas de tu aplicación serán las siguientes:

* Debe ser una Single-Page Application SPA (versión traducida)
* Debe ser diseñada con un enfoque mobile first (versión traducida)
* Debe permitir la persintencia de datos
* Para implementar tu aplicación usarás HTML5, CCS3, Vanilla JavaScript(ES6+) y Firebase.

Objetivos de Aprendizaje
El objetivo de aprendizaje de este proyecto es construir una Red Social, Single-Page Application (SPA), responsiva en la que podamos escribir, leer, actualizar y eliminar datos.

Para ello deberás poner en juego tu creatividad para generar ideas que lleven a una solución original y valiosa del problema, trabajando en equipo buscando feedback constante.

En otras palabras, seguirás afianzando todo lo aprendido en el Common Core, pero en particular verás :

A nivel de planificación
Utilizar projects, issues y milestones de GitHub para gestionar la planificación de tu proyecto. Estos recursos serán la fuente de organización de tu equipo y a través de estas herramientas tus coaches podrán ver el avance del proyecto y darte feedback.

Escribir, de manera colaborativa, las Definiciones de terminado y Criterios de Aceptación por cada Historia de usuario que te daremos para este proyecto y que se deberán ver reflejadas en tu planificación.

Priorizar la implementación de tus funcionalidades, en función al esfuerzo que demandan en relación al valor que le aportan al usuario, y ejecutar en equipo todas las historias de usuario dentro del tiempo estimado para cada sprint y que finalmente se vean reflejadas en publicaciones completamentamente funcionales al final de cada spint.

Adquirir la disciplina de la completitud, terminando una historia de usuario antes de pasar a la siguiente (es decir, que cumple con Definición de Terminado y Criterios de Aceptación contemplando todos los puntos que son objetivos de aprendizaje para este proyecto).

A nivel del desarrollo frontend
Arquitectura de la aplicación
Diseñar la arquitectura de tu aplicación, modularizando tu código a través de es modules (import y export)

Familiarizarte con el patrón modelo - vista - controlador (MVC).

Tecnologías HTML5 y CSS3
Aplicar HTML5 semántico en tu proyecto.
Aplicar y reforzar los conceptos fundamentales de CSS3.
Implementar selectores de clase evitando la redundancia de estilos en CCS3.
Utilizar media-queries para lograr un diseño mobile first, implementando un sistema de grillas básico que te permita crear un diseño adaptativo para mobile y desktop
A continuación te proporcionamos el layout (diseño) de la vista mobile y desktop que deberás replicar visualmente y cuyo contenido, colores y fuentes de texto, dejaremos a tu elección.

Vista mobile

mobile

Vista Desktop

desktop

JavaScript (ES6+)
Utilizar modulos de ES6 para poder modularizar tu código JavaScript.
Reforzar tu conocimiento sobre el uso de Template literals (Template strings).
Reforzar tu conocimiento de la manipulacion de los elementos del DOM a traves JavaScript.
Implementar un sistema de rutas para cambiar de una vista a otra de manera dinámica (SPA).
Testear la lógica de tu aplicación, con Jest cuidando que el coverage pase el 90% de statements (sentencias), functions (funciones), lines (líneas), y branches (ramas).
A nivel de datos
En los proyectos anteriores solo has consumido (leído) datos, por ejemplo, a través de un archivo json.

En este proyecto diseñarás la estructura esos datos, la forma de consultarlos, actualizarlos, modificarlos y eliminarlos según los requerimiento del usuario. Para llevarlo a cabo utilizaras Firebase.

Firebase
El objetivo de usar Firebase, en este proyecto, es que aprendes a manejar y persistir datos a traves de una base de datos no relacional, en tiempo real y puedas implementar operaciones CRUD (Creación, Lectura, Actualización y eliminación) de datos.

Consideraciones generales del proyecto
Este proyecto debe ser desarrollado en equipos de trabajo de 3 integrantes.

La duración del proyecto es 3 sprints, con una duración de una semana cada uno.

Te daremos las historias de usuario con el fin de presentarte los requerimientos y funcionalidades que desea el usuario final.

La planificación es vital, para ello utilizaremos el flujo de trabajo colaborativo que nos ofrecen los projects de GitHub, para que puedas escribir tus definiciones de terminado y criterios de aceptación por cada historia de usuario con el objetivo que determinen, en equipo, qué hacer en el sprint y cómo se realizará. Recuerda que esta planificación será revisada por tus coaches para ver el avance del equipo y dar feedback.

Restricciones Técnicas
Debes utilizar flexbox y media queries para posicionar tus elementos. No está permitido el uso de frameworks de CCS (bootstrap).

Ya te damos un diseño (layout) de la vista mobile y desktop, queremos que lo repliques a nivel pixel perfect, el contenido, paleta de colores y fuentes, depende de la temática que van a elegir como equipo.

Los test son fundamentrales y deberán formar parte de tu definición de terminado, te recomendamos que comiences a implementarlos desde el comienzo.

Historias de Usuario
Como usuario nuevo debo poder crear una cuenta con email y password para poder iniciar sesion. Si el mail o password no es válido, al momento de logearme, debo poder ver un mensaje de error. Por otro lado, necesito también tener la opción de iniciar sesión con mi cuenta de Google o Facebook.

Como usuario loggeado debo poder crear, guardar, modificar en el mismo lugar (in place) y eliminar una publicación (post) privada o pública, que puede ser una frase o una imagen.

Como usuario loggeado debo poder ver todos los posts públicos y privados que he creado hasta ese momento, desde el más reciente hasta el más antiguo, así como la opción de poder cambiar la configuración de privacidad de mis post.

Yo como usuario loggeado, puedo dar like y llevar un conteo de likes en mi publicación así como poder escribir, guardar, editar o eliminar un comentario en mi publicación.

Al final debo poder ingresar a la red social y poder visualizar los datos de mi perfil creado o editarlos.

Recursos
Mobile first
El concepto de mobile first hace referencia a un proceso de diseño y desarrollo donde partimos de cómo se ve y cómo funciona la aplicación en un dispositivo móvil primero, y más adelante se ve como adaptar la aplicación a pantallas progresivamente grandes y características específicas del entorno desktop. Esto es en contraposición al modelo tradicional, donde primero se diseñaban los websites (o webapps) para desktop y después se trataba de arrugar el diseño para que entre en pantallas más chicas. La clave acá es asegurarse de que desde el principio diseñan usando la vista responsive de las herramientas de desarrollador (developer tools) del navegador. De esa forma, partimos de cómo se ve y comporta la aplicación en una pantalla y entorno móvil.

Múltiples vistas
En proyectos anteriores nuestras aplicaciones habían estado compuestas de una sola vista principal (una sóla página). En este proyecto se introduce la necesidad de tener que dividir nuestra interfaz en varias vistas o páginas y ofrecer una manera de navegar entre ellas.

Escritura de datos
En los proyectos anteriores hemos consumido (leído) datos, pero todavía no habíamos escrito datos (salvar cambios, crear datos, borrar, ...). En este proyecto tendrás que crear (salvar) nuevos datos, así como leer, actualizar y modificar datos existentes. Estos datos se podrán guardar de forma remota usando Firebase.

Autenticación y autorización
Los proyectos anteriores han sido pensados como recursos públicos, donde todos los usuarios compartían un mismo rol y la misma información.

En este proyecto tendrás que diferenciar la información a mostrar y modificar, dependiendo de la identidad del usuario. De la misma manera deberás crear reglar de autorización para el acceso a los datos.

Para esto utilizaras respectivamente Firebase authentication y Firestore security rules

CSS
En este proyecto queremos que ganes confianza y experiencia con CSS profesional, por eso usarás flexbox para posicionar tus elementos y media queries para hacer tu diseño responsivo.

Recuerda que no puedes usar frameworks CSS, sólo vanilla css.

Otras:
Modulos: Export
Modulos: Import
Diseño web, responsive design y la importancia del mobile first - Media Click
Mobile First: el enfoque actual del diseño web móvil - 1and1
Mobile First - desarrolloweb.com
Mobile First - ZURB
Mobile First Is NOT Mobile Only - Nielsen Norman Group

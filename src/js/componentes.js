import '../css/componentes.css';


export const saludar = ( nombre,apellido ) => {

    console.log('Creando etiqueta h1, en el HTML!');

    const h1     = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }  ${apellido}`;

    document.body.append( h1 );

}
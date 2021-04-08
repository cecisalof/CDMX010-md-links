// #!/usr/bin/env node

// El módulo debe poder importarse en otros scripts de Node.js y debe ofrecer la siguiente interfaz:
// mdLinks(path, options)
// Argumentos

//     path: Ruta absoluta o relativa al archivo o directorio. Si la ruta pasada es relativa, debe resolverse como relativa al directorio desde donde se invoca node - current working directory).
//     options: Un objeto con las siguientes propiedades:
//         validate: Booleano que determina si se desea validar los links encontrados.

// Valor de retorno

// La función debe retornar una promesa (Promise) que resuelva a un arreglo (Array) de objetos (Object), donde cada objeto representa un link y contiene las siguientes propiedades:

//     href: URL encontrada.
//     text: Texto que aparecía dentro del link (<a>).
//     file: Ruta del archivo donde se encontró el link.

//El comportamiento por defecto no debe validar si las URLs responden ok o no, solo debe identificar el archivo 
// markdown (a partir de la ruta que recibe como argumento), analizar el archivo Markdown e imprimir los links que 
// vaya encontrando, junto con la ruta del archivo donde aparece y el texto que hay dentro del link 
// (truncado a 50 caracteres).


//  module.exports = () => {

//}
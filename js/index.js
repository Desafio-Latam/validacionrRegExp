
//[a-zA-Z]: Encuentra cualquier carácter entre los rangos de la letra a hasta la z y desde A hasta
//Z. 
function probarEntrada(regexp, cadena){
    var subcadena;
    if (regexp.test(cadena)) {
      subcadena = ' contiene ';
    } else {
      subcadena = ' no contiene ';
    }
    console.log(cadena + subcadena + regexp.source);
  }
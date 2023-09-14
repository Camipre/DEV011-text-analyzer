const analyzer = {
  getWordCount: (text) => {
    const palabras = text.trim().split(/\s+/);
    return palabras.length;
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    return text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    const palabras = text.replace(/[.,/#!$%^&*;:{}=\-_`~()\s]/g, '');
    const contpalabras = palabras.length;
    return (contpalabras);
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    const palabras = text.trim().split(/\s+/);
    let total = 0;
    // Recorre las palabras para calcular la suma de las longitudes
    for (let i = 0; i < palabras.length; i++) {
      total += palabras[i].length;
    }
    // Calcula la longitud media y redondea a 2 decimales
    const longitudMedia = total / palabras.length;
    const longitudMediaConDosDecimales = Math.round(longitudMedia * 100) / 100;
    return longitudMediaConDosDecimales;
  },
  getNumberCount: (text) => {
    const prueba = text.split(" ") || []
    const prueba2 = prueba.filter(item => {
      if (item.match(/^[a-zA-Z!@#$%^&*()_+\-=[{};':"\\|,.<>/ ?]* $ /)) {
        return 0
      }
      return Number(item)
    }).map(item => Number(item))
    return prueba2.length;    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const prueba = text.split(" ") || []
    const prueba2 = prueba.filter(item => {
      if (item.match(/^[a-zA-Z!@#$%^&*()_+\-=[{};':"\\|,.<>/ ?]* $ /)) {
        return 0
      }
      return Number(item)
    }).map(item => Number(item))
    const suma = prueba2.reduce((acumulador, number) => {
      return acumulador + number;
    }, 0);
    return suma
  },
};

export default analyzer;

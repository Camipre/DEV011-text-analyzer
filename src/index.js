import analyzer from "./analyzer.js";
document.addEventListener('DOMContentLoaded', function () {
  ///////////////////////// VARIABLES /////////////////////////////
  const resetButton = document.getElementById('reset-button');
  const textAreas = document.querySelector('textarea[name="user-input"]');
  // variables para funciones 
  const wordcount = document.querySelector('[data-testid="word-count"]');
  const charactercount = document.querySelector('[data-testid="character-count"]');
  const characterNOspaces = document.querySelector('[data-testid="character-no-spaces-count"]');
  const wordlengthaverage = document.querySelector('[data-testid="word-length-average"]');
  const numbercount = document.querySelector('[data-testid="number-count"]');
  const numbersum = document.querySelector('[data-testid="number-sum"]');
  ////////////////// BOTON DE LIMPIAR /////////////
  resetButton.addEventListener('click', function () {
    textAreas.value = '';
    wordcount.textContent = "Recuento de palabras: " + 0;
    charactercount.textContent = "Recuento de caracteres: " + 0;
    characterNOspaces.textContent = "Recuento de caracteres excluyendo espacios y signos de puntuación: " + 0;
    wordlengthaverage.textContent = "Longitud media de palabras: " + 0;
    numbercount.textContent = "Recuento de números: " + 0;
    numbersum.textContent = "Suma total de números: " + 0;
  });
  //////////////////// FUNCIONES ///////////////////////////
  // Funcion de contar palabras
  textAreas.addEventListener('keyup', function () {
    const Palabras = analyzer.getWordCount(textAreas.value)
    wordcount.textContent = "Recuento de palabras: " + Palabras;
  });
  // Funcion de contar caracteres 
  textAreas.addEventListener('keyup', function () {
    const Palabras = analyzer.getCharacterCount(textAreas.value)
    charactercount.textContent = "Recuento de caracteres: " + Palabras;
  });
  // Funcion de contar caracteres excluyendo espacios y signos de puntuación:
  textAreas.addEventListener('keyup', function () {
    const Palabras = analyzer.getCharacterCountExcludingSpaces(textAreas.value)
    characterNOspaces.textContent = "Recuento de caracteres excluyendo espacios y signos de puntuación: " + Palabras;
  });
  textAreas.addEventListener('keyup', function () {
    const Palabras = analyzer.getAverageWordLength(textAreas.value)
    wordlengthaverage.textContent = "Longitud media de palabras: " + Palabras;
  });
  textAreas.addEventListener('keyup', function () {
    const Palabras = analyzer.getNumberCount(textAreas.value)
    numbercount.textContent = "Recuento de números: " + Palabras;
  });
  textAreas.addEventListener('keyup', function () {
    const Palabras = analyzer.getNumberSum(textAreas.value)
    numbersum.textContent = "Suma total de números: " + Palabras;
  });
});
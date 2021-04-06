function unselected(){
  var selection = document.getElementById('focus').value;
  focus.onblur = alert('Merci de votre participation');
}
//2nde Solution
// element.event = function (){ }

/*On cible l'element sans créer une variable
en remplaçant element par l'ID de notre input
dans la syntaxe citée au dessus.*/
// focus.onblur = function unselected(){
// alert('Merci de votre participation');
// }

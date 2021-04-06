//2nde Solution
//je crée un fonction qui change mon image lorsque l'action onmouseover a lieu
//ce qui setrouve entre les () est un paramètre
function flipImage(image) {
  //le parametre devient un argument que l'on concatène avec notre nouvel url
  document.getElementById(image).src = "Images/" + image + "_2.jpg";
}

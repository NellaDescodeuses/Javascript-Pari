//1ere Solution
// Je crée une variable pour ajouter une image sur mon html
let img = document.createElement('img');
img.src = "./image1.jpg";
//Je crée une variable pour attribuer mon image à ma div id="switch"
let picture = document.getElementById('change');
//j'ajoute mon image a ma div. l'image est l'enfant de ma div.
picture.appendChild(img);
//je crée un fonction qui change mon image lorsque l'action onmouseover a lieu
function changeImage() {
  change.onmouseover = img.src = 'image1_2.jpg';
}
// 2nde Solution
// function changeImage(){
//   document.getElementById('picture').src = 'image1_2.jpg';
// }

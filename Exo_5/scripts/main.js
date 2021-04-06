//1ere Solution
// Je crée une variable pour ajouter une image sur mon html
let img = document.createElement('img');
img.src = "Images/image1.jpg";
let img2 = document.createElement('img');
img2.src = "Images/image2.jpg";
let img3 = document.createElement('img');
img3.src = "Images/image3.jpg";
let img4 = document.createElement('img');
img4.src = "Images/image4.jpg";
let img5 = document.createElement('img');
img5.src = "Images/image5.jpg";

//Je crée une variable pour attribuer mon image à ma div id=""
let picture = document.getElementById('image1');
let picture2 = document.getElementById('image2');
let picture3 = document.getElementById('image3');
let picture4 = document.getElementById('image4');
let picture5 = document.getElementById('image5');

// j'ajoute mon image a ma div. l'image est l'enfant de ma div.
picture.appendChild(img);
picture2.appendChild(img2);
picture3.appendChild(img3);
picture4.appendChild(img4);
picture5.appendChild(img5);

//je crée un fonction qui change mon image lorsque l'action onmouseover a lieu
//ce qui setrouve entre les () est un paramètre
function changeImage(image){
//   //le parametre devient un argument que l'on concatène avec notre nouvel url
//   document.getElementById(image).src = "Images/" + image + "_2.jpg";
image1.onmouseover = img.src = 'Images/image1_2.jpg';
image2.onmouseover = img2.src = 'Images/image2_2.jpg';
image3.onmouseover = img3.src = 'Images/image3_2.jpg';
image4.onmouseover = img4.src = 'Images/image4_2.jpg';
image5.onmouseover = img5.src = 'Images/image5_2.jpg';
}

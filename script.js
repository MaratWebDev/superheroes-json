const header = document.querySelector("header");
const section = document.querySelector("section");

// const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
const requestURL = "./superheroes.json";
let request = new XMLHttpRequest();

request.open("GET", requestURL);

request.responseType = "text";
request.send();

request.onload= function() {
  let superHeroesText = request.response;
  let superHeroes = JSON.parse(superHeroesText);
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}

function populateHeader(jsonObj) {
  let myH1 = document.createElement("h1");
  myH1.textContent = jsonObj["squadName"];
  header.appendChild(myH1);

  let myPara = document.createElement("p");
  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  header.appendChild(myPara);
}
function showHeroes(jsonObj) {
  let heroes = jsonObj["members"];
  for(i=0; i< heroes.length; i++) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");


    myH2.textContent = heroes[i].name;
    myPara1.textContent = "Secret Identity: " + heroes[i].secretIdentity;
    myPara2.textContent = "Age: " + heroes[i].age;
    myPara3.textContent = "SuperPowers: ";

    let superPowers = heroes[i].powers;
    for (let j=0; j< superPowers.length; j ++) {
      let listItem = document.createElement("li");
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);

  }
}

const myJSON = { "name": "Chris", "age": "38" };
console.log(myJSON);
const myString = JSON.stringify(myJSON);
console.log(myString);
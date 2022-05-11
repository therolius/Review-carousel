const people = [{
    "id":1,
    "name": "Krystian Smith",
    "job": "Web developer",
    "img":"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "desc": "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartresure before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
  },
  {
    "id":2,
    "name": "Lui Born",
    "job": "UX developer",
    "img":"https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg",
    "desc": "To change the source or src of an image, you need to add an id or class to the image tag. You can get the image element using the name of the id or class, and you can change the source or src of the image using the src property. See the example code below."
  },
  {
    "id":3,
    "name": "Pete Piker",
    "job": "UI developer",
    "img":"https://www.theportlandclinic.com/wp-content/uploads/2019/07/Person-Curtis_4x5-e1564616444404-300x300.jpg",
    "desc": "However, if the Should element's inline behavior be blocked by Content Security Policy? algorithm returns Blocked when executed upon the attribute's element, style attribute, and the attribute's value, then the style rules defined in the attribute's value must not be applied to the element. [CSP]"
  }];

const leftArrow = document.getElementById("button-left");
const rightArrow = document.getElementById("button-right");
const randomButton = document.querySelector(".suprise-button");

let pName = document.querySelector(".name");
let pImg = document.querySelector("img");
let pTitle = document.querySelector(".title");
let pDesc = document.querySelector(".desc");

let content = document.querySelector(".content");

let currentPerson = 0;

function goRight(){
  if(currentPerson<people.length-1)
    currentPerson++;
  else
    currentPerson = 0;
  
  pName.innerHTML = people[currentPerson].name;
  pImg.src=people[currentPerson].img;
  pTitle.innerHTML = people[currentPerson].job;
  pDesc.innerHTML = people[currentPerson].desc;
}

function goLeft(){
  if(currentPerson>0)
    currentPerson--;
  else
    currentPerson = people.length-1;
  
  pName.innerHTML = people[currentPerson].name;
  pImg.src=people[currentPerson].img;
  pTitle.innerHTML = people[currentPerson].job;
  pDesc.innerHTML = people[currentPerson].desc;
}

function randomPerson(){
  let nextRandom = Math.floor(Math.random() * people.length);

if(currentPerson == nextRandom)
  if(nextRandom == 0)
    currentPerson = 1;
  else
    currentPerson = Math.floor(nextRandom/2);
else
  currentPerson = nextRandom;

  console.log("Current Person: "+currentPerson);


  pName.innerHTML = people[currentPerson].name;
  pImg.src = people[currentPerson].img;
  pTitle.innerHTML = people[currentPerson].job;
  pDesc.innerHTML = people[currentPerson].desc;
}



rightArrow.addEventListener('click', goRight);
leftArrow.addEventListener('click', goLeft);
randomButton.addEventListener("click", randomPerson);

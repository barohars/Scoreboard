const scoreHome = document.getElementById("scoreHome");
const scoreGuest = document.getElementById("scoreGuest");
const addOne1 = document.getElementById("addOne1");
const addTwo1 = document.getElementById("addTwo1");
const addThree1 = document.getElementById("addThree1");
const addOne2 = document.getElementById("addOne2");
const addTwo2 = document.getElementById("addTwo2");
const addThree2 = document.getElementById("addThree2");

let pointsHome = 0;
let pointsGuest = 0;


addOne1.addEventListener("click", function(){
    // let points = 0;
    pointsHome += 1;
    // scoreHome.textContent += null;
    scoreHome.textContent = pointsHome;
})

addOne2.addEventListener("click", function(){
    // let points = 0;
    pointsGuest += 1;
    // scoreHome.textContent += null;
    scoreGuest.textContent = pointsGuest;
})

addTwo1.addEventListener("click", function(){
    // let points = 0;
    pointsHome += 2;
    // scoreHome.textContent += null;
    scoreHome.textContent = pointsHome;
})

addTwo2.addEventListener("click", function(){
    // let points = 0;
    pointsGuest += 2;
    // scoreHome.textContent += null;
    scoreGuest.textContent = pointsGuest;
})


addThree1.addEventListener("click", function(){
    // let points = 0;
    pointsHome += 3;
    // scoreHome.textContent += null;
    scoreHome.textContent = pointsHome;
})

addThree2.addEventListener("click", function(){
    // let points = 0;
    pointsGuest += 3;
    // scoreHome.textContent += null;
    scoreGuest.textContent = pointsGuest;
})
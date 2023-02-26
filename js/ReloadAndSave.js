var bigFridge1Clicked = false;
var bigFridge2Clicked = false;
var bigFridge3Clicked = false;
var smallFridge1Clicked = false;
var smallFridge2Clicked = false;
var Shelf1Clicked = false;
var Shelf3Clicked = false;
var Shelf4Clicked = false;
var Shelf6Clicked = false;
var fee = 0;


document.getElementById("bigFridge1").addEventListener("click", () => {
    bigFridge1Clicked = true;
    fee += 1;
    notify("success","1.Big Fridge  will reload when saved changes");
    //console.log(GetAllObject());
    ////console.log(bigFridge1Clicked);
    document.getElementById("bigFridge1").style.display = "none";
    document.getElementById("ReloadedBigFridge1").style.display = "inline-block";
})
document.getElementById("ReloadedBigFridge1").addEventListener("click", () => {
bigFridge1Clicked = false;
//console.log(bigFridge1Clicked);
document.getElementById("bigFridge1").style.display = "inline-block";
document.getElementById("ReloadedBigFridge1").style.display = "none";
})


document.getElementById("bigFridge2").addEventListener("click", () => {
bigFridge2Clicked = true;
notify("success","2.Big Fridge  will reload when saved changes");
//console.log(bigFridge2Clicked);
document.getElementById("bigFridge2").style.display = "none";
document.getElementById("ReloadedBigFridge2").style.display = "inline-block";
})
document.getElementById("ReloadedBigFridge2").addEventListener("click", () => {
bigFridge2Clicked = false;  
//console.log(bigFridge2Clicked);
document.getElementById("bigFridge2").style.display = "inline-block";
document.getElementById("ReloadedBigFridge2").style.display = "none";
})


document.getElementById("bigFridge3").addEventListener("click", () => {
bigFridge3Clicked = true;
notify("success","3.Big Fridge  will reload when saved changes");
//console.log(bigFridge3Clicked);
document.getElementById("bigFridge3").style.display = "none";
document.getElementById("ReloadedBigFridge3").style.display = "inline-block";

})
document.getElementById("ReloadedBigFridge3").addEventListener("click", () => {
bigFridge3Clicked = false;
//console.log(bigFridge3Clicked);
document.getElementById("bigFridge3").style.display = "inline-block";
document.getElementById("ReloadedBigFridge3").style.display = "none";
})

document.getElementById("smallFridge1").addEventListener("click", () => {
smallFridge1Clicked = true;
notify("success","1.Small Fridge will reload when saved changes");
//console.log(smallFridge1Clicked);
document.getElementById("smallFridge1").style.display = "none";
document.getElementById("ReloadedSmallFridge1").style.display = "inline-block";
})
document.getElementById("ReloadedSmallFridge1").addEventListener("click", () => {
smallFridge1Clicked = false;
//console.log(smallFridge1Clicked);
document.getElementById("smallFridge1").style.display = "inline-block";
document.getElementById("ReloadedSmallFridge1").style.display = "none";
})


document.getElementById("smallFridge2").addEventListener("click", () => {
smallFridge2Clicked = true;
notify("success","2.Small Fridge will reload when saved changes");
//console.log(smallFridge2Clicked);
document.getElementById("smallFridge2").style.display = "none";
document.getElementById("ReloadedSmallFridge2").style.display = "inline-block";
})
document.getElementById("ReloadedSmallFridge2").addEventListener("click", () => {
smallFridge2Clicked = false;
//console.log(smallFridge1Clicked);
document.getElementById("smallFridge2").style.display = "inline-block";
document.getElementById("ReloadedSmallFridge2").style.display = "none";
})



document.getElementById("Shelf1").addEventListener("click", () => {
Shelf1Clicked = true;
notify("success","1.Shelf will reload when saved changes");
//console.log(Shelf1Clicked);
document.getElementById("Shelf1").style.display = "none";
document.getElementById("ReloadedShelf1").style.display = "inline-block";
})
document.getElementById("ReloadedShelf1").addEventListener("click", () => {
Shelf1Clicked = false;
//console.log(Shelf1Clicked);
document.getElementById("Shelf1").style.display = "inline-block";
document.getElementById("ReloadedShelf1").style.display = "none";
})

document.getElementById("Shelf3").addEventListener("click", () => {
Shelf3Clicked = true;
notify("success","2.Shelf will reload when saved changes");
//console.log(Shelf3Clicked);
document.getElementById("Shelf3").style.display = "none";
document.getElementById("ReloadedShelf3").style.display = "inline-block";
})
document.getElementById("ReloadedShelf3").addEventListener("click", () => {
Shelf3Clicked = false;
//console.log(Shelf3Clicked);
document.getElementById("Shelf3").style.display = "inline-block";
document.getElementById("ReloadedShelf3").style.display = "none";
})

document.getElementById("Shelf4").addEventListener("click", () => {
Shelf4Clicked = true;
notify("success","3.Shelf will reload when saved changes");
//console.log(Shelf4Clicked);
document.getElementById("Shelf4").style.display = "none";
document.getElementById("ReloadedShelf4").style.display = "inline-block";
})
document.getElementById("ReloadedShelf4").addEventListener("click", () => {
Shelf4Clicked = false;
//console.log(Shelf4Clicked);
document.getElementById("Shelf4").style.display = "inline-block";
document.getElementById("ReloadedShelf4").style.display = "none";
})

document.getElementById("Shelf6").addEventListener("click", () => {
Shelf6Clicked = true;
notify("success","4.Shelf will reload when saved changes");
//console.log(Shelf6Clicked);
document.getElementById("Shelf6").style.display = "none";
document.getElementById("ReloadedShelf6").style.display = "inline-block";
})
document.getElementById("ReloadedShelf6").addEventListener("click", () => {
Shelf6Clicked = false;
//console.log(Shelf6Clicked);
document.getElementById("Shelf6").style.display = "inline-block";
document.getElementById("ReloadedShelf6").style.display = "none";
})



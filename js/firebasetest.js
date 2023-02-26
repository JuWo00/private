import { getFirestore, setDoc, addDoc, doc, collection, updateDoc, getDoc } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";


const firebaseConfig = {
    apiKey: "AIzaSyBEH72b6oFld8UPbTDzqVZTIZl6079Acvc",
    authDomain: "supermarketgame07.firebaseapp.com",
    databaseURL: "https://supermarketgame07-default-rtdb.firebaseio.com",
    projectId: "supermarketgame07",
    storageBucket: "supermarketgame07.appspot.com",
    messagingSenderId: "355838356774",
    appId: "1:355838356774:web:faafa0d877eafe90b4a5e7"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const washingtonRef = doc(db, "PaidPlayers", "0x6C1E7Ea5D5Eb1b8c7ca77dADC2a5FeaA451cf0Fc");

GetObjects();
/*
await setDoc(doc(db, "cities", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  });


  await updateDoc(washingtonRef, {
    BigFridge1:0,
    BigFridge2:0,
    BigFridge3:0,
    SmallFridge1:0,
    SmallFridge2:0,
    Shelf1:0,
    Shelf2:0,
    Shelf3:0,
    Shelf4:0

  });
  */


var SmallFridge1 = false;
var SmallFridge2 = false;;
var BigFridge1 = false;;
var BigFridge2 = false;;
var BigFridge3 = false;;
var Shelf1 = false;;
var Shelf2 = false;;
var Shelf3 = false;;
var Shelf4 = false;;

async function GetObjects(){
 const docSnap = await getDoc(washingtonRef);
  console.log(docSnap.data().Shelf1);
  
  SmallFridge1 = docSnap.data().SmallFridge1;
  SmallFridge2 = docSnap.data().SmallFridge2;
  BigFridge1 = docSnap.data().BigFridge1;
  BigFridge2 = docSnap.data().BigFridge2;
  BigFridge3 = docSnap.data().BigFridge3;
  Shelf1 = docSnap.data().Shelf1;
  Shelf2 = docSnap.data().Shelf2;
  Shelf3 = docSnap.data().Shelf3;
  Shelf4 = docSnap.data().Shelf4;


  
if(BigFridge1 == true){
    document.getElementById("bigFridge1").style.display = "inline-block";
    bigFridgeCounter ++;
}

if(BigFridge2 == true){
    document.getElementById("bigFridge2").style.display = "inline-block";
    bigFridgeCounter ++;
}

if(BigFridge3 == true){
    document.getElementById("bigFridge3").style.display = "inline-block";
    bigFridgeCounter ++;
}

if(SmallFridge1 == true){
    document.getElementById("smallFridge1").style.display = "inline-block";
    smallFridgeCounter ++;
}

if(SmallFridge2 == true){
    document.getElementById("smallFridge2").style.display = "inline-block";
    smallFridgeCounter ++;
}

if(Shelf1 == true){
    document.getElementById("Shelf1").style.display = "inline-block";
    shelfCounter ++;
}

if(Shelf2 == true){
    document.getElementById("Shelf4").style.display = "inline-block";
    shelfCounter ++;
}


if(Shelf3 == true){
    document.getElementById("Shelf3").style.display = "inline-block";
    shelfCounter ++;
}


if(Shelf4 == true){
    document.getElementById("Shelf6").style.display = "inline-block";
    shelfCounter ++;
}

if(smallFridgeCounter >= 2){
    document.getElementById("buySmallFridge").disabled = true;
}

if(bigFridgeCounter >= 3){
document.getElementById("buyBigFridge").disabled = true;
}

if(shelfCounter >= 4){
    document.getElementById("buyShelf").disabled = true;
} 
}


/// Reload Object ////

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
        fee += 3;
        notify("success","1.Big Fridge  will reload when saved changes");
        //console.log(GetAllObject());
		////console.log(bigFridge1Clicked);
		document.getElementById("bigFridge1").style.display = "none";
		document.getElementById("ReloadedBigFridge1").style.display = "inline-block";
})
document.getElementById("ReloadedBigFridge1").addEventListener("click", () => {
	bigFridge1Clicked = false;
    fee -= 3;
    notify("info","1. Big Fridge will dont reload");
	//console.log(bigFridge1Clicked);
	document.getElementById("bigFridge1").style.display = "inline-block";
	document.getElementById("ReloadedBigFridge1").style.display = "none";
})


document.getElementById("bigFridge2").addEventListener("click", () => {
	bigFridge2Clicked = true;
    fee += 3;
    notify("success","2.Big Fridge  will reload when saved changes");
	//console.log(bigFridge2Clicked);
	document.getElementById("bigFridge2").style.display = "none";
	document.getElementById("ReloadedBigFridge2").style.display = "inline-block";
})
document.getElementById("ReloadedBigFridge2").addEventListener("click", () => {
    bigFridge2Clicked = false;
    fee -= 3;
    notify("info","2. Big Fridge will dont reload");
    //console.log(bigFridge2Clicked);
    document.getElementById("bigFridge2").style.display = "inline-block";
    document.getElementById("ReloadedBigFridge2").style.display = "none";
})


document.getElementById("bigFridge3").addEventListener("click", () => {
	bigFridge3Clicked = true;
    fee += 3;
    notify("success","3.Big Fridge  will reload when saved changes");
	//console.log(bigFridge3Clicked);
	document.getElementById("bigFridge3").style.display = "none";
	document.getElementById("ReloadedBigFridge3").style.display = "inline-block";
    
})
document.getElementById("ReloadedBigFridge3").addEventListener("click", () => {
    bigFridge3Clicked = false;
    fee -= 3;
    notify("info","3. Big Fridge will dont reload");
    //console.log(bigFridge3Clicked);
    document.getElementById("bigFridge3").style.display = "inline-block";
    document.getElementById("ReloadedBigFridge3").style.display = "none";
})

document.getElementById("smallFridge1").addEventListener("click", () => {
    smallFridge1Clicked = true;
    fee += 1;
    notify("success","1.Small Fridge will reload when saved changes");
    //console.log(smallFridge1Clicked);
    document.getElementById("smallFridge1").style.display = "none";
    document.getElementById("ReloadedSmallFridge1").style.display = "inline-block";
})
document.getElementById("ReloadedSmallFridge1").addEventListener("click", () => {
    smallFridge1Clicked = false;
    fee -= 1;
    notify("info","1. Small Fridge will dont reload");
    //console.log(smallFridge1Clicked);
    document.getElementById("smallFridge1").style.display = "inline-block";
    document.getElementById("ReloadedSmallFridge1").style.display = "none";
})


document.getElementById("smallFridge2").addEventListener("click", () => {
    smallFridge2Clicked = true;
    fee += 1;
    notify("success","2.Small Fridge will reload when saved changes");
    //console.log(smallFridge2Clicked);
    document.getElementById("smallFridge2").style.display = "none";
    document.getElementById("ReloadedSmallFridge2").style.display = "inline-block";
})
document.getElementById("ReloadedSmallFridge2").addEventListener("click", () => {
    smallFridge2Clicked = false;
    fee -= 1;
    notify("info","2. Small Fridge will dont reload");
    //console.log(smallFridge1Clicked);
    document.getElementById("smallFridge2").style.display = "inline-block";
    document.getElementById("ReloadedSmallFridge2").style.display = "none";
})



document.getElementById("Shelf1").addEventListener("click", () => {
    Shelf1Clicked = true;
    fee += 5;
    notify("success","1.Shelf will reload when saved changes");
    //console.log(Shelf1Clicked);
    document.getElementById("Shelf1").style.display = "none";
    document.getElementById("ReloadedShelf1").style.display = "inline-block";
})
document.getElementById("ReloadedShelf1").addEventListener("click", () => {
    Shelf1Clicked = false;
    fee -= 5;
    notify("info","1. Shelf will dont reload");
    //console.log(Shelf1Clicked);
    document.getElementById("Shelf1").style.display = "inline-block";
    document.getElementById("ReloadedShelf1").style.display = "none";
})

document.getElementById("Shelf3").addEventListener("click", () => {
    Shelf3Clicked = true;
    fee += 5;
    notify("success","2.Shelf will reload when saved changes");
    //console.log(Shelf3Clicked);
    document.getElementById("Shelf3").style.display = "none";
    document.getElementById("ReloadedShelf3").style.display = "inline-block";
})
document.getElementById("ReloadedShelf3").addEventListener("click", () => {
    Shelf3Clicked = false;
    fee -= 5;
    notify("info","2. Shelf will dont reload");
    //console.log(Shelf3Clicked);
    document.getElementById("Shelf3").style.display = "inline-block";
    document.getElementById("ReloadedShelf3").style.display = "none";
})

document.getElementById("Shelf4").addEventListener("click", () => {
    Shelf4Clicked = true;
    fee += 5;
    notify("success","3.Shelf will reload when saved changes");
    //console.log(Shelf4Clicked);
    document.getElementById("Shelf4").style.display = "none";
    document.getElementById("ReloadedShelf4").style.display = "inline-block";
})
document.getElementById("ReloadedShelf4").addEventListener("click", () => {
    Shelf4Clicked = false;
    fee -= 5;
    notify("info","3. Shelf will dont reload");
    //console.log(Shelf4Clicked);
    document.getElementById("Shelf4").style.display = "inline-block";
    document.getElementById("ReloadedShelf4").style.display = "none";
})

document.getElementById("Shelf6").addEventListener("click", () => {
    Shelf6Clicked = true;
    fee += 5;
    notify("success","4.Shelf will reload when saved changes");
    //console.log(Shelf6Clicked);
    document.getElementById("Shelf6").style.display = "none";
    document.getElementById("ReloadedShelf6").style.display = "inline-block";
})
document.getElementById("ReloadedShelf6").addEventListener("click", () => {
    Shelf6Clicked = false;
    fee -= 5;
    notify("info","4. Shelf will dont reload");
    //console.log(Shelf6Clicked);
    document.getElementById("Shelf6").style.display = "inline-block";
    document.getElementById("ReloadedShelf6").style.display = "none";
})



var smallFridge1Saved = false;
var smallFridge2Saved = false;

var smallFridgeCounter = 0;

var bigFridge1Saved = false;
var bigFridge2Saved = false;
var bigFridge3Saved = false;

var bigFridgeCounter = 0;

var shelf1Saved = false;
var shelf2Saved = false;
var shelf3Saved = false;
var shelf4Saved = false;

var shelfCounter = 0;

function buySmallFridge(){
   smallFridgeCounter ++;
   if(smallFridgeCounter >= 2){
        document.getElementById("buySmallFridge").disabled = true;
   }
   if(smallFridgeCounter == 1){
    document.getElementById("smallFridge1").style.display = "inline-block";
    SmallFridge1 = true;
   }
   if(smallFridgeCounter == 2){
    document.getElementById("smallFridge2").style.display = "inline-block";
    SmallFridge2 = true;
   }
}
document.getElementById("buySmallFridge").onclick = buySmallFridge;




function buyBigFridge(){
    bigFridgeCounter ++;
    console.log("bigFridgeCounter:" + bigFridgeCounter);
    if(bigFridgeCounter >= 3){
        document.getElementById("buyBigFridge").disabled = true;
    }
    if(bigFridgeCounter == 1){
        document.getElementById("bigFridge1").style.display = "inline-block";
        BigFridge1 = true;
    }
    if(bigFridgeCounter == 2){
        document.getElementById("bigFridge2").style.display = "inline-block";
        BigFridge2 = true;
    }
    if(bigFridgeCounter == 3){
        document.getElementById("bigFridge3").style.display = "inline-block";
        BigFridge3 = true;
    }
}
document.getElementById("buyBigFridge").onclick = buyBigFridge;




function buyShelf(){
    shelfCounter ++;
    console.log("shelfCounter:" + shelfCounter);
    if(shelfCounter >= 4){
        document.getElementById("buyShelf").disabled = true;
    }
    if(shelfCounter == 1){
        document.getElementById("Shelf1").style.display = "inline-block";
        Shelf1 = true;
    }
    if(shelfCounter == 2){
        document.getElementById("Shelf3").style.display = "inline-block";
        Shelf2 = true;
    }
    if(shelfCounter == 3){
        document.getElementById("Shelf4").style.display = "inline-block";
        Shelf3 = true;
    }
    if(shelfCounter == 4){
        document.getElementById("Shelf6").style.display = "inline-block";
        Shelf4 = true;
    }
}
document.getElementById("buyShelf").onclick = buyShelf;


async function Save(){
  await updateDoc(washingtonRef, {
    BigFridge1:BigFridge1,
    BigFridge2:BigFridge2,
    BigFridge3:BigFridge3,
    SmallFridge1:SmallFridge1,
    SmallFridge2:SmallFridge2,
    Shelf1:Shelf1,
    Shelf2:Shelf2,
    Shelf3:Shelf3,
    Shelf4:Shelf4
  });
  alert("BAŞARIYLA GÜNCELLENDİ")
}

document.getElementById("saverbutton").onclick = Save;
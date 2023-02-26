

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
   console.log("smallFridgeCounter:" + smallFridgeCounter)
   if(smallFridgeCounter >= 2){
        document.getElementById("buySmallFridge").disabled = true;
   }
   if(smallFridgeCounter == 1){
    document.getElementById("smallFridge1").style.display = "inline-block";
    smallFridge1Saved = true;
   }
   if(smallFridgeCounter == 2){
    document.getElementById("smallFridge2").style.display = "inline-block";
    smallFridge2Saved = true;
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
        bigFridge1Saved = true;
    }
    if(bigFridgeCounter == 2){
        document.getElementById("bigFridge2").style.display = "inline-block";
        bigFridge2Saved = true;
    }
    if(bigFridgeCounter == 3){
        document.getElementById("bigFridge3").style.display = "inline-block";
        bigFridge3Saved = true;
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
        shelf1Saved = true;
    }
    if(shelfCounter == 2){
        document.getElementById("Shelf3").style.display = "inline-block";
        shelf2Saved = true;
    }
    if(shelfCounter == 3){
        document.getElementById("Shelf4").style.display = "inline-block";
        shelf3Saved = true;
    }
    if(shelfCounter == 4){
        document.getElementById("Shelf6").style.display = "inline-block";
        shelf4Saved = true;
    }
}
document.getElementById("buyShelf").onclick = buyShelf;


async function SaveObjectAndLevel(){
	//console.log("kaydediliyor...");
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const GameContract = new ethers.Contract(contractAdress,contractAbi,signer);
	await GameContract.SaveObjectAndLevel(bigFridge1Saved, bigFridge2Saved, bigFridge3Saved, smallFridge1Saved, smallFridge2Saved, shelf1Saved, shelf2Saved, shelf3Saved, shelf4Saved, false,false);
	//console.log("kaydedildi");
   
}

document.getElementById("saverbutton").onclick = SaveObjectAndLevel;
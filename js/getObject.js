
var ReadBigFridge1;
var ReadBigFridge2;
var ReadBigFridge3;
var ReadSmallFridge1;
var ReadSmallFridge2;
var ReadShelf1;
var ReadShelf2;
var ReadShelf3;
var ReadShelf4;

async function GetAllObject (){
	//console.log("objeler taranıyor");
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

    const GameContract = new ethers.Contract(contractAdress,contractAbi,signer);
   
     ReadBigFridge1 = await GameContract.ReadBigFridge1();
     ReadBigFridge2 = await GameContract.ReadBigFridge2();
     ReadBigFridge3 = await GameContract.ReadBigFridge3();
     ReadSmallFridge1 = await GameContract.ReadSmallFridge1();
     ReadSmallFridge2 = await GameContract.ReadSmallFridge2();
     ReadShelf1 = await GameContract.ReadShelf1();
     ReadShelf2 = await GameContract.ReadShelf2();
     ReadShelf3 = await GameContract.ReadShelf3();
     ReadShelf4 = await GameContract.ReadShelf4();
    

    if(ReadBigFridge1 == true){
        document.getElementById("bigFridge1").style.display = "inline-block";
        bigFridgeCounter ++;
    }

    if(ReadBigFridge2 == true){
        document.getElementById("bigFridge2").style.display = "inline-block";
        bigFridgeCounter ++;
    }

    if(ReadBigFridge3 == true){
        document.getElementById("bigFridge3").style.display = "inline-block";
        bigFridgeCounter ++;
    }

    if(ReadSmallFridge1 == true){
        document.getElementById("smallFridge1").style.display = "inline-block";
        smallFridgeCounter ++;
    }
    
    if(ReadSmallFridge2 == true){
        document.getElementById("smallFridge2").style.display = "inline-block";
        smallFridgeCounter ++;
    }

    if(ReadShelf1 == true){
        document.getElementById("Shelf1").style.display = "inline-block";
        shelfCounter ++;
    }

    if(ReadShelf2 == true){
        document.getElementById("Shelf4").style.display = "inline-block";
        shelfCounter ++;
    }

    
    if(ReadShelf3 == true){
        document.getElementById("Shelf3").style.display = "inline-block";
        shelfCounter ++;
    }

    
    if(ReadShelf4 == true){
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

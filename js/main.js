window.addEventListener('load', function() {
    GetAllObject();
    getMetamaskAddress();
    GetTimers();
    //console.log('sayfa yüklendi')
 
  })



let provider = new ethers.providers.Web3Provider(window.ethereum);



ethereum.on('accountsChanged', function(accounts) {
    //console.log(accounts[0]); // Ethereum adresi
    sign();
    GetAllObject();
  }); 



async function sign(){
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const accounts = await ethereum.enable();
    const address = accounts[0];
    //console.log(address);
}

const contractAdress = "0x1545d48adD455346D81D2E06b0986d579d7D5dAd";
const tokenAddress = "0x5df978542F932860FA78bC77b10c1051E7891832";


var ReadBigFridge1;
var ReadBigFridge2;
var ReadBigFridge3;
var ReadSmallFridge1;
var ReadSmallFridge2;
var ReadShelf1;
var ReadShelf2;
var ReadShelf3;
var ReadShelf4;

async function GetAllObject(){
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

async function Save(){
    const signer = provider.getSigner();

    const GameContract = new ethers.Contract(contractAdress,contractAbi,signer);

    var playerAmount = 2.5;

    const SaveTimers = await GameContract.SaveTimer(bigFridge1Clicked, bigFridge2Clicked, bigFridge3Clicked, smallFridge1Clicked, smallFridge2Clicked, Shelf1Clicked, Shelf3Clicked, Shelf4Clicked, Shelf6Clicked, playerAmount, fee);
    await SaveTimers.wait();

}

document.getElementById("saverbutton").onclick = Save;



	


var NowDate;
var bigFridge1Timer;
var bigFridge2Timer;
var bigFridge3Timer;
var shelf1Timer;
var shelf2Timer;
var shelf3Timer;
var shelf4Timer;
var smallFridge1Timer;
var smallFridge2Timer;
var LeftbigFridge1Timer;
var LeftbigFridge2Timer;
var LeftbigFridge3Timer;
var Leftshelf1Timer;
var Leftshelf2Timer;
var Leftshelf3Timer;
var Leftshelf4Timer;
var LeftsmallFridge1Timer;
var LeftsmallFridge2Timer;


async function GetTimers(){
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

    const GameContract = new ethers.Contract(contractAdress,contractAbi,signer);

     NowDate = await GameContract.NowDate();
     bigFridge1Timer = await GameContract.GetBigFridge1Timer();
     bigFridge2Timer = await GameContract.GetBigFridge2Timer();
     bigFridge3Timer = await GameContract.GetBigFridge3Timer();
     shelf1Timer = await GameContract.GetShelf1Timer();
     shelf2Timer = await GameContract.GetShelf2Timer();
     shelf3Timer = await GameContract.GetShelf3Timer();
     shelf4Timer = await GameContract.GetShelf4Timer();
     smallFridge1Timer = await GameContract.GetSmallFridge1Timer();
     smallFridge2Timer = await GameContract.GetSmallFridge2Timer();

    LeftbigFridge1Timer = bigFridge1Timer - NowDate;
    LeftbigFridge2Timer = bigFridge2Timer - NowDate;
    LeftbigFridge3Timer = bigFridge3Timer - NowDate;
    Leftshelf1Timer = shelf1Timer - NowDate;
    Leftshelf2Timer = shelf2Timer - NowDate;
    Leftshelf3Timer = shelf3Timer - NowDate;
    Leftshelf4Timer = shelf4Timer - NowDate;
    LeftsmallFridge1Timer = smallFridge1Timer - NowDate;
    LeftsmallFridge2Timer = smallFridge2Timer - NowDate; 
   
}

let BigFridge1seconds;
var BigFridge1minutes;

async function BigFridge1Print(){
    
    if(BigFridge1seconds <= 0 && BigFridge1minutes <=0 ){
        clearInterval(BigFridge1Interval);
        document.getElementById("BigFridge1Description").innerHTML = "Sold";
    }

    else{
    BigFridge1minutes = Math.floor(LeftbigFridge1Timer / 60);
    BigFridge1seconds = LeftbigFridge1Timer % 60;
    //console.log(BigFridge1minutes,BigFridge1seconds);
    document.getElementById("BigFridge1Description").innerHTML = `${BigFridge1minutes}:${BigFridge1seconds}`;
    LeftbigFridge1Timer--;}
  
}

let BigFridge1Interval = setInterval(function(){
    BigFridge1Print();
},1000);



let BigFridge2seconds;
var BigFridge2minutes;

async function BigFridge2Print(){
    
    if(BigFridge2seconds <= 0 && BigFridge2minutes <=0 ){
        clearInterval(BigFridge2Interval);
        document.getElementById("BigFridge2Description").innerHTML = "Sold";
    }

    else{
    BigFridge2minutes = Math.floor(LeftbigFridge2Timer / 60);
    BigFridge2seconds = LeftbigFridge2Timer % 60;
    //console.log("2. dolap : " + BigFridge2minutes,BigFridge2seconds);
    document.getElementById("BigFridge2Description").innerHTML = `${BigFridge2minutes}:${BigFridge2seconds}`;
    LeftbigFridge2Timer--;}
  
}

let BigFridge2Interval = setInterval(function(){
    BigFridge2Print();
},1000);



let BigFridge3seconds;
var BigFridge3minutes;

async function BigFridge3Print(){
    
    if(BigFridge3seconds <= 0 && BigFridge3minutes <=0 ){
        clearInterval(BigFridge3Interval);
        document.getElementById("BigFridge3Description").innerHTML = "Sold";
    }

    else{
    BigFridge3minutes = Math.floor(LeftbigFridge3Timer / 60);
    BigFridge3seconds = LeftbigFridge3Timer % 60;
    //console.log("3. dolap : " + BigFridge3minutes,BigFridge3seconds);
    document.getElementById("BigFridge3Description").innerHTML = `${BigFridge3minutes}:${BigFridge3seconds}`;
    LeftbigFridge3Timer--;}
  
}

let BigFridge3Interval = setInterval(function(){
    BigFridge3Print();
},1000);


let SmallFridge1seconds;
var SmallFridge1minutes;

async function SmallFridge1Print(){
    
    if(SmallFridge1seconds <= 0 && SmallFridge1minutes <=0 ){
        clearInterval(SmallFridge1Interval);
        document.getElementById("smallFridge1Description").innerHTML = "Sold";
    }

    else{
    SmallFridge1minutes = Math.floor(LeftsmallFridge1Timer / 60);
    SmallFridge1seconds = LeftsmallFridge1Timer % 60;
    //console.log("1. küçük dolap : " + SmallFridge1minutes,SmallFridge1seconds);
    document.getElementById("smallFridge1Description").innerHTML = `${SmallFridge1minutes}:${SmallFridge1seconds}`;
    LeftsmallFridge1Timer--;}
  
}

let SmallFridge1Interval = setInterval(function(){
    SmallFridge1Print();
},1000);


let SmallFridge2seconds;
var SmallFridge2minutes;

async function SmallFridge2Print(){
    
    if(SmallFridge2seconds <= 0 && SmallFridge2minutes <=0 ){
        clearInterval(SmallFridge2Interval);
        document.getElementById("smallFridge2Description").innerHTML = "Sold";
    }

    else{
    SmallFridge2minutes = Math.floor(LeftsmallFridge2Timer / 60);
    SmallFridge2seconds = LeftsmallFridge2Timer % 60;
    //console.log("2. küçük dolap : " + SmallFridge2minutes,SmallFridge2seconds);
    document.getElementById("smallFridge2Description").innerHTML = `${SmallFridge2minutes}:${SmallFridge2seconds}`;
    LeftsmallFridge2Timer--;}
  
}

let SmallFridge2Interval = setInterval(function(){
    SmallFridge2Print();
},1000);




let Shelf1seconds;
var Shelf1minutes;

async function Shelf1Print(){
    
    if(Shelf1seconds <= 0 && Shelf1minutes <=0 ){
        clearInterval(Shelf1Interval);
        document.getElementById("Shelf1Description").innerHTML = "Sold";
    }

    else{
    Shelf1minutes = Math.floor(Leftshelf1Timer / 60);
    Shelf1seconds = Leftshelf1Timer % 60;
    //console.log("shelf 1 : " + Shelf1minutes,Shelf1seconds);
    document.getElementById("Shelf1Description").innerHTML = `${Shelf1minutes}:${Shelf1seconds}`;
    Leftshelf1Timer--;}
  
}

let Shelf1Interval = setInterval(function(){
    Shelf1Print();
},1000);


let Shelf2seconds;
var Shelf2minutes;

async function Shelf2Print(){
    
    if(Shelf2seconds <= 0 && Shelf2minutes <=0 ){
        clearInterval(Shelf2Interval);
        document.getElementById("Shelf3Description").innerHTML = "Sold";
    }

    else{
    Shelf2minutes = Math.floor(Leftshelf2Timer / 60);
    Shelf2seconds = Leftshelf2Timer % 60;
    //console.log("shelf 2 : " + Shelf2minutes,Shelf2seconds);
    document.getElementById("Shelf3Description").innerHTML = `${Shelf2minutes}:${Shelf2seconds}`;
    Leftshelf2Timer--;}
  
}

let Shelf2Interval = setInterval(function(){
    Shelf2Print();
},1000);



let Shelf3seconds;
var Shelf3minutes;

async function Shelf3Print(){
    
    if(Shelf3seconds <= 0 && Shelf3minutes <=0 ){
        clearInterval(Shelf3Interval);
        document.getElementById("Shelf4Description").innerHTML = "Sold";
    }

    else{
    Shelf3minutes = Math.floor(Leftshelf3Timer / 60);
    Shelf3seconds = Leftshelf3Timer % 60;
    //console.log("shelf 3 : " + Shelf3minutes,Shelf3seconds);
    document.getElementById("Shelf4Description").innerHTML = `${Shelf3minutes}:${Shelf3seconds}`;
    Leftshelf3Timer--;}
  
}

let Shelf3Interval = setInterval(function(){
    Shelf3Print();
},1000);



let Shelf4seconds;
var Shelf4minutes;

async function Shelf4Print(){
    
    if(Shelf4seconds <= 0 && Shelf4minutes <=0 ){
        clearInterval(Shelf4Interval);
        document.getElementById("Shelf6Description").innerHTML = "Sold";
    }

    else{
    Shelf4minutes = Math.floor(Leftshelf4Timer / 60);
    Shelf4seconds = Leftshelf4Timer % 60;
    //console.log("shelf 4 : " + Shelf4minutes,Shelf4seconds);
    document.getElementById("Shelf6Description").innerHTML = `${Shelf4minutes}:${Shelf4seconds}`;
    Leftshelf4Timer--;}
  
}

let Shelf4Interval = setInterval(function(){
    Shelf4Print();
},1000);



var address;
async function getMetamaskAddress(){
    const signer = provider.getSigner();
    address = await signer.getAddress();
    console.log(address);
}


var tokenbalance;
async function getBalanceFromContract(){
    signer = provider.getSigner();
    const tokenContract = new ethers.Contract(tokenAddress,tokenAbi,signer);
    var balanceContract = await tokenContract.getBalance();
     tokenbalance = ethers.BigNumber.from(balanceContract).toString() / Math.pow(10, 18);
    console.log(tokenbalance);
    document.getElementById("tokenprice").innerHTML = `Balance: ${tokenbalance} $SMGT`;
    document.getElementById("balance").innerHTML = `${tokenbalance}`
}




async function Deposit(){
    const signer = provider.getSigner();

    const tokenContract = new ethers.Contract(tokenAddress,tokenAbi,signer);
    
    var value = document.getElementById("buytokenamount").value;

    var deneme = 1
    var To = "0x6C1E7Ea5D5Eb1b8c7ca77dADC2a5FeaA451cf0Fc";
    const transaction = await tokenContract.mint(To, deneme * Math.pow(10,18));
    await transaction.wait();
}



async function Withdraw(){
    const signer = provider.getSigner();

    const tokenContract = new ethers.Contract(tokenAddress, tokenAbi, signer);
    
    var value = document.getElementById("buytokenamount").value;
    var tax = 25;
    
    const transaction = await tokenContract.Withdraw(value, tax);
    await transaction.wait();
    await getBalanceFromContract();

}





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

//document.getElementById("saverbutton").onclick = SaveObjectAndLevel;
sign();

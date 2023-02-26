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

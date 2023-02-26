const abi = require("./abi.json")
let provider = new ethers.providers.Web3Provider(window.ethereum)
let signer


async function SingIn(){
    await provider.send("eth_requestAccounts", []);

    signer = await provider.getSigner();
    console.log("Account address:", await signer.getAddress());
}

const contractAddress = "0x9cBeb007fBBd443Ea8012CA67257a4b694e14127";

const contractAbi = [
    "function readdata1() public view returns (bool)",
    "function readdata2() public view returns (bool)",
    "function changedata1() public",
    "function changedata2() public"
];


async function ReadData(){
    const GameContract = new ethers.Contract(contractAddress,contractAbi,provider);
    
    var Data1 = await GameContract.readdata1()
    console.log(Data1)
}

async function WriteData(){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const numberContract = new ethers.Contract(contractAddress,abi,provider.getSigner())
    
    await numberContract.changedata1()
}



document.getElementById("readcontract").onclick = ReadData;
document.getElementById("sign").onclick = SingIn;
document.getElementById("writecontract").onclick = WriteData;

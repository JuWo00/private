// Open the MENU
document.getElementById('cashier').addEventListener("click", () => {
    document.getElementById("cashierpage").style.display = "inline-block";
    document.getElementById("Menu").innerHTML = "Menu";
    document.getElementById("Menu").style.left = "47.5%";
    document.getElementById("Menu").style.width = "10%";
    document.getElementById("description").style.display = "inline-block";
    document.getElementById("buytoken").style.display = "inline-block";
    document.getElementById("buytoken").style.top = "56%";
    document.getElementById("selltoken").style.display = "inline-block";
    document.getElementById("upgrade").style.display = "inline-block";
    document.getElementById("Menu").style.left = "47.5%";
    document.getElementById("upgrade").style.left = "35.25%";
    document.getElementById("upgradedescription").style.display = "none";
    document.getElementById("upgradecost").style.display = "none";
    document.getElementById("afterupgrade").style.display = "none";
    document.getElementById("buynote").style.display = "none";
    document.getElementById("buytokenamount").style.display = "none";
    document.getElementById("description").innerHTML = "What do you want to do ? Choose one";
    document.getElementById("description").style.width = "35%";
    document.getElementById("description").style.fontSize = "16px";
    document.getElementById("selltoken").style.left = "57.25%";
    document.getElementById("selltoken").style.top = "56%";
    document.getElementById("taxsystem5").style.display = "none";
    document.getElementById("taxsystem10").style.display = "none";
    document.getElementById("taxsystem15").style.display = "none";
    document.getElementById("description").style.left = "35%";
    document.getElementById("buyEquipment").style.display = "inline-block";
    document.getElementById("shoppage").style.display = "none";
    document.getElementById("upgrade").style.top = "56%";
    document.getElementById("tokenprice").style.display = "none";
    
    
}) 

// Close the MENU
document.getElementById("closecashierpage").addEventListener("click", () => {
    document.getElementById("cashierpage").style.display = "none";
    document.getElementById("shoppage").style.display = "none";
   
})

// Change  from menu to upgrade
function FromMenuToUpgrade(){
document.getElementById("Menu").innerHTML = "Upgrade";
document.getElementById("description").style.display = "inline-block";
document.getElementById("description").innerHTML = "You can upgrade Reload Time"
document.getElementById("buytoken").style.display = "none";
document.getElementById("selltoken").style.display = "none";    
document.getElementById("Menu").style.left = "44%";
document.getElementById("upgrade").style.left = "46.25%";
document.getElementById("upgrade").style.top = "58%";
document.getElementById("upgradedescription").style.display = "inline-block";
document.getElementById("upgradecost").style.display = "inline-block";
document.getElementById("afterupgrade").style.display = "inline-block";
document.getElementById("buyEquipment").style.display = "none";
}






function FromMenuToBuyToken(){

    if (document.getElementById("Menu").innerHTML == "Buy Token"){
        Deposit();
    }
   
    document.getElementById("Menu").innerHTML = "Buy Token";
    document.getElementById("Menu").style.width = "22%";
    document.getElementById("Menu").style.left = "42%";
    document.getElementById("Menu").style.fontSize = "28px"
    document.getElementById("description").innerHTML = "You can make deposit with $USDT";
    document.getElementById("description").style.fontSize = "13.5px";
    document.getElementById("description").style.width = "35%";
    document.getElementById("description").style.left = "35%";
    document.getElementById("upgrade").style.display = "none";
    document.getElementById("selltoken").style.display = "none";
    document.getElementById("buytoken").style.top = "65%";
    document.getElementById("buytokenamount").style.display = "inline-block";
    document.getElementById("buynote").style.display = "inline-block";
    document.getElementById("buyEquipment").style.display = "none";
    document.getElementById("tokenprice").style.display = "inline-block";
    

}



//Change  from menu to Sell Token
function FromMenuToSellToken(){

    if (document.getElementById("Menu").innerHTML == "Withdraw"){
        Withdraw();
    }
    document.getElementById("upgrade").style.display = "none";
    document.getElementById("buytoken").style.display = "none";
    document.getElementById("selltoken").style.left = "46.25%";
    document.getElementById("Menu").innerHTML = "Withdraw";
    document.getElementById("Menu").style.left = "43%";
    document.getElementById("Menu").style.fontSize = "28px"
    document.getElementById("description").style.display = "none";
    document.getElementById("taxsystem5").style.display = "inline-block";
    document.getElementById("taxsystem10").style.display = "inline-block";
    document.getElementById("taxsystem15").style.display = "inline-block";
    document.getElementById("buynote").style.display = "inline-block";
    document.getElementById("buytokenamount").style.display = "inline-block";
    document.getElementById("selltoken").style.top = "65%";
    document.getElementById("buyEquipment").style.display = "none";
    document.getElementById("buynote").innerHTML = "please dont use decimal numbers";
    
}

function FromMenuToBuyEquipment(){
    document.getElementById("cashierpage").style.height = "45%";
    document.getElementById("shoppage").style.display = "inline-block";
    document.getElementById("Menu").innerHTML = "Equipments";
    document.getElementById("Menu").style.left = "41%";
    document.getElementById("description").innerHTML = "You can buy new equipments for your supermarket";
    document.getElementById("selltoken").style.display = "none";
    document.getElementById("buyEquipment").style.display = "none";
    document.getElementById("selltoken").style.display = "none";
    document.getElementById("upgrade").style.display = "none";
    document.getElementById("buytoken").style.display = "none";
}

document.getElementById("upgrade").onclick = FromMenuToUpgrade;
document.getElementById("buytoken").onclick = FromMenuToBuyToken;
document.getElementById("selltoken").onclick = FromMenuToSellToken;
document.getElementById("buyEquipment").onclick =  FromMenuToBuyEquipment;
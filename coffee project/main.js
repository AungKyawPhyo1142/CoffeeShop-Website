window.onscroll = function( ) {
    myFunction()
};

var navBar = document.getElementById('navBar');

var sticky = navBar.offsetTop;

function myFunction( ){
    if(window.pageYOffset >= sticky){
        navBar.classList.add('sticky')
    }
    else{
        navBar.classList.remove("sticky");
    }
}

let black,latte,mocha,expresso,iced;
let productName;
let productPrice;
let quantity;
let totalCost;


document.getElementById('LATTE').onclick = function( ) {
    document.getElementById('product-name').value = "LATTE";
    document.getElementById('product-price').value = "2000";
}

document.getElementById('BLACK').onclick = function( ) {
    document.getElementById('product-name').value = "BLACK";
    document.getElementById('product-price').value = "2800";
}

document.getElementById('EXPRESSO').onclick = function( ) {
    document.getElementById('product-name').value = "EXPRESSO";
    document.getElementById('product-price').value = "2500";
}

document.getElementById('MOCHA').onclick = function( ) {
    document.getElementById('product-name').value = "MOCHA";
    document.getElementById('product-price').value = "2800";
}

document.getElementById('ICED').onclick = function( ) {
    document.getElementById('product-name').value = "ICED COFFEE";
    document.getElementById('product-price').value = "2000";
}



/* Add Cart Button*/
var Str="";
var pName=[];
var pPrice=[];
var pQty=[];
var pCost=[];

var list=[][4];

var id=0;

document.getElementById('addToCart').onclick = function( ) {

    productName = String(document.getElementById('product-name').value);
    productPrice = Number(document.getElementById('product-price').value);
    quantity = Number(document.getElementById('product-qty').value);

    if(productName.length>4){
     productName=productName.slice(0,5);
    }

    totalCost = productPrice * quantity;

    pName.push(productName);
    pPrice.push(productPrice);
    pQty.push(quantity);
    pCost.push(totalCost);


    Str += id+"   "+productName+"\t  "+productPrice+"  \t\t"+quantity+"\t\t"+totalCost+"\n";

    document.getElementById('textarea').value = Str;
    document.getElementById('product-qty').value="";

    id++;

    console.log(pCost);
}

document.getElementById('removeItem').onclick = function( ){
    console.log("Before Splice:\n"+pName);
    let id = window.prompt('Enter an ID of an element you want to remove');

    pName.splice(id,1);
    pPrice.splice(id,1);
    pQty.splice(id,1);
    pCost.splice(id,1);

    Str="";
    id=0;
   document.getElementById('textarea').value = "";
   
   for(var i=0;i<pName.length;i++){
       Str+= id+"   "+pName[i]+"\t   "+pPrice[i]+"  \t\t"+pQty[i]+"\t\t"+pCost[i]+"\n";
    id++;
    }
    
    document.getElementById('textarea').value = Str;

}  

document.getElementById('payment').onclick = function( ) {
    var cost=0;

    for(var i=0;i<pCost.length;i++){
        var temp = Number(pCost[i]);
        console.log(typeof(temp));
        console.log(temp);
        cost = cost+temp;
    }
    console.log(cost);

    
    var payment = window.prompt('Your Total Cost is '+cost+"\nEnter Your Payment:");

    var change = payment-cost;
    alert('Change: '+change);
    
    document.getElementById('textarea').value="";

}
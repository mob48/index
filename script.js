var total=document.querySelector('#total')
var plus=document.querySelectorAll('#plus')
var moins=document.querySelectorAll('#moins')
var quantity=document.querySelectorAll('#quantity')
var heart=document.querySelectorAll('#heart')
var trash=document.querySelectorAll('#trash')
var price=document.querySelectorAll('#price')
var cards=document.querySelectorAll('.card')
var switchs=document.querySelector('.input__check')
var hh=document.querySelector("h1")
var he=document.querySelector("h2")


function totalprice(){
    var s=0
    for (let i = 0; i< quantity.length; i++) {
         s+=quantity[i].innerHTML *price[i].innerHTML
       
    } 
    return total.innerHTML=s
}

for (let i =0 ; i < plus.length; i++) {
    plus[i].addEventListener("click",function add(){
        quantity[i].innerHTML++
        totalprice()
    })

}

for (let i =0 ; i < moins.length; i++) {
    moins[i].addEventListener("click",function soust(){
        if (quantity[i].innerHTML>0) {
            quantity[i].innerHTML--    }
        else{
            quantity[i].innerHTML=0
           
        }  
        totalprice()  
    })

}

for (let i=0 ; i<heart.length; i++){
    heart[i].addEventListener("click",function hearts() {
      
        if(heart[i].style.color=="red"){
            heart[i].style.color="black"
        }
        else{
            heart[i].style.color="red"
        }
})
}

for (let i=0 ; i< trash.length; i++){
    trash[i].addEventListener("click",function trashs() {
    cards[i].remove()
})
}

var body=document.querySelector("body")
switchs.addEventListener('click',function(){
    if (body.style.backgroundColor==""){
        body.style.backgroundColor="black" 
        hh.style.color="white" 
        he.style.color="white"

    }
    else {
        body.style.backgroundColor=""}
})

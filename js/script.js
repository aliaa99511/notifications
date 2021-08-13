

/*************************************** */
window.onload=function(){

    setTimeout(()=>{ 
        var parent=document.getElementById("parent");
        parent.classList.remove("hidden");
        
     }, 2000);

}
/************************************** */


var cllose=document.getElementById("close");

cllose.addEventListener("click",function(){
    var parent=document.getElementById("parent");

    parent.classList.add("hidden");

})
/************************************************** */
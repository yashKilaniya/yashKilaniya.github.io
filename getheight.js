function getHeight(){
    console.log("getHieght working");
    var pages=document.querySelectorAll('.page');
    var screenSize=window.innerHeight;

    for(var i=0;i<=7;i++){
        pages[i].style.height=screenSize+"px";
        console.log(i+"<br>");
    }

    // page.style.height=screenSize+"px";
    console.log("page size is set to :" +screenSize +"px")
}
function getHeight(){
    console.log("getHieght working");
    var pages =document.querySelectorAll('.page');  //for every div
    var container = document.querySelectorAll('.container');  // for every container class every div
    var screenSize=window.innerHeight;

    for(var i=0;i<=7;i++){
        pages[i].style.height=screenSize+"px";
        container[i].style.height=screenSize+"px";
    }

    // page.style.height=screenSize+"px";
    console.log("page size is set to :" +screenSize +"px")
}
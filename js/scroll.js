

function movePage(e){

    var page_size=window.innerHeight;
    //console.log("height is :"+ page_size);

    if(e.target.id=="gen"){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    else if (e.target.id=="aca"){
        window.scrollTo({
            top: page_size*1,
            behavior: "smooth"
        });
    }
    else if (e.target.id=="ski"){
        window.scrollTo({
            top: page_size*2,
            behavior: "smooth"
        });
    }
    else if (e.target.id=="too"){
        window.scrollTo({
            top: page_size*3,
            behavior: "smooth"
        });
    }
    else if (e.target.id=="pro"){
        window.scrollTo({
            top: page_size*4,
            behavior: "smooth"
        });
    }else if (e.target.id=="coc"){
        window.scrollTo({
            top: page_size*5,
            behavior: "smooth"
        });
    }
    else if (e.target.id=="hob"){
        window.scrollTo({
            top: page_size*6,
            behavior: "smooth"
        });
    }
    else if (e.target.id=="lin"){
        window.scrollTo({
            top: page_size*7,
            behavior: "smooth"
        });
    }
}

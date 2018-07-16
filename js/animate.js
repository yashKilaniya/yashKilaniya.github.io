
var page_size=window.innerHeight;
function animateThis(){

	//get current scroll position

	var curr_pos=window.scrollY;
	console.log("current position is : " + curr_pos);
	

	if(curr_pos >=page_size*1 )	{
		//document.querySelectorAll('acad-card').style.animation="slideInLeft 1s linear";
		//document.getElementsByClassName('acad-card').style.animation="slideInLeft 1s linear";
		document.getElementById('acadpanel').style.animation="slideInLeft .5s linear";
		console.log("animation applied");

	}


}

var gen=document.getElementById('gen');
var aca=document.getElementById('aca');
var ski=document.getElementById('ski');
var too=document.getElementById('too');
var pro=document.getElementById('pro');
var coc=document.getElementById('coc');
var hob=document.getElementById('hob');
var lin=document.getElementById('lin');


function changeColor(){
	var cur_pos=window.scrollY;
	if(cur_pos>=0 && cur_pos<page_size){
		aca.style.background="none";
		ski.style.background="none";
		too.style.background="none";
		pro.style.background="none";
		coc.style.background="none";
		hob.style.background="none";
		lin.style.background="none";
		
		gen.style.background="#2f3e3e94";
		
	}
	else if ( cur_pos>=page_size*1 && cur_pos<page_size*2){

		gen.style.background="none";
		ski.style.background="none";
		too.style.background="none";
		pro.style.background="none";
		coc.style.background="none";
		hob.style.background="none";
		lin.style.background="none";
		
		aca.style.background="#2f3e3e94";
	}
	else if ( cur_pos>=page_size*2 && cur_pos<page_size*3){

		gen.style.background="none";
		aca.style.background="none";
		too.style.background="none";
		pro.style.background="none";
		coc.style.background="none";
		hob.style.background="none";
		lin.style.background="none";
		
		ski.style.background="#2f3e3e94";
	}
	else if ( cur_pos>=page_size*3 && cur_pos<page_size*4){

		gen.style.background="none";
		ski.style.background="none";
		aca.style.background="none";
		pro.style.background="none";
		coc.style.background="none";
		hob.style.background="none";
		lin.style.background="none";
		
		too.style.background="#2f3e3e94";
		
		
	}
	else if ( cur_pos>=page_size*4 && cur_pos<page_size*5){

		gen.style.background="none";
		ski.style.background="none";
		too.style.background="none";
		aca.style.background="none";
		coc.style.background="none";
		hob.style.background="none";
		lin.style.background="none";
		
		pro.style.background="#2f3e3e94";
		
		
	}
	else if ( cur_pos>=page_size*5 && cur_pos<page_size*6){

		gen.style.background="none";
		ski.style.background="none";
		too.style.background="none";
		aca.style.background="none";
		pro.style.background="none";
		hob.style.background="none";
		lin.style.background="none";
		
		coc.style.background="#2f3e3e94";
		
		
	}
	else if ( cur_pos>=page_size*6 && cur_pos<page_size*7){

		gen.style.background="none";
		ski.style.background="none";
		too.style.background="none";
		pro.style.background="none";
		aca.style.background="none";
		coc.style.background="none";
		lin.style.background="none";
		
		hob.style.background="#2f3e3e94";
		
		
	}
	else if ( cur_pos>=page_size*7 && cur_pos<page_size*8){

		gen.style.background="none";
		ski.style.background="none";
		too.style.background="none";
		pro.style.background="none";
		aca.style.background="none";
		coc.style.background="none";
		hob	.style.background="none";
		
		lin.style.background="#2f3e3e94";
		
		
	}
	
}

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
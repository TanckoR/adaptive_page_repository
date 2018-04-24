menu.onclick=function MyFunction(){
	var x= document.getElementById("my_top_nav");

	if(x.className === "top_nav"){
		x.className += " responsive";
	}
	else{
		x.className = "top_nav";
	}
}
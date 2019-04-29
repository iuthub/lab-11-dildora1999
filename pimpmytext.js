function bigFont(){
	document.getElementById("text").style.fontSize = "24pt" ;
}
function blingText(){
	if(document.getElementById("bling").checked)
	{
		document.getElementById("text").classList.add("blingIt");
	}
	else{
		document.getElementById("text").classList.remove("blingIt");
	}
}
function snoopify(){
	document.getElementById("text").style.textTransform = "capitalize";
	document.getElementById("text").value=document.getElementById("text").value.split(".").join("-izzle.");
}


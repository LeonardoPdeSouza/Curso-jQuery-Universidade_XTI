$(document).ready(function(){
	//$("a[name]") // todos os elementos com atributo name em a
	//.css("background-color", "#ccc");
	
	//$("a[name=menu]") // todos os elementos com atributo name com valor menu em a
	//.css("background-color", "#ccc");
	
	//$("a[href*=min]") // todos os elementos com o valor min
	//.css("background-color", "#ccc");
	
	//$("a[href$=js]") // todos os elementos que termine com o valor js
	//.css("background-color", "#ccc");
	
	//$("a[href^=mailto]") // todos os elementos que começe com o valor js
	//.css("background-color", "#ccc");
	
	$("a[name!=menu]") // todos os elementos diferentes do valor menu
	.css("background-color", "#ccc");
});
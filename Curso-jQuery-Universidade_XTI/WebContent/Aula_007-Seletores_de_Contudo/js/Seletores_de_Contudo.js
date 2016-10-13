$(document).ready(function(){
	//$("td:contains(Carandiru)") // elemento com conteudo carandiru
	//.css("background-color", "#ccc");
	//$("td:empty") // todos os elementos vazios
	//.css("background-color", "#ccc");
	//$("td:not(td:empty)") // todos os elementos que não estão vazios
	//.css("background-color", "#ccc");
	$("td:has(strong)") // todos os elementos com a tag strong
	.css("background-color", "#ccc");
});
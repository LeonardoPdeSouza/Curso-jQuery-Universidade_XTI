$(document).ready(function(){
		// descendentes
		$("div span").css("color", "yellow"); // elementos com as tag div e span
		
		// filhos do elementos
		$("li > ul").css("color", "red"); // elementos filhos de li que seja ul
		$("#item1_1 + li").css("color", "blue"); // elementos irmão mais proximo
		$("#item1_1 ~ li").css("color", "blue"); // elementos irmão 
	});
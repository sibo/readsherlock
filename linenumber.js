// Loop over each paragraph
var i = 0;
$("#text p").each(function(i){
	$(this).innerHTML='<a name="p' + i + '">' + 'paragraph' + i + '</a>';
});
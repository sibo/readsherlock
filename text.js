
  $(document).ready(function() {
    $('#wrapper').mouseenter(function(event) {
                $('#left').stop(true,false).animate({opacity: 1},300);
        });
        $('#wrapper').mouseleave(function(event) {
                $('#left').stop(true,false).animate({opacity: 0},1000);
        });
	var i = 1;
	$("#text p").each(function(i){
		$(this).html('<a name="p' + i + '" href="#p' + i++ + '">' + $(this).html() + '</a>');
	});
	if(location.hash != '') 
		location.hash = location.hash;
  });
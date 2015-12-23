$(document).ready(function(){
	$('.navbar-nav li a').on('click', function(){
		$('.navbar-nav li .active').removeClass('active');
		$(this).addClass('active');
	});
});
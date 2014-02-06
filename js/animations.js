var $win = $(window);
var $clouds = $('.clouds');

$win.on('scroll', function () {
	$clouds.css('transform', 'rotate(' + $win.scrollTop() / 5 + 'deg');
});
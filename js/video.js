var $dialog = $('#video');
var $placeholder = $('#video-placeholder');

dialogPolyfill.registerDialog($dialog.get(0));

$('#video').hide();

$('#btn-open').on('click', function () {
	$('#video').show();
	$placeholder.html('<div class="embed embed--16by9"><iframe class="embed__item" src="http://player.vimeo.com/video/81423932?color=c9ff23&amp;autoplay=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>');

	$dialog.get(0).showModal();
});


$('#btn-close').on('click', function () {
	$('#video').hide();
	$dialog.get(0).close();
	$placeholder.html('');
});

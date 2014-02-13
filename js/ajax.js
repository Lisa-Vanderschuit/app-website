var revData = $.ajax('js/testimonials.json', {
	dataType: 'json'
});

revData.done(function (data) {
	var rev = Math.round(Math.random() * 2 );

	$('.rev-name').html(data[rev].name);
	$('.rev-review').html(data[rev].review);
});

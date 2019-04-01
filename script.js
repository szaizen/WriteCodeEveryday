jQuery(document).ready(function(){

	//problem1
	var answer1 = 0;
	for( var i = 1; i < 1000; i++ ) {
		if ( i % 3 === 0 || i % 5 === 0 ) {
			answer1 += i;
		}
	}
	$('.answer1').text(answer1);

});

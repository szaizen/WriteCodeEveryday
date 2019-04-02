jQuery(document).ready(function(){

	//problem1
	var answer1 = 0;
	for( var i = 1; i < 1000; i++ ) {
		if ( i % 3 === 0 || i % 5 === 0 ) {
			answer1 += i;
		}
	}
	$('.answer1').text(answer1);

	//problem2
	var a = 1;
	var b = 2;
	var temp = 0;
	var answer2 = 0;
	while( b <= 4000000 ) {
		if( b % 2 === 0 ) {
			answer2 += b;
			console.log(temp + 'は偶数です')
		}
		temp = a + b;
		a = b;
		b = temp;
	}
	$('.answer2').text(answer2);
});

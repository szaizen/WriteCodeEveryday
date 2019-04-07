jQuery(document).ready(function(){

	problem1();

	function problem1() {
		for( var i = 1; i <= 9; i++ ) {
			for ( var j = 1; j <= 9; j++ ) {
				console.log(i + "x" + j + "=" + i * j);
				$('.answer1').append("<div>" + i + "x" + j + "=" + i * j + "</div>");
			}
		}
	};

});
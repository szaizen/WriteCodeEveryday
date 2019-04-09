jQuery(document).ready(function(){

	problem1();
	problem2();
	problem3();

	function problem1() {
		for( var i = 1; i <= 9; i++ ) {
			for ( var j = 1; j <= 9; j++ ) {
				$('.answer1').append("<div>" + i + "x" + j + "=" + i * j + "</div>");
			}
		}
	};

	function problem2() {
		/* randomな10の数を生成 */
		var mountainHeight = [];
		for( var i = 0; i < 10; i++ ) {
			mountainHeight.push(Math.ceil(Math.random() * 10000));
		};
		/* 降順で並び替え */
		mountainHeight.sort(function(a,b){
		        if( a > b ) return -1;
		        if( a < b ) return 1;
		        return 0;
		});
		$('.answer2').append("<div>" + mountainHeight[0] + "</div>").append("<div>" + mountainHeight[1] + "</div>").append("<div>" + mountainHeight[2] + "</div>");
	};

	function problem3() {
		var total = Math.ceil(Math.random()*100);
		for(var i = 0; i < total; i++) {
			var randomA = Math.ceil(Math.random() * 1000000);
			var randomB = Math.ceil(Math.random() * 1000000);
			$('.answer3').append("<div>" + (randomA + randomB) + "：" + String(randomA + randomB).length + "桁</div>");
		}

	};


});

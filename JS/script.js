var message = $('.message');
var box = $('.text');
var counter = 0;
var counter2 = -1;
var mArray = new Array("...", "Hello visitor,", "My name is", "Vaibhav Dhodapkar", "Welcome to my homepage");
var test = new Array();



var NextWord = function(){
	// $('.message').css({"background-color":"#f2f2f2", "color":"#333333"});
	counter2+=1;
	test = mArray[counter2];
	if(counter2<mArray.length-1){
		print();
	}
	else{
		if(counter2<mArray.length){
			setTimeout(function(){
				message.css({"background-color":"#333333", "color":"#f2f2f2"});
			},3500);
			setTimeout(function(){
				message.text(" ");
				message.css({"background-color":"#ffffff", "color":"#333333"});
				print();
				$('.down').animate({opacity:0.7},"slow",function(){
					$('#main-content').toggle();
				});
				$('.blinker').remove();
			},4000);
		}
	}
}

var print = function(){
	message.append(test[counter]);
	counter+=1;
	if(counter<test.length){
		setTimeout(print,50);
	}
	else{
		counter=0;
		message.append(" <br>");
		setTimeout(NextWord,150);
	}
};


var blinking = function(){
	var count= 0;
	while(count<100){
		$('.blinker').animate({opacity: 1}, "slow");
		$('.blinker').animate({opacity: 0}, "slow");
		setTimeout(count+=1,600);
	}
}

$(document).ready(NextWord);
$(document).ready(blinking);

//$('.goDown').ready(function(){
//	$(".goDown").click(function() {
//	    $('html, body').animate({
//	        scrollTop: $("#main-content").offset().top
//	    }, 500);
//	});
//});

var pillars = function(){
    $('.color').hover(function(){
        $(this).animate({bottom: "0%"}, 200);
//        $( this ).fadeOut( 100 );
//        $( this ).fadeIn( 500 );
    });
    $('.color').mouseleave(function(){
        $(this).animate({bottom: "-20%"}, 200);
//        $( this ).fadeOut( 100 );
//        $( this ).fadeIn( 500 );
    });
}
$(document).ready(pillars);
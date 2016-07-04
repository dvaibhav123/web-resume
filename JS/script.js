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
                message.addClass('blueback');
				message.css({"color":"#f2f2f2"});
			},3500);
			setTimeout(function(){
				message.text(" ");
                message.removeClass('blueback');
				message.css({"color":"white"});
				print();
                $('.text').animate({'padding-top':'10%'}, 1000); // intro text moves up
                $('.pillars-container').animate({'padding-top':'0'}, 1000); //pillars-container moves up
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


var pillars = function(){    
    //individual pillars rise up on hover
    $('.color').hover(function(){
        $(this).animate({bottom: "0%"}, 200);
    });
//    pillar goes down when clicked else-where
    $('.color').mouseleave(function(){
        $(this).animate({bottom: "-20%"}, 200);
    });
};

$(document).ready(NextWord);
$(document).ready(blinking);
$(document).ready(pillars);
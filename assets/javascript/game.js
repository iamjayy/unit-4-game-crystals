//speudocode

//4 crystals
//every crystal needs a random number
//a new number needs to be generated after every win/lost
//when clicking any crystal, it should add the previous result until targets total score
//if numbers dont match, then start over
//if number match, then plus one on win counter



var random_Result;
var  lost = 0;
var  win = 0;
var previous = 0;


var resetAndStart = function () {

    $(".cyrstals").empty();

    var images = [
        "assets/images/crystal1.png",
        "assets/images/crystal2.png", 
        "assets/images/crystal3.jpeg",
        "assets/images/crystal4.jpg"]


    // math random
    random_Result = Math.floor(Math.random() * 69) +30;

    //console.log(random_Result);

    $("#result").html("Random Result: " + random_Result);

    for(var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 11) +1;
    //console.log(random);

    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            
            "data-random": random
        });
            //crystal.css ({
            //    "background-image":"url('" + images[i] + ")",
           //     "background-size":"cover"
           // })

            // show number
            // crystal.html(random);

         $(".crystals").append(crystal);

    }

}

resetAndStart();

//event
$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    console.log(previous);

    if(previous > random_Result) {

        lost++;

        $("#lost").html("lost: " + lost);

        previous = 0;

    }

    else if(previous === random_Result){

        win++;

        $("#win").html("wins: " + win);

        previous = 0;

    
    }

    
});


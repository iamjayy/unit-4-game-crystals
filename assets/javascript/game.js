//speudocode

//4 crystals
//every crystal needs a random number
//a new number needs to be generated after every win/lost
//when clicking any crystal, it should add the previous result until targets total score
//if numbers dont match, then start over
//if number match, then plus one on win counter



var random_Result;
var  lost = 0;
var  wins = 0;
var counter = 0;



var startGame = function () {

    $(".crystals").empty();

    var images = [
        "assets/images/Arena_Crystal.png",
        "assets/images/crystal2.png", 
        "assets/images/crystal3.png",
        "assets/images/crystal4.png"]
        //loop for images
        //    for (var i=0; i< images.length; i++) {
            
        //     crystal.attr("src", images[i]);
        //    }




    // math random
    random_Result = Math.floor(Math.random() * 80) +40;

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
         crystal.css ({
           "background-image": "url('" + images[i] + "')",
              "background-size":"cover"
         })
    

            // show number
            // crystal.html(random);

         $(".crystals").append(crystal);

    }

}

//function to reset game without refreshing page



startGame();

//event
$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    counter += num;

    $("#counter").html("Total Score: " + counter);

    console.log(counter);

    if(counter > random_Result) {

        alert("You Lost!");

        lost++;

        $("#lost").html("lost: " + lost);

        counter = 0;
        
        //resetGame();
        startGame()

    }

    else if(counter === random_Result){

        alert("You Won!");

        wins++;

        $("#wins").html("wins: " + wins);

        counter = 0;

        //resetGame();
        startGame()


    }

    
});


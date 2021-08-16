
var gamePattern = [];

var userClickedPattern = [];


var buttonColors = ["red","blue","green","yellow"];

var level = 0;

var started = false;

$(Document).keydown(function(){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;

    }
});


$("btn").click(function(){
    alert("clicked");
})

$(".btn").click(function(){
   
    
   
    var userChosenColor= $(this).attr("id");
   // console.log($(this).attr("id"));
    
   userClickedPattern.push(userChosenColor);
   checkAnswer(userClickedPattern.length-1);
    
    $("#"+userChosenColor).fadeOut(100).fadeIn(100);
    
    playSound(userChosenColor);
    $("#"+userChosenColor).addClass("pressed");
    
    setTimeout( function(){
        $("#"+userChosenColor).removeClass("pressed");
    } , 200);

    
    

});

function playSound(name){

    var audio = new Audio("sounds\\"+name+".mp3")
    audio.play();


}

function nextSequence(){
    level++;

    userClickedPattern = [];

    var randomNumber = Math.random();

    randomNumber = Math.floor(randomNumber*4);

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);

    $("#level-title").text("Level "+level);
    

    playSound(randomChosenColor);
}

function gameOver(){
    $("body").removeClass("game-over");

}

function checkAnswer(currentLevel){

    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){

        console.log("success");

        if(userClickedPattern.length === gamePattern.length){
            setTimeout("nextSequence()",1000);
        }

    }
    else
    {
        console.log("failure");
        $("body").addClass("game-over");
        playSound("wrong")
        setTimeout("gameOver()",1000);
        startOver();
    }

}

function startOver(){
    level=0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
}



//$("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
//$("#"+randomChosenColor).fadeOut(100).fadeIn(100);

// $("#yellow").on("click",function(){
//     $("#yellow").fadeOut(100).fadeIn(100);
//     var audio = new Audio("sounds\\yellow.mp3")
//     audio.play();
// })
// $("#blue").on("click",function(){
//     $("#blue").fadeOut(100).fadeIn(100);
//     var audio = new Audio("sounds\\blue.mp3")
//     audio.play();
// })
// $("#green").on("click",function(){
//     $("#green").fadeOut(100).fadeIn(100);
//     var audio = new Audio("sounds\\green.mp3")
//     audio.play();
// })
// $("#red").on("click",function(){
//     $("#red").fadeOut(100).fadeIn(100);
//     var audio = new Audio("sounds\\red.mp3")
//     audio.play();
// })
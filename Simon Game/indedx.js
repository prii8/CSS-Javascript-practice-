let gamestarted=false;
var buttonscolors =["red","yellow","blue","green"];
var gramstep=[];
var userstep=[];
var level=0;

$(document).on( "keydown", function() {
    if(gamestarted==false)
    {
        gamestarted=true;
        
        nexttap();
        $("h1").text("LeveL  "+ level);

    }
    
    console.log( "Handler for `keypress` called." );
  } );



$( ".btn" ).on( "click", function() {
    
    var id = $(this).attr('id');
    userstep.push(id);
    // $(this).addClass("pressed").dequeue().delay(100).queue(function () {
    //   console.log(this);
    //     $(this).removeClass("pressed");
    // });
    animatePress(id);
    playsound(id);


    checkAnswer(userstep.length-1);
  });



function startover(){
gamestarted=false;
level=0;
gramstep=[];
}

function checkAnswer(currentlevel){
if (userstep[currentlevel]==gramstep[currentlevel])
{


    if(userstep.length==gramstep.length)
    {
        setTimeout(function(){
            nexttap();
        },1000)
    }

}
else
{
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(
        function(){
            $("body").removeClass("game-over");
        },200
    )
    startover();
    console.log("oh no game over");
}
}



function nexttap(){

    userstep=[];
    level++;
    $("#level-title").text("Level " + level);
    var rannum=Math.floor(Math.random()*4);
    console.log(rannum);
    var randcolorbutton=buttonscolors[rannum];
    gramstep.push(randcolorbutton);
    $("."+randcolorbutton).delay(100).fadeOut().fadeIn();
   playsound(randcolorbutton);

}




  function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }


  function playsound(buttonName){
    var audio = new Audio("sounds/"+buttonName+".mp3");
    audio.play();
  }
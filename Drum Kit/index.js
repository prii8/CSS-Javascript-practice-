





var len=document.querySelectorAll(".drum").length;

for(var i=0;i<len;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        var name=this.innerHTML;

        playsound(name);
        animate(name);
        
        }
        
        );
}



document.addEventListener("keydown",function(e){
    console.log(e.key);
    var keyname=e.key;

    playsound(keyname);
    animate(keyname);
});


function playsound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
    
        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
            
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

    
        default:
            console.log(name);
            break;
    }
    
}


function animate(key){
    var element=document.querySelector("."+key);
    console.log(element);

    element.classList.add("pressed");

    setTimeout(function(){element.classList.remove("pressed")},100);



}
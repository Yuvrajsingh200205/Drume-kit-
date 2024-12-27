// detecting the click
    for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click",function(){
            var buttonSound = this.innerHTML;
            nakeSound(buttonSound);
            buttonAnimation(buttonSound);
        });
    }
    //detecting the key
    document.addEventListener("keypress",function(event){
        nakeSound(event.key);
        buttonAnimation(event.key);
    });

    function nakeSound(key){
        switch (key) {
            case "w" : var tom1 = new Audio("sounds/tom-1.mp3")
                     tom1.play();
                     break;
            
                     case "a" : var tom2 = new Audio("sounds/tom-2.mp3")
                     tom2.play();
                     break;
            
                     case "s" : var tom3 = new Audio("sounds/tom-3.mp3")
                     tom3.play();
                     break;
            
                     case "d" : var tom4 = new Audio("sounds/tom-4.mp3")
                     tom4.play();
                     break;
            
                     case "j" : var kick = new Audio("sounds/kick-bass.mp3")
                     kick.play();
                     break;
                     
                     case "k" : var snare = new Audio("sounds/snare.mp3")
                     snare.play();
                     break;
            
                     case "l" : var crach = new Audio("sounds/crash.mp3")
                      crach.play();
                     break;
                     default:
                        console.log(buttonSound);
        }
    }

    function buttonAnimation(currentKey) {

        var activeButton = document.querySelector("." + currentKey);

        activeButton.classList.add("pressed");
         
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        },100);

    }
  
//assigning audio url

function buttonSound(soundName) {
  var audio = new Audio(`sounds/${soundName}.mp3`);
  audio.play();
}

//making sound function

function makeSound(value) {
  switch (value) {

    case "w":
      buttonSound("tom-1");
      break;

    case "a":
      buttonSound("tom-2");
      break;

    case "s":
      buttonSound("tom-3");
      break;

    case "d":
      buttonSound("tom-4");
      break;

    case "j":
      buttonSound("snare");
      break;

    case "k":
      buttonSound("crash");
      break;

    case "l":
      buttonSound("kick-bass");
      break;

    default:
  }
}

//adding animation

function buttonAnimation(currentKey) {
  var currentKey = document.querySelector(`.${currentKey}`);
  currentKey.classList.add("pressed");
  setTimeout(function() {
      currentKey.classList.remove("pressed");
    },
    100);



}

//DETECTING MOUSE PRESS

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

//DETECTING KEYBOARD PRESS

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

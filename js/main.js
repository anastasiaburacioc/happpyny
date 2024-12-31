
 alert('Te rog să conectezi sunetul! :)');


document.body.addEventListener('click', function(){
  let video = document.getElementById("audio");
video.play();

let words = document.querySelector('.words');
    
words.classList.add('displayNone');

let toy = document.querySelector('.toy');
toy.classList.add('toy-animation');
let fire = document.querySelector('.fire');
fire.classList.add('fire-animation');
let fire2 = document.querySelector('.fire-2');
fire2.classList.add('fire-animation');
let fire3 = document.querySelector('.fire-3');
fire3.classList.add('fire-animation');
let text = document.querySelector('.text');
text.classList.remove('displayNone');
text.classList.add('text-animation');
})


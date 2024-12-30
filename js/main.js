
 alert('Te rog să conectezi sunetul! :)');


document.body.addEventListener('click', function(){
  let video = document.getElementById("audio");
video.play();
 


    let words = document.querySelector('.words');
    
words.classList.add('displayNone');

let toy = document.querySelector('.toy');
toy.classList.add('toy-animation');
let text = document.querySelector('.text');
text.classList.remove('displayNone');

text.classList.add('text-animation');
})


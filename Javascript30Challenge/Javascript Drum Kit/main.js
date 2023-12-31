//below listens to the keydown event. 
//If event happens, then we run the function.
window.addEventListener('keydown', function(event) {
    console.log(event.keyCode)
    //audio[data-key = "${event.keyCode}"] this is an attribute selector, because we use the brackets.
    //audio is also a queryselector, because it is stated in the html.
    const audio = document.querySelector(`audio[data-key = "${event.keyCode}"]`);

    console.log(audio)//testing purposes.

    //if we want to also select the div(dot notation) of key for animation purposes we do the following:
    const key = document.querySelector(`.key[data-key = "${event.keyCode}"]`);
    console.log(key)
    //in order to add css to the keys we can literally add the classes that are already in our style.css folder:
    key.classList.add('playing')

    if(!audio) return// this should stop the function from running.
    //if you press an audio element that is already playing/ using the play() method, then it wont play again.
    //to avoid this we can rewind the method to the beginning:
    //this rewinds the audio element to the start
    audio.currentTime = 0;
    audio.play();
})




const keys = document.querySelector('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
function removeTransition(e) {
    console.log(e)
}
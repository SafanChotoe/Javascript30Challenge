//below listens to the keydown event. 
//If event happens, then we run the function.
//we want to listen in a window. So we put eventlistener in there.
// window.addEventListener('keydown', function(event) {
//     console.log(event)
    //audio[data-key = "${event.keyCode}"] this is an attribute selector, because we use the brackets.
    //audio is also a queryselector, because it is stated in the html.
    // const audio = document.querySelector(`audio[data-key = "${event.keyCode}"]`);

    // console.log(audio)//testing purposes.

    //if we want to also select the div(dot notation) of key for animation purposes we do the following:
    // const key = document.querySelector(`.key[data-key = "${event.keyCode}"]`);
    // console.log(key)
    //in order to add css to the keys we can literally add the classes that are already in our style.css folder:
    // key.classList.add('playing')

    // if(!audio) return// this should stop the function from running.
    //if you press an audio element that is already playing/ using the play() method, then it wont play again.
    //to avoid this we can rewind the method to the beginning:
    //this rewinds the audio element to the start
    // audio.currentTime = 0;
    // audio.play();
// })







// const keys = document.querySelector('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// function removeTransition(e) {
//     console.log(e)
// }



// below listens to a keydown event. 
//if event happens then the function will run.
//this function has parameter e(event)
//this parameter registers what the event contains.
//the log will show the keyCode object.
//window.addEventListener('keydown', function(e) {
    //console.log(e);
    //if we log the e.keyCode, we will see the number associated with the key.
  //console.log(e.keyCode);

//what follows next to to look if there is an audio element that contains the data-key that corresponds with the keyCode of said pressed key.
//first we can make a variable that contains the audio element with the same data-key as the keyCode.
//we can select the query by attribute selector.
//first the element than the element must contain the next attributes: data-key and a number to that data-key.
//since a key has a keyCode, we can put this keycode in the attribute with backticks.
//from before, we have managed to select and console.log the keyCode object with the event
//const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)


//we want to add animation the the keys displayed on the screen.
//we need to first make a variable that contains these pressed down keys.
//the element must contain the class of key and the corresponding data-key number.
//const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`)
//we can console.log to see what this variable contains: 
//console.log(key);

//console.log(audio)
//if we press a key with audio, we get that whole audio element.
//if not we get a null as result.
//But still, the function ran.
//To avoid this we can return nothing if there is no audio.
//if(!audio) return;

//Now that we have a variable that can contain the audio element. We can also play this audio element with .play() method.
//The audio element then plays itself all the way to the end.
//If you press the key during that time the audio wont play from the beginning.
//To solve this we can add a currenTime of 0(zero).
//THis makes the audio start from time zero when the key associated with the element is pressed down.
//audio.currentTime = 0;
//audio.play();
//console.log(key);//
//in the style folder we have a class that will add animation when put on element.
//we can add this class to the variable of key.
//key.classList.add('playing')

//animation doesnt go away yet.
//we need to remove it after end of cycle.
//adding a timer is an idea, but a transition end event is better.
//we can listen to all the keys.
//const keys = document.querySelectorAll('.key')
//console.log(keys)//this is a Nodelist(almost like an array)
//we listen for end of animation.
//we need to loop through all the key available first.
//after loop the function to remove transition will run.
//function removeTransition(e) {
    //console.log(e)// we get all the elements that have trabsitioned, or transformed.
    //we can select the longest animation. In this case that is transform.
    //if the propertyName is not a transform, we return nothing.
    //but if it is, we remove transition
    //if(e.propertyName !== 'transform') return;
    //console.log(e.propertyName);//this console.logs the name of the property: transform.
    //console.log(this);//this is equal to that which is called against it. In this case key.
    //we can remove the class of playing(the animation):
    //this.classList.remove('playing')
//}
//keys.forEach(key => key.addEventListener('transitionend', removeTransition))

//clean code below.
function playSound(e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`)
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;//skips if not containing transform in the name.
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound)
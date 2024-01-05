//the main challenge here is to apply a rotate to all the hands in sync with the actual time.
//actual time is in seconds.
//we can set time interval with method setInterval()
//this method can take in the function.
function setDate() {
    //we can create variables that represent the time
    const currentTime = new Date(); //returns the current time

    const seconds = currentTime.getSeconds();//returns the current time from currentTime and shows it in seconds.

    const minutes =  currentTime.getMinutes();//return the minutes from currenTime.

    const hours = currentTime.getHours();//returns the hours from current time

    const secondsDegrees = (seconds * 6) + 90;//every second is equal to a certain degrees. We add 90 because we have offset in css with 90
    const minutesDegrees = (minutes * 6) + 90;//every minute is equal to a certain degrees. We add 90 because we have offset in css with 90

    const hoursDegrees = (hours *  30) + 90;//every hour is equal to a certain degrees. We add 90 because we have offset in css with 90

    console.log(`${currentTime}`);

    const secondHand = document.querySelector('.second-hand');//this just contains the div from the seconds hand.
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;//this transforms the seconds hand by degrees equal to time

    const minutesHand = document.querySelector('.minute-hand');
    minutesHand.style.tranform = `rotate(${minutesDegrees}deg)`;//this transforms the minutes hand by degrees equal to time

    const hoursHand = document.querySelector('.hour-hand');
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;//this transforms the hours hand by degrees equal to time

 

}
//setInterval takes in the function and the amout of time the function must play in milliseconds
setInterval(setDate, 1000)
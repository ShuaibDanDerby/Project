const minuteHand = document.querySelector('.minuteHand');

function setDate() {
    const now = new Date();
    const minutes = now.getMinutes();
    const minutesDegrees =  ((minutes/60) * 360) + 90;
    minuteHand.style.transform = 'rotate(${minutesDegrees}deg)';
    console.log(minutes); 
}

setInterval(setDate,60000);
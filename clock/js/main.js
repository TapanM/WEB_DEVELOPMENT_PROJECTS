
const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hHand = document.querySelector('.hour-hand');
const hand = document.querySelector('.hand');

function setTime(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegree = ((seconds / 60) * 360) + 90; //Beacuse we already tranform 90 deg on css already
    secHand.style.transform = `rotate(${secondDegree}deg)`;
    // console.log(seconds)
    

    const mins = now.getMinutes();
    const minDegree = ((mins/60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegree}deg)`;

    const hrs = now.getHours();
    const hrDegree = ((hrs/60) * 360) + 90;
    hHand.style.transform = `rotate(${hrDegree}deg)`;
}

setInterval(setTime, 1000);
let form = document.getElementById('myform')

form.addEventListener("submit",startTimer);

function startTimer(e)
{
    let TargetDate = document.getElementById("count-date").value;

    e.preventDefault();

    let countDownDate = new Date(TargetDate).getTime();

// Update the count down every 1 second
    let start = setInterval(function() {

  // Get today's date and time
    let currentDate = new Date().getTime();

  // Find the distance between now and the count down date
    let Difference = countDownDate - currentDate;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(Difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((Difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((Difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((Difference % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  let daysCard = document.getElementById("count-days");
  let hoursCard = document.getElementById("count-hours");
  let minsCard = document.getElementById("count-mins");
  let secsCard = document.getElementById("count-sec");
  
  daysCard.innerHTML = days;
  hoursCard.innerHTML = hours;
  minsCard.innerHTML = minutes;
  secsCard.innerHTML = seconds;

  // If the count down is finished, write some text
  if (Difference < 0) {
    clearInterval(start);
    document.getElementById("time-text").innerHTML = "Already EXPIRED";
  daysCard.innerHTML = "0";
  hoursCard.innerHTML = "0";
  minsCard.innerHTML = "0";
  secsCard.innerHTML = "0";
  }
}, 1000);



}
const hoursHand = document.querySelector(".hoursHand");
const minutesHand = document.querySelector(".minutesHand");
const secondsHand = document.querySelector(".secondsHand");

function updateClock() {
  const hoursScale = 360 / 24;
  const minutesAndSecodsScale = 360 / 60;

  const currentTime = new Date();
  const minutes = currentTime.getMinutes();
  const hours = currentTime.getHours();
  const seconds = currentTime.getSeconds();

  const hoursInDegree = hours * hoursScale;
  const secondsInDegree = seconds * minutesAndSecodsScale;
  const minutesInDegree = minutes * minutesAndSecodsScale;


  hoursHand.style.webkitTransform = "rotate(" + hoursInDegree + "deg)";
  hoursHand.style.mozTransform = "rotate(" + hoursInDegree + "deg)";
  hoursHand.style.msTransform = "rotate(" + hoursInDegree + "deg)";
  hoursHand.style.oTransform = "rotate(" + hoursInDegree + "deg)";
  hoursHand.style.transform = "rotate(" + hoursInDegree + "deg)";

  minutesHand.style.webkitTransform = "rotate(" + minutesInDegree + "deg)";
  minutesHand.style.mozTransform = "rotate(" + minutesInDegree + "deg)";
  minutesHand.style.msTransform = "rotate(" + minutesInDegree + "deg)";
  minutesHand.style.oTransform = "rotate(" + minutesInDegree + "deg)";
  minutesHand.style.transform = "rotate(" + minutesInDegree + "deg)";

  secondsHand.style.webkitTransform = "rotate(" + secondsInDegree + "deg)";
  secondsHand.style.mozTransform = "rotate(" + secondsInDegree + "deg)";
  secondsHand.style.msTransform = "rotate(" + secondsInDegree + "deg)";
  secondsHand.style.oTransform = "rotate(" + secondsInDegree + "deg)";
  secondsHand.style.transform = "rotate(" + secondsInDegree + "deg)";
}

setInterval(() => {
  updateClock();
}, 1000);

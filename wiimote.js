// Get the text objects to display the data
var gyroText = document.getElementById("gyro-text");
var accelText = document.getElementById("accel-text");

// Add event listeners to the window object
window.addEventListener("deviceorientation", handleOrientation, true);
window.addEventListener("devicemotion", handleMotion, true);

// Handle the orientation event
function handleOrientation(event) {
  // Get the orientation data
  var alpha = event.alpha;
  var beta = event.beta;
  var gamma = event.gamma;
  
  // Update the text object with the orientation data
  gyroText.innerHTML = "Alpha: " + alpha + "<br>Beta: " + beta + "<br>Gamma: " + gamma;
}

// Handle the motion event
function handleMotion(event) {
  // Get the acceleration data
  var acceleration = event.acceleration;
  var accelerationIncludingGravity = event.accelerationIncludingGravity;
  var rotationRate = event.rotationRate;
  var interval = event.interval;
  
  // Update the text object with the acceleration data
  accelText.innerHTML = "Acceleration: " + acceleration.x + ", " + acceleration.y + ", " + acceleration.z + "<br>" +
                        "Acceleration including gravity: " + accelerationIncludingGravity.x + ", " + accelerationIncludingGravity.y + ", " + accelerationIncludingGravity.z + "<br>" +
                        "Rotation rate: " + rotationRate.alpha + ", " + rotationRate.beta + ", " + rotationRate.gamma + "<br>" +
                        "Interval: " + interval;
}

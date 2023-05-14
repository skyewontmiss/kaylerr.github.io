function handleOrientation(event) {
  var gyroscopeData = "Gyroscope: alpha=" + event.alpha + ", beta=" + event.beta + ", gamma=" + event.gamma;
  var accelerationData = event.accelerationIncludingGravity;
  var accelerometerData = "Accelerometer: x=" + accelerationData.x + ", y=" + accelerationData.y + ", z=" + accelerationData.z;
  
  document.getElementById("gyroscopeData").innerHTML = gyroscopeData;
  document.getElementById("accelerometerData").innerHTML = accelerometerData;
}

function update() {
  window.requestAnimationFrame(update);
  handleOrientation(event); // pass the `event` object as an argument
}

window.addEventListener("deviceorientation", function(event) {
  handleOrientation(event); // pass the `event` object as an argument
}, true);

update();

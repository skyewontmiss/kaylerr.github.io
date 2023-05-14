function update() {
  window.requestAnimationFrame(update);
  handleOrientation();
}

function handleOrientation() {
  var gyroscopeData = "Gyroscope: alpha=" + event.alpha + ", beta=" + event.beta + ", gamma=" + event.gamma;
  var accelerationData = event.accelerationIncludingGravity;
  var accelerometerData = "Accelerometer: x=" + accelerationData.x + ", y=" + accelerationData.y + ", z=" + accelerationData.z;
  
  document.getElementById("gyroscopeData").innerHTML = gyroscopeData;
  document.getElementById("accelerometerData").innerHTML = accelerometerData;
}

update();

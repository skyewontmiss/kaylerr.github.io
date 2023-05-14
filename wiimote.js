function update() {
  window.requestAnimationFrame(update);
  handleOrientation();
}

function handleOrientation() {
  var gyroscopeData = "Gyroscope: alpha=" + event.alpha + ", beta=" + event.beta + ", gamma=" + event.gamma;
  var accelerometerData = "Accelerometer: x=" + event.acceleration.x + ", y=" + event.acceleration.y + ", z=" + event.acceleration.z;
  
  document.getElementById("gyroscopeData").innerHTML = gyroscopeData;
  document.getElementById("accelerometerData").innerHTML = accelerometerData;
}

update();

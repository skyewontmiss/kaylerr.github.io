if (typeof DeviceOrientationEvent.requestPermission === "function") {
  DeviceOrientationEvent.requestPermission().then(permissionState => {
    if (permissionState === "granted") {
      // the user granted permission to access the device orientation data
      // you can register event listeners for deviceorientation events here
      window.addEventListener("deviceorientation", handleOrientation);
      window.addEventListener("devicemotion", handleMotion);
    } else {
      // the user denied permission to access the device orientation data
      console.log("Permission to access device orientation data was denied.");
    }
  });
} else {
  // the device doesn't support the DeviceOrientationEvent interface
  console.log("Device orientation data is not supported on this device.");
}

function handleOrientation(event) {
  var alpha = event.alpha;
  var beta = event.beta;
  var gamma = event.gamma;
  var orientationData = "Orientation: alpha=" + alpha + ", beta=" + beta + ", gamma=" + gamma;
  document.getElementById("orientation-data").innerHTML = orientationData;
}

function handleMotion(event) {
  var acceleration = event.acceleration;
  var accelerationData = "Acceleration: x=" + acceleration.x + ", y=" + acceleration.y + ", z=" + acceleration.z;
  document.getElementById("acceleration-data").innerHTML = accelerationData;
}



// Function to get browser name and version
function getBrowserInfo() {
  const userAgent = navigator.userAgent;
  let browserName = "Unknown";
  let version = "";

  if (userAgent.indexOf("Firefox") > -1) {
      browserName = "Mozilla Firefox";
      version = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Chrome") > -1) {
      browserName = "Google Chrome";
      version = userAgent.match(/Chrome\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Safari") > -1) {
      browserName = "Apple Safari";
      version = userAgent.match(/Version\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Edge") > -1) {
      browserName = "Microsoft Edge";
      version = userAgent.match(/Edge\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident/") > -1) {
      browserName = "Microsoft Internet Explorer";
      version = userAgent.match(/(MSIE |rv:)(\d+\.\d+)/)[2];
  }

  return `${browserName}, ${version}`;
}

// Function to get the operating system name
function getOSInfo() {
  const platform = navigator.platform;
  let osName = "Unknown OS";

  if (platform.indexOf("Win") > -1) osName = "Windows";
  else if (platform.indexOf("Mac") > -1) osName = "macOS";
  else if (platform.indexOf("Linux") > -1) osName = "Linux";
  else if (/Android/.test(navigator.userAgent)) osName = "Android";
  else if (/iPhone|iPad|iPod/.test(navigator.userAgent)) osName = "iOS";

  return osName;
}

// Function to format date and time to Finnish localization
function getFormattedDateTime() {
  const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
  };
  return new Date().toLocaleDateString('fi-FI', options);
}

// Function to get screen width and height
function getScreenSize() {
  return `${screen.width} x ${screen.height}`;
}

// Function to get available screen space
function getAvailableScreenSize() {
  return `${window.innerWidth} x ${window.innerHeight}`;
}

// Function to display all information on the web page
function displayInfo() {
  const target = document.getElementById('target');

  const browserInfo = document.createElement('p');
  browserInfo.textContent = `Browser: ${getBrowserInfo()}`;
  target.appendChild(browserInfo);

  const osInfo = document.createElement('p');
  osInfo.textContent = `Operating System: ${getOSInfo()}`;
  target.appendChild(osInfo);

  const screenSize = document.createElement('p');
  screenSize.textContent = `Screen Size: ${getScreenSize()}`;
  target.appendChild(screenSize);

  const availableScreenSize = document.createElement('p');
  availableScreenSize.textContent = `Available Screen Space: ${getAvailableScreenSize()}`;
  target.appendChild(availableScreenSize);

  const dateTime = document.createElement('p');
  dateTime.textContent = `Current Date and Time: ${getFormattedDateTime()}`;
  target.appendChild(dateTime);
}

// Execute the displayInfo function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', displayInfo);

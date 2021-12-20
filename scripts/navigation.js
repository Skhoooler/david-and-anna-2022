// Closes the topnav whenever the window resizes. 
window.addEventListener('resize', closeNavigation);

/////////////////////////////////////////////////////////////////////////////
// Determines if the sidebar or topnav should be selected based on the screen
// width, and then calls the CLOSE function for that type of navigation
/////////////////////////////////////////////////////////////////////////////
function closeNavigation() {
  var width = getScreenWidth();

  if (width < 700) {
    closeTopnav();
  }
  else {
    closeSidebar();
  }
}

/////////////////////////////////////////////////////////////////////////////
// Determines if the sidebar or topnav should be selected based on the screen
// width, and then calls the OPEN function for that type of navigation
/////////////////////////////////////////////////////////////////////////////
function openNavigation() {
  var width = getScreenWidth();

  if (width < 700) {
    openTopnav();
  }
  else {
    openSidebar();
  }
}

/////////////////////////////////////////////////////////////////////////////
// Switches the topnav from minimized and maximized 
/////////////////////////////////////////////////////////////////////////////
function closeTopnav() {
  document.getElementById("sidebar").style.width = "100%";
  document.getElementById("sidebar").style.height = "66px";
  document.getElementById("content").style.marginLeft = "0";
}

/////////////////////////////////////////////////////////////////////////////
// Switches the topnav to opened
/////////////////////////////////////////////////////////////////////////////
function openTopnav() {
  document.getElementById("sidebar").style.width = "100%";
  document.getElementById("sidebar").style.height = "340px";
  document.getElementById("content").style.marginLeft = "0";
}

/////////////////////////////////////////////////////////////////////////////
// Sets the sidebar to closed
/////////////////////////////////////////////////////////////////////////////
function closeSidebar() {
  document.getElementById("sidebar").style.width = "60px";
  document.getElementById("sidebar").style.height = "100%";
  document.getElementById("content").style.marginLeft = "60px";
}

/////////////////////////////////////////////////////////////////////////////
// Sets the sidebar to open
/////////////////////////////////////////////////////////////////////////////
function openSidebar() {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("sidebar").style.height = "100%";
  document.getElementById("content").style.marginLeft = "250px";
}

/////////////////////////////////////////////////////////////////////////////
// Returns the width of the screen
/////////////////////////////////////////////////////////////////////////////
function getScreenWidth(){
  // From https://stackoverflow.com/questions/6850164/get-the-device-width-in-javascript
  return (window.innerWidth > 0) ? window.innerWidth : screen.width;
}
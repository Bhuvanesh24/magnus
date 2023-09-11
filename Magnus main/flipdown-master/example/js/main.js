

document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 22) + 1;
  // console.log(new Date(twoDaysFromNow))
  // console.log(new Date(new Date().getMilliseconds() - new Date("2023-09-23").getMilliseconds()))
  // Set up FlipDown
  var flipdown = new FlipDown(twoDaysFromNow)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  // Toggle theme
  var interval = setInterval(() => {
    let body = document.body;
    body.classList.add('light-theme');
    body.querySelector('#flipdown').classList.add('flipdown__theme-light');
  },0);

  // Show version number
  var ver = document.getElementById('ver');
  ver.innerHTML = flipdown.version;
});

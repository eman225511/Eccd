var end = new Date('4/8/2024 1:57 PM');
//var end = new Date('4/8/2024 10:03 AM');
var _milisecond = 1;
var _second = _milisecond * 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function stage3() {
  var end = new Date('4/8/2024 4:26 PM');
  var now = new Date();
  var distance = end - now;
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById('countdown').innerHTML = 'Eclipse is over.';
    return;
  }
  var days = Math.floor(distance / _day);
  var hours = Math.floor((distance % _day) / _hour);
  var minutes = Math.floor((distance % _hour) / _minute);
  var seconds = Math.floor((distance % _minute) / _second);
  var miliseconds = Math.floor((distance % _second) / _milisecond);

  document.getElementById('countdown').innerHTML = days + 'days ';
  document.getElementById('countdown').innerHTML += hours + 'hrs ';
  document.getElementById('countdown').innerHTML += minutes + 'mins ';
  document.getElementById('countdown').innerHTML += seconds + 'secs ';
  document.getElementById('countdown').innerHTML += miliseconds + 'ms';
}

function stage2() {
  var end = new Date('4/8/2024 3:13 PM');
  var now = new Date();
  var distance = end - now;
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById('countdown').innerHTML = 'Full coverage now.<br>Ends around 4:26pm';
    sleep(10000)
    document.getElementById('countdownname').innerHTML = "Total Coverage Countdown!";
    stage3()
  }
  var days = Math.floor(distance / _day);
  var hours = Math.floor((distance % _day) / _hour);
  var minutes = Math.floor((distance % _hour) / _minute);
  var seconds = Math.floor((distance % _minute) / _second);
  var miliseconds = Math.floor((distance % _second) / _milisecond);
  document.getElementById('countdown').innerHTML = days + 'days ';
  document.getElementById('countdown').innerHTML += hours + 'hrs ';
  document.getElementById('countdown').innerHTML += minutes + 'mins ';
  document.getElementById('countdown').innerHTML += seconds + 'secs ';
  document.getElementById('countdown').innerHTML += miliseconds + 'ms';
}

function showRemaining() {
  var now = new Date();
  var distance = end - now;
  if (distance < 0) {

      clearInterval(timer);
      document.getElementById('countdown').innerHTML = 'Solar Eclipse Starting!!<br>Full coverage around 3:13pm and ends around 4:26pm!!<br>BE SAFE!!!!!!';
      sleep(10000)
      document.getElementById('countdownname').innerHTML = "Total Coverage Countdown!";
      stage2()
  }
  var days = Math.floor(distance / _day);
  var hours = Math.floor((distance % _day) / _hour);
  var minutes = Math.floor((distance % _hour) / _minute);
  var seconds = Math.floor((distance % _minute) / _second);
  var miliseconds = Math.floor((distance % _second) / _milisecond);

  document.getElementById('countdown').innerHTML = days + 'days ';
  document.getElementById('countdown').innerHTML += hours + 'hrs ';
  document.getElementById('countdown').innerHTML += minutes + 'mins ';
  document.getElementById('countdown').innerHTML += seconds + 'secs ';
  document.getElementById('countdown').innerHTML += miliseconds + 'ms';
}

timer = setInterval(showRemaining, 1);

// var countdownDate = new Date('Feb 16, 2018 16:00:00');
var countdownDate = new Date('Feb 11, 2018 12:06:00');
var endWeekend = 60*60*24*4*1000 + 60*60*16*1000;
var distance;



var x = setInterval(function(){
  var now = new Date().getTime();

  distance = countdownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('counter').innerHTML = days + 'd ' + hours + 'h '
  + minutes + 'm ' + seconds + 's ';

  if (distance < 0) {
    nextweek = countdownDate.getTime() + (60*60*24*7*1000);
    countdownDate = new Date(nextweek);
  }

  if(distance>endWeekend){
    document.getElementById('yesno').innerHTML = 'YES!';
    document.getElementById('startsin').innerHTML = '';
    document.getElementById('counter').innerHTML = 'ENJOY!';
    document.title = "It's the weekend! | I'm out of life";
    $("#wrapper").addClass("wrapperWeekend");
    $("#yesno").addClass("weekendStyleYesNo");
    $("#title").addClass("weekendTitle");

  }else{
    document.getElementById('yesno').innerHTML = 'NOPE';
    document.getElementById('counter').innerHTML = days + 'd ' + hours + 'h '
  + minutes + 'm ' + seconds + 's ';
    document.title = days + 'd ' + hours + 'h '
  + minutes + 'm ' + seconds + 's ' + "to the weekend | I'm Out of life";
    document.getElementById('startsin').innerHTML = '...and it starts in:';
    document.getElementById("wrapper").className.add = "wrapper";
    $("#wrapper").addClass("wrapper");
  }
})

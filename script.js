var countdownDate = new Date('Feb 16, 2018 16:00:00');
var endOfDay = new Date('Feb 14, 2018 16:00:00')
var endWeekend = 60*60*24*4*1000 + 60*60*16*1000;
var distance;



var x = setInterval(function(){
  var now = new Date().getTime();

  distance = countdownDate - now;
  fivePM = endOfDay - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var titleminutes = Math.floor((distance / (1000*60)))
  var titleseconds = Math.floor((distance % (1000*60)/1000))


  var hoursFive = Math.floor((fivePM % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutesFive = Math.floor((fivePM % (1000 * 60 * 60)) / (1000 * 60));
  var secondsFive = Math.floor((fivePM % (1000 * 60)) / 1000);

  weekday = new Date().getDay();


  document.getElementById('counter').innerHTML = days + 'd ' + hours + 'h '
  + minutes + 'm ' + seconds + 's ';

  if(weekday >= 1 && weekday < 5){
    document.getElementById('counterFive').innerHTML = "(we're off home in " + hoursFive + 'h ' + minutesFive + 'm ' + secondsFive + 's)';
  }

  if (distance < 0) {
    var nextweek = countdownDate.getTime() + (60*60*24*7*1000);
    countdownDate = new Date(nextweek);
  }
  console.log(tomorrow);
  if (fivePM < 0) {
    var tomorrow = endOfDay.getTime() + (60*60*24*1000);
    endOfDay = new Date(tomorrow);
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
  //   document.title = days + 'd' + hours + 'h'
  // + minutes + 'm' + seconds + 's' + " to the weekend | I'm Out of life";
    document.title = titleminutes + 'min ' + titleseconds + 's ' + "to the weekend | I'm out of life"; 
    document.getElementById('startsin').innerHTML = '...and it starts in:';
    document.getElementById("wrapper").className.add = "wrapper";
    $("#wrapper").addClass("wrapper");
  }
})

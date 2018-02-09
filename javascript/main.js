/*
 * Main javascript
 */

var app = new Vue({
  el: '#countdown-app',
  data: {
    endline: '2018-02-28',
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0
  },
  methods: {
    countdown: function(){
      var self = this;
      var interval = setInterval(function(){
        var counter  = self.calculateDate();
        console.log(counter);

        self.seconds = counter.seconds;
        self.minutes = counter.minutes;
        self.hours   = counter.hours;
        self.days    = counter.days;

        // stops the countdown
        if(counter.difference <= 0){
          clearInterval(interval);
        }
      }, 1000);
    },
    calculateDate: function(){
      var difference = Date.parse(this.endline) - Date.parse(new Date());

      var seconds    = Math.floor( (difference/1000) % 60 );
      var minutes    = Math.floor( (difference/1000/60) % 60 );
      var hours      = Math.floor( (difference/(1000*60*60)) % 24 );
      var days       = Math.floor( difference/(1000*60*60*24) );

      return {
        'difference': difference,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }
  }
});

app.countdown();

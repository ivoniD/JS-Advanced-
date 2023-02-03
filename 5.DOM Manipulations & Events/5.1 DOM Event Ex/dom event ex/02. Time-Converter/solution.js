function attachEventsListeners() {



  let daysButtonEl = document.getElementById('daysBtn');
  let hoursButtonEl = document.getElementById('hoursBtn');
  let minButtonEl = document.getElementById('minutesBtn');
  let secButtonEl = document.getElementById('secondsBtn');

  let dayTextEl = document.getElementById('days');
  let hourTextEl = document.getElementById('hours');
  let minTextEl = document.getElementById('minutes');
  let secTextEl = document.getElementById('seconds');

  daysButtonEl.addEventListener('click', function(){
    //One day is equal to 24 hours/1440 minutes/86400 seconds
    dayTextEl.value = Number(dayTextEl.value);
    hourTextEl.value = Number(dayTextEl.value) * 24;
    minTextEl.value = Number(dayTextEl.value) * 1440;
    secTextEl.value =  Number(dayTextEl.value) * 86400;
  })

  hoursButtonEl.addEventListener('click', function(){
    //One day is equal to 24 hours/1440 minutes/86400 seconds
    dayTextEl.value = Number(hourTextEl.value) / 24;
    hourTextEl.value = Number(hourTextEl.value);
    minTextEl.value = Number(dayTextEl.value) * 1440;
    secTextEl.value =  Number(dayTextEl.value) * 86400;
  })

  minButtonEl.addEventListener('click', function(){
    //One day is equal to 24 hours/1440 minutes/86400 seconds
    dayTextEl.value = Number(minTextEl.value) / 1440;
    hourTextEl.value = Number(dayTextEl.value) * 24;
    minTextEl.value = Number(minTextEl.value);
    secTextEl.value =  Number(dayTextEl.value) * 86400;
  })

  secButtonEl.addEventListener('click', function(){
    //One day is equal to 24 hours/1440 minutes/86400 seconds
    dayTextEl.value = Number(secTextEl.value) / 86400;
    hourTextEl.value = Number(dayTextEl.value) * 24;
    minTextEl.value = Number(dayTextEl.value) * 1440;
    secTextEl.value =  Number(secTextEl.value);
  })

  
}

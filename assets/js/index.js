// window.addEventListener('pageshow', function(event) {
//   if (event.persisted) {
//     window.location.reload(true) // 追加
//   } else {
//     // 何もしない
//   }
// });

$(function() {

  var startTime = Date.now();

  var lifeTimeContent = document.getElementById("left-time")

  let myAge = 30;
  let lifeSpan = 80;
  let lifeTimeMonth = (lifeSpan-myAge) * 12;
  let lifeTimeDay = (lifeSpan-myAge) * 365;
  let lifeTimeHour = lifeTimeDay * 24;
  let lifeTimeSec = lifeTimeHour * 60;
  $('#left-time').append(lifeTimeSec);
  $('#left-time2').append(lifeTimeHour);
  $('#left-time3').append(lifeTimeDay);
  $('#left-time4').append(lifeTimeMonth);

  countdown()

  function countdown(){
    timerId = setTimeout(function(){
      var elapsedTime = (Date.now() - startTime) / 1000;
      var remain = lifeTimeSec - elapsedTime;
      lifeTimeContent.textContent = Math.round(remain)
      countdown();
    },100);
  }

  const element = document.getElementById("details")

  $('#details').click(function(){
    window.scroll({
      top: 9000,
      behavior: 'smooth'
    });

  })
})
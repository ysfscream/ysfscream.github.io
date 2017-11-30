$(document).ready(function() {
  $('body').scrollspy({
    target: '#navbar',
    offset: 50
  });
  $('.navbar-nav a').on('click', function(e){
    e.preventDefault();
    if(!$(this).hasClass('active')) {
      $('.active').removeClass('active');
      $(this).addClass('active');
     var $target = $(this.hash);
      $('html, body')
      .stop()
      .animate({
        scrollTop: $target.offset().top - 50
      }, 500, 'swing');
    }
  });
  var date = new Date();
  var year = date.getFullYear();
  var hours = date.getHours();
  document.getElementById('time').innerHTML = year;
  if (hours > 8 && hours < 12) {
    document.getElementById('hours').innerHTML = "Good morning, Sir 🌞";
  } else if (hours > 12 && hours < 19) {
    document.getElementById('hours').innerHTML = "Good afternoon, Sir 🌞 ";
  } else if (hours >= 19 && hours < 23) {
     document.getElementById('hours').innerHTML = "Good night, Sir 🌛";
  } else {
    document.getElementById('hours').innerHTML = "😴 (～﹃～)~zZ";
  }

})
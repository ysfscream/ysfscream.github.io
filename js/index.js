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
        console.log($target.offset().top)
      $('html, body')
      .stop()
      .animate({
        scrollTop: $target.offset().top - 50
      }, 500, 'swing');
    }
  });
  var date = new Date();
  var year = date.getFullYear();
  document.getElementById('time').innerHTML = year;
})
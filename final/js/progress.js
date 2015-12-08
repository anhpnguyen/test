$(document).ready(function() {
  var docHeight = $(document).height(),
  windowHeight = $(window).height(),
  scrollPercent;

  $(window).scroll(function() {
    scrollPercent = $(window).scrollTop() / (docHeight - windowHeight) * 100;

    $('.progressbar').width(scrollPercent + '%');
    });
    });

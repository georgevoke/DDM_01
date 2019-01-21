$(document).ready(function() {




/****************************************************
/* BURGER
/****************************************************/


$("#checkBox").click(function() {
    if(this.checked) {
        //Do stuff
        $('#menuList').addClass('open');
        $('#menuList').removeClass('close');
    }
    else {
        //Do stuff
        $('#menuList').addClass('close');
        $('#menuList').removeClass('open');
    }
});

$(window).resize(function(){
  if ($(window).width() >= 768){  
    $('#menuList').removeClass('close');
    $('#menuList').removeClass('open');
    $('#checkBox').prop('checked',false);
  } 
});




/****************************************************
/* GOOGLE MAPS
/****************************************************/


window.onload = function() {
    var myOptions = {
        center: new google.maps.LatLng(50.721802,-3.833620),
        zoom: 10.2,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: false
    };

    var map = new google.maps.Map(document.getElementById("map"), myOptions);
}








/****************************************************
/* ANCHOR SCROLL
/****************************************************/




$('.js-section-scroll').on('click', function(e) {
  e.preventDefault();
  var section = $(this).attr('href').substr($(this).attr('href').indexOf('#'));
  var $section = $(section);

  $('html, body').animate({
    scrollTop: $section.offset().top + 'px'
  }, 500);
});




/****************************************************
/* WAYPOINT
/****************************************************/


var waypoint = new Waypoint({
  element: document.getElementById('waypoint'),
  handler: function(direction) {
    
    // alert("I am an alert box!");
    
    if (direction === 'down') {
    // Do stuff

    // Show main._home
    $('main.home').css('opacity', '1.0');
    $('main.home').css('z-index', '2');
    $('main.home').css('transform', 'translateY(-3rem)');
    }

  }

})



var waypoint = new Waypoint({
  element: document.getElementById('waypoint'),
  handler: function(direction) {
    
    // alert("I am an alert box!");
    
    if (direction === 'up') {
    // Do stuff

    // Hide main._home
    $('main.home').css('opacity', '0.0');
    $('main.home').css('z-index', '-2');
    $('main.home').css('transform', 'translateY(2rem)');
    }

  }

})




/****************************************************
/* PLAY SHOWREEL
/****************************************************/


function noscroll() {
  window.scrollTo( 0, 0 );
}

$('#play-showreel').on('click', function(e) {
  e.preventDefault();
  $('div.video').fadeIn('slow');
  $('.video-showreel').fadeIn('slow');
  window.addEventListener('scroll', noscroll);
});

$('#close').on('click', function(e) {
  e.preventDefault();
  $('div.video').fadeOut();
  $('.video-showreel').fadeOut();
  window.removeEventListener('scroll', noscroll);
});


/****************************************************
/* PLAY PROMOTIONAL
/****************************************************/


function noscroll() {
  window.scrollTo( 0, 0 );
}

$('#play-promotional').on('click', function(e) {
  e.preventDefault();
  $('div.video').fadeIn('slow');
  $('.video-promotional').fadeIn('slow');
  window.addEventListener('scroll', noscroll);
});

$('#close').on('click', function(e) {
  e.preventDefault();
  $('div.video').fadeOut();
  $('.video-promotional').fadeOut();
  window.removeEventListener('scroll', noscroll);
});


/****************************************************
/* PLAY CORPORATE
/****************************************************/


function noscroll() {
  window.scrollTo( 0, 0 );
}

$('#play-corporate').on('click', function(e) {
  e.preventDefault();
  $('div.video').fadeIn('slow');
  $('.video-corporate').fadeIn('slow');
  window.addEventListener('scroll', noscroll);
});

$('#close').on('click', function(e) {
  e.preventDefault();
  $('div.video').fadeOut();
  $('.video-corporate').fadeOut();
  window.removeEventListener('scroll', noscroll);
});


/****************************************************
/* PLAY WEDDING
/****************************************************/


function noscroll() {
  window.scrollTo( 0, 0 );
}

$('#play-wedding').on('click', function(e) {
  e.preventDefault();
  $('div.video').fadeIn('slow');
  $('.video-wedding').fadeIn('slow');
  window.addEventListener('scroll', noscroll);
});

$('#close').on('click', function(e) {
  e.preventDefault();
  $('div.video').fadeOut();
  $('.video-wedding').fadeOut();
  window.removeEventListener('scroll', noscroll);
});









});
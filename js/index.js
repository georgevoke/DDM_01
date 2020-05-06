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
/* CAROUSEL
/****************************************************/


// $('.fade').slick({
//   dots: true,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   cssEase: 'linear'
// });


$(document).ready(function(){
  $('.description .carousel').slick({
    dots: true,
    // rtl: true,
    // speed: 500,
    // fade: true,
    // cssEase: 'linear'
  });
});




// PLACEHOLDER-1 *************************************


$('.placeholder-1').on('mouseover', function(e) {
  // alert("I am an alert box!");
  $('.p-a-1, .p-a-2, .p-a-3, .p-a-4').addClass('scale-up');
  // $('.placeholder').css('transform', 'scale(1.2)');
});

$('.placeholder-1').on('mouseout', function(e) {
  // alert("I am an alert box!");
  $('.p-a-1, .p-a-2, .p-a-3, .p-a-4').removeClass('scale-up');
  // $('.placeholder').css('transform', 'scale(1.2)');
});


// PLACEHOLDER-2 *************************************


$('.placeholder-2').on('mouseover', function(e) {
  // alert("I am an alert box!");
  $('.p-b-1, .p-b-2, .p-b-3').addClass('scale-up');
  // $('.placeholder').css('transform', 'scale(1.2)');
});

$('.placeholder-2').on('mouseout', function(e) {
  // alert("I am an alert box!");
  $('.p-b-1, .p-b-2, .p-b-3').removeClass('scale-up');
  // $('.placeholder').css('transform', 'scale(1.2)');
});


// PLACEHOLDER-3 *************************************


$('.placeholder-3').on('mouseover', function(e) {
  // alert("I am an alert box!");
  $('.p-c-1, .p-c-2, .p-c-3').addClass('scale-up');
  // $('.placeholder').css('transform', 'scale(1.2)');
});

$('.placeholder-3').on('mouseout', function(e) {
  // alert("I am an alert box!");
  $('.p-c-1, .p-c-2, .p-c-3').removeClass('scale-up');
  // $('.placeholder').css('transform', 'scale(1.2)');
});


// PLACEHOLDER-4 *************************************

$('.placeholder-4').on('mouseover', function(e) {
  // alert("I am an alert box!");
  $('.p-d-1, .p-d-2, .p-d-3').addClass('scale-up');
  // $('.placeholder').css('transform', 'scale(1.2)');
});

$('.placeholder-4').on('mouseout', function(e) {
  // alert("I am an alert box!");
  $('.p-d-1, .p-d-2, .p-d-3').removeClass('scale-up');
  // $('.placeholder').css('transform', 'scale(1.2)');
});










/****************************************************
/* GOOGLE MAPS
/****************************************************/


// window.onload = function() {
//     var myOptions = {
//         center: new google.maps.LatLng(50.721802,-3.833620),
//         zoom: 10.2,
//         mapTypeId: google.maps.MapTypeId.ROADMAP,
//         disableDefaultUI: false
//     };

//     var map = new google.maps.Map(document.getElementById("map"), myOptions);
// }








/****************************************************
/* ANCHOR SCROLL
/****************************************************/




$('.js-section-scroll').on('click', function(e) {
  e.preventDefault();
  var section = $(this).attr('href').substr($(this).attr('href').indexOf('#'));
  var $section = $(section);

  $('html, body').animate({
    scrollTop: $section.offset().top + 'px'
  }, 600);
});









/****************************************************
/* PLAY SHOWREEL
/****************************************************/


// function noscroll() {
//   window.scrollTo( 0, 0 );
// }

$('#play-showreel').on('click', function(e) {
  e.preventDefault();

  // alert('Esc key pressed.');

  $('div.video').fadeIn('slow');
  $('.video-showreel').fadeIn('slow');

  // window.addEventListener('scroll', noscroll);

});

$('#close').on('click', function(e) {
  e.preventDefault();

  $('div.video').fadeOut();
  $('.video-showreel').fadeOut();

  // window.removeEventListener('scroll', noscroll);

});

document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {

     // alert('Esc key pressed.');

      $('div.video').fadeOut();
      $('.video-showreel').fadeOut();

      // window.removeEventListener('scroll', noscroll);

  }
};




/****************************************************
/* PLAY PROMOTIONAL
/****************************************************/


// function noscroll() {
//   window.scrollTo( 0, 0 );
// }

// $('#play-promotional').on('click', function(e) {
//   e.preventDefault();
//   $('div.video').fadeIn('slow');
//   $('.video-promotional').fadeIn('slow');
//   window.addEventListener('scroll', noscroll);
// });

// $('#close').on('click', function(e) {
//   e.preventDefault();
//   $('div.video').fadeOut();
//   $('.video-promotional').fadeOut();
//   window.removeEventListener('scroll', noscroll);
// });


/****************************************************
/* PLAY CORPORATE
/****************************************************/


// function noscroll() {
//   window.scrollTo( 0, 0 );
// }

// $('#play-corporate').on('click', function(e) {
//   e.preventDefault();
//   $('div.video').fadeIn('slow');
//   $('.video-corporate').fadeIn('slow');
//   window.addEventListener('scroll', noscroll);
// });

// $('#close').on('click', function(e) {
//   e.preventDefault();
//   $('div.video').fadeOut();
//   $('.video-corporate').fadeOut();
//   window.removeEventListener('scroll', noscroll);
// });


/****************************************************
/* PLAY WEDDING
/****************************************************/


// function noscroll() {
//   window.scrollTo( 0, 0 );
// }

// $('#play-wedding').on('click', function(e) {
//   e.preventDefault();
//   $('div.video').fadeIn('slow');
//   $('.video-wedding').fadeIn('slow');
//   window.addEventListener('scroll', noscroll);
// });

// $('#close').on('click', function(e) {
//   e.preventDefault();
//   $('div.video').fadeOut();
//   $('.video-wedding').fadeOut();
//   window.removeEventListener('scroll', noscroll);
// });




/****************************************************
/* CLOSE SHOWREEL
/****************************************************/

// $('#close').on('click', function(e) {
//   var $this = $(this);
//   var $frame = $this.find('iframe');
//   $frame.attr('src', $frame.attr('src'));
// });

// $('#close-home').on('click', function(e) {
//   // alert("I am an alert box!");
//   // $('frame').attr('src');
//   var $frame = $('iframe');
//   $frame.attr('src', $frame.attr('src'));
// });


// $('#close').on('click', function(e) {
//   // alert("I am an alert box!");
//   // $('frame').attr('src');
//   var $this = $(this);
//   var $frame = $this.find('iframe');

//   $frame.attr('src', $frame.attr('src'));
// });

// $('#close').on('click', function(e) {
//   // alert("I am an alert box!");
//   // $('frame').attr('src');
//   // var $frame = $('iframe');

//   var $frame = $this.find('iframe');

//   $frame.attr('src', $frame.attr('src'));
// });



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
    $('main').css('opacity', '1.0');
    $('main').css('z-index', '2');
    $('main').css('transform', 'translateY(-10rem)');
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
    $('main').css('opacity', '0.0');
    $('main').css('z-index', '0');
    $('main').css('transform', 'translateY(2rem)');
    }

  }

})






});
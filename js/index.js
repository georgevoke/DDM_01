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
/* EMAIL
/****************************************************/


$('a.mail').on('click', function(){
    var href = $(this).attr('href');
    $(this).attr('href', href.replace('dragontree5928@gmail.com', 'gareth.voke@dragontree.co.uk'));
});




/****************************************************
/* CAROUSEL
/****************************************************/


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
/* PLAY SHOWREEL
/****************************************************/


// function noscroll() {
//   window.scrollTo( 0, 0 );
// }

$('#play-showreel').on('click', function(e) {
  e.preventDefault();

  $('.video-showreel').attr("src","https://player.vimeo.com/video/470248606");
  $('div.video').fadeIn('slow');
  $('.video-showreel').fadeIn('slow');

  // window.addEventListener('scroll', noscroll);

});


/****************************************************
/* PLAY PA1
/****************************************************/


$('#play-pa1').on('click', function(e) {
  e.preventDefault();

  $('.video-showreel').attr("src","https://player.vimeo.com/video/268972226");
  $('div.video').fadeIn('slow');
  $('.video-showreel').fadeIn('slow');

});


/****************************************************
/* PLAY PA2
/****************************************************/


$('#play-pa2').on('click', function(e) {
  e.preventDefault();

  $('.video-showreel').attr("src","https://player.vimeo.com/video/269039506");
  $('div.video').fadeIn('slow');
  $('.video-showreel').fadeIn('slow');

});


/****************************************************
/* PLAY PA3
/****************************************************/


$('#play-pa3').on('click', function(e) {
  e.preventDefault();

  $('.video-showreel').attr("src","https://player.vimeo.com/video/328811423");
  $('div.video').fadeIn('slow');
  $('.video-showreel').fadeIn('slow');

});


/****************************************************
/* PLAY PA4
/****************************************************/


$('#play-pa4').on('click', function(e) {
  e.preventDefault();

  $('.video-showreel').attr("src","https://player.vimeo.com/video/362760475");
  $('div.video').fadeIn('slow');
  $('.video-showreel').fadeIn('slow');

});


/****************************************************
/* PLAY PB1
/****************************************************/


$('#play-pb1').on('click', function(e) {
  e.preventDefault();

  $('.video-showreel').attr("src","https://player.vimeo.com/video/264773173");
  $('div.video').fadeIn('slow');
  $('.video-showreel').fadeIn('slow');

});


/****************************************************
/* PLAY PB2
/****************************************************/


$('#play-pb2').on('click', function(e) {
  e.preventDefault();

  $('.video-showreel').attr("src","https://player.vimeo.com/video/364802092");
  $('div.video').fadeIn('slow');
  $('.video-showreel').fadeIn('slow');

});


/****************************************************
/* PLAY PB3
/****************************************************/


$('#play-pb3').on('click', function(e) {
  e.preventDefault();

  $('.video-showreel').attr("src","https://player.vimeo.com/video/364802092");
  $('div.video').fadeIn('slow');
  $('.video-showreel').fadeIn('slow');

});


/****************************************************
/* PLAY PC1
/****************************************************/


$('#play-pc1').on('click', function(e) {
  e.preventDefault();

  $('.video-showreel').attr("src","https://player.vimeo.com/video/324993344");
  $('div.video').fadeIn('slow');
  $('.video-showreel').fadeIn('slow');

});


/****************************************************
/* PLAY PC2
/****************************************************/


$('#play-pc2').on('click', function(e) {
  e.preventDefault();

  $('.video-showreel').attr("src","https://player.vimeo.com/video/324994625");
  $('div.video').fadeIn('slow');
  $('.video-showreel').fadeIn('slow');

});


/****************************************************
/* PLAY PD1
/****************************************************/


$('#play-pd1').on('click', function(e) {
  e.preventDefault();

  $('.video-showreel').attr("src","https://player.vimeo.com/video/395205173");
  $('div.video').fadeIn('slow');
  $('.video-showreel').fadeIn('slow');

});




/****************************************************
/* CLOSE VIDEOS
/****************************************************/


$('#close').on('click', function(e) {
  e.preventDefault();

  $('div.video').fadeOut();
  $('iframe').fadeOut();

  var $frame = $('iframe');
  $frame.attr('src', $frame.attr('src'));

});

document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {

      $('div.video').fadeOut();
      $('iframe').fadeOut();

      var $frame = $('iframe');
      $frame.attr('src', $frame.attr('src'));

  }
};








/****************************************************
/* COPY EMAIL TO CLIPBOARD
/****************************************************/


// // Set value for 'generated' CSS
// var textBox = document.getElementById('emailCopy');

// // Define copy anchor
// var aButton = document.getElementById('copyEmail');

//     // On click copy anchor
//     aButton.addEventListener('click', function (event) {
        
//         // Prevent default anchor behaviour
//         event.preventDefault();
        
//         // Select 'generated' CSS box (it's contents)
//         textBox.select();
        
//         // Copy the content to clipboard
//         document.execCommand('copy');

//         // Give user feedback that content has been copied
//         $('#copyEmail').addClass('active');

//         //
//         setTimeout(function(){
//             $('.active').removeClass('active');
//         },1800);
        
//     });







/****************************************************
/* WAYPOINT
/****************************************************/


var waypoint = new Waypoint({
  element: document.getElementById('waypoint'),
  handler: function(direction) {
    
    // alert("I am an alert box!");
    
    if (direction === 'down') {
    // Do stuff

    // alert("I am an alert box!");

    // Show main._home
    $('main').css('opacity', '1.0');
    $('main').css('z-index', '2');
    $('main').css('transform', 'translateY(-10rem)');
    }

  }

});


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


});











});
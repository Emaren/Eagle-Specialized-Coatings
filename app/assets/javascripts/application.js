// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require turbolinks
//= require_tree .
//= require video
//= require jquery.turbolinks

$(document).ready(function(){



  $( ".magnifying-glass" ).mouseenter(function() {
    $( ".search-box" ).fadeIn( "slow", function() {
      $(this).animate()
    });
  });
  // Animation complete
  $( ".magnifying-glass" ).mouseleave(function() {
    $( ".search-box" ).fadeOut( "slow", function() {
    });
  });



  $(".databaselayer").mouseenter(function() {
    $(this).animate({
      left: "1645px",
      opacity: 1
      }, {
        duration: 450,
        queue: false
      });
      $(".product-database-title").delay(230).show("slide", 250)
    });

  $(".databaselayer").mouseleave(function() {
    $(this).animate({
      left: "1800px",
      opacity: 1
      }, {
        duration: 450,
        queue: false
      });
      $(".product-database-title").fadeOut(200)
    });



    $("#about-wrapper").hover(function() {
      $(".about-us-title").show('clip', 400);
    });
      $("#about-wrapper").mouseleave(function() {
        $(".about-us-title").hide('clip', 400);
      });
    $("#contact-wrapper").mouseenter(function() {
      $(".contact-us-title").show('clip', 400);
    });
      $("#contact-wrapper").mouseleave(function() {
        $(".contact-us-title").hide('clip', 400);
      });
    $(".tw").mouseenter(function() {
      $(".twitter-title").show('clip', 400);
    });
      $(".tw").mouseleave(function() {
        $(".twitter-title").hide('clip', 400);
      });
    $("#facebook-wrapper").mouseenter(function() {
      $(".facebook-title").show('clip', 400);
    });
      $("#facebook-wrapper").mouseleave(function() {
        $(".facebook-title").hide('clip', 400);
      });
    $("#facebook-wrapper").mouseenter(function() {
      $(".facebook-title").show('clip', 400);
    });
      $("#facebook-wrapper").mouseleave(function() {
        $(".facebook-title").hide('clip', 400);
      });
    $("#youtube-wrapper").mouseenter(function() {
      $(".youtube-title").show('clip', 400);
    });
      $("#youtube-wrapper").mouseleave(function() {
        $(".youtube-title").hide('clip', 400);
      });
    $("#youtube-wrapper").mouseenter(function() {
      $(".youtube-title").show('clip', 400);
    });
      $("#youtube-wrapper").mouseleave(function() {
        $(".youtube-title").hide('clip', 400);
      });
    $("#industry-links-wrapper").mouseenter(function() {
      $(".industry-links-title").show('clip', 400);
    });
      $("#industry-links-wrapper").mouseleave(function() {
        $(".industry-links-title").hide('clip', 400);
      });
    $("#industry-links-wrapper").mouseenter(function() {
      $(".industry-links-title").show('clip', 400);
    });
      $("#industry-links-wrapper").mouseleave(function() {
        $(".industry-links-title").hide('clip', 400);
      });
    $("#certified-contractors-wrapper").mouseenter(function() {
      $(".certified-contractors-title").show('clip', 400);
    });
      $("#certified-contractors-wrapper").mouseleave(function() {
        $(".certified-contractors-title").hide('clip', 400);
      });
    $("#certified-contractors-wrapper").mouseenter(function() {
      $(".certified-contractors-title").show('clip', 400);
    });
      $("#certified-contractors-wrapper").mouseleave(function() {
        $(".certified-contractors-title").hide('clip', 400);
      });
    $("#pay-wrapper").mouseenter(function() {
      $(".pay-title").show('clip', 400);
    });
      $("#pay-wrapper").mouseleave(function() {
        $(".pay-title").hide('clip', 400);
      });
    $("#pay-wrapper").mouseenter(function() {
      $(".pay-title").show('clip', 400);
    });
      $("#pay-wrapper").mouseleave(function() {
        $(".pay-title").hide('clip', 400);
      });


      $(".thermal-img-title").click(function(){
        $(".corrosion-img-title").animate({
          left: "-=515px",
          opacity: .5,
        }, 1500 );
        $(".corrosion-white").animate({
          left: "-=515px",
          opacity: .5,
        }, 1500 );
        $(".corrosion-box").animate({
          left: "-=515px",
          opacity: .5,
        }, 1500 );
        $(".corrosion-img").animate({
          left: "-=515px",
          opacity: .5,
        }, 1500 );
        $(".corrosion-vid").animate({
          left: "-=515px",
          opacity: .5,
        }, 1500 );
        $(".play-corrosion").animate({
          left: "-=515px",
          opacity: .5,
        }, 1500 );
        $(".fire-img-title").animate({
          opacity: .5,
        }, 500 );
        $(".fire-white").animate({
          opacity: .5,
        }, 500 );
        $(".fire-box").animate({
          opacity: .5,
        }, 500 );
        $(".fire-img").animate({
          opacity: .5,
        }, 500 );
        $(".fire-vid").animate({
          opacity: .1,
        }, 500 );
        $(".play-fire").animate({
          opacity: .5,
        }, 500 );
        $(".thermal-img-title").animate({
          left: "+=515px"
        }, 1500 );
        $(".thermal-white").animate({
          left: "+=515px"
        }, 1500 );
        $(".thermal-box").animate({
          left: "+=515px"
        }, 1500 );
        $(".thermal-img").animate({
          left: "+=515px"
        }, 1500 );
        $(".thermal-vid").animate({
          left: "+=515px"
        }, 1500 );
        $(".play-thermal").animate({
          left: "+=515px"
        }, 1500 );
        $(".intro").hide('clip', 2000);
        $(".footer-container").hide('clip', 2000);
        $(".page-opening").show('scale', 1900);
        $(".page-opening-bottom").show('scale', 1900);
        $(".thermal-parallax").show('scale', 2500);
      });


    $(".corrosion-img-title").click(function(){
      $(".thermal-img-title").fadeOut(1000)
      $(".thermal-white").fadeOut(1000)
      $(".thermal-box").fadeOut(1000)
      $(".thermal-img").fadeOut(1000)
      $(".thermal-vid").fadeOut(1000)
      $(".play-thermal").fadeOut(1000)
      $(".fire-img-title").fadeOut(1000)
      $(".fire-white").fadeOut(1000)
      $(".fire-box").fadeOut(1000)
      $(".fire-img").fadeOut(1000)
      $(".fire-vid").fadeOut(1000)
      $(".play-fire").fadeOut(1000)
      $(".corrosion-img-title").animate({
        height: "100%",
        width: "100%",
      }, 300 );
            $(".corrosion-white").animate({

      }, 300 );
            $(".corrosion-box").animate({

      }, 300 );
            $(".corrosion-img").animate({
        height: "100%",
        width: "100%",
      }, 300 );
            $(".corrosion-vid, .play-corrosion").animate({
        height: "100%",
        width: "100%",
      }, 300 );
            $(".play-corrosion").animate({
        height: "100%",
        width: "100%",
      }, 300 );
      $(".intro").hide('scale', 400);
      $(".footer-container").hide('scale', 100);
      $(".thermal-parallax").show('scale', 2500);
    });




    $(".fire-img-title").click(function(){
      $(".thermal-img-title").fadeOut(1000)
      $(".thermal-white").fadeOut(1000)
      $(".thermal-box").fadeOut(1000)
      $(".thermal-img").fadeOut(1000)
      $(".thermal-vid").fadeOut(1000)
      $(".play-thermal").fadeOut(1000)
      $(".corrosion-img-title").fadeOut(1000)
      $(".corrosion-white").fadeOut(1000)
      $(".corrosion-box").fadeOut(1000)
      $(".corrosion-img").fadeOut(1000)
      $(".corrosion-vid").fadeOut(1000)
      $(".play-corrosion").fadeOut(1000)
      $(".fire-img-title").animate({
        left: "-=515px"
      }, 1000 );
      $(".fire-white").animate({
        left: "-=515px"
      }, 1000 );
      $(".fire-box").animate({
        left: "-=515px"
      }, 1000 );
      $(".fire-img").animate({
        left: "-=515px"
      }, 1000 );
      $(".fire-vid").animate({
        left: "-=515px"
      }, 1000 );
      $(".play-fire").animate({
        left: "-=515px"
      }, 1000 );
      $(".intro").hide('scale', 400);
      $(".footer-container").hide('scale', 500);
      $(".thermal-parallax").show('scale', 1000);
    });




$.fn.animateRotate = function(angle,prevAngle, duration, easing, complete) {
    var args = $.speed(duration, easing, complete);
    var step = args.step;
    return this.each(function(i, e) {
        args.complete = $.proxy(args.complete, e);
        args.step = function(now) {
            $.style(e, 'transform', 'rotate(' + now + 'deg)');
            if (step) return step.apply(e, arguments);
        };

        $({deg: prevAngle}).animate({deg: angle}, args);
    });
};
var angle = 0;
var prevAngle = 0;

$(".phone").mouseenter(function(e) {
    prevAngle = angle
    angle -= 100;
    $(this).animateRotate(angle, prevAngle, 250);
    e.preventDefault();
    $(this).animate({
      left: "800px",
      opacity: 1
    }, {
      duration: 300,
      queue: false
    });
    $(".phone-number").fadeIn(1000);
    // $(".phone-number").show("slide", 400);
});
$(".phone").mouseleave(function(e) {
  prevAngle = angle
  angle += 100;
  $(this).animateRotate(angle, prevAngle, 350);
  e.preventDefault();
  $(this).animate({
    left: "905px",
    opacity: 1
    }, {
      duration: 300,
      queue: false
    });
    $(".phone-number").hide("slide", "easeInQuart", 300);
  });



    $(".magnifying-glass").mouseenter(function(){
      $(this).animate({
        left: "1410px",
        height: "+=180px",
        width: "=+180px",
      }, {
        duration: 500,
      });
    });
    $(".magnifying-glass").mouseleave(function(){
      $(this).animate({
        left: "1800px",
      }, {
        duration: 500,
      });
    });



    $(".thermal-img").hover(function(){
      $(this).hide("blind");
    })

    $(".corrosion-img").mouseenter(function(){
      $(this).hide("explode", 750);
    })

    $(".fire-img").hover(function(){
      $(this).hide("scale")
    })

    $(".thermal-img").mouseleave(function(){
      $(this).show("blind");
    })

    $(".corrosion-img").mouseleave(function(){
      $(this).show("explode", 2000);
    })

    $(".fire-img").mouseleave(function(){
      $(this).show("scale")
    })

})

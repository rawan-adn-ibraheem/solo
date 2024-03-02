/*=======================
|||||||  Preloader ||||
=========================*/

$(window).on("load", function () {
  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut("slow");
});

/*=======================
||| navigation bar ||||
=========================*/

/* show and hide white navigation */

$(function () {
  // show/ hide nav on page load
  showHideNav();

  $(window).scroll(function () {
    // show/ hide nav on window's scroll
    showHideNav();
  });

  function showHideNav() {
    if ($(window).scrollTop() > 50) {
      // show white nav
      $("nav").addClass("white-nav-top");
      // show dark logo
      $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

      // show  back to top button
      $("#back-to-top").fadeIn();

      /* alert('your scroll position is greather than 50px, your scroll position = '+ $(window).scrollTop());*/
    } else {
      // hide white nav
      $("nav").removeClass("white-nav-top");
      // show normal logo
      $(".navbar-brand img").attr("src", "img/logo/logo.png");

      // hide  back to top button
      $("#back-to-top").fadeOut();

      /*  alert('your scroll position is greatherless 50px, your scroll position = '+ $(window).scrollTop());*/
    }
  }
});

// smooth scrolling

$(function () {
  $("a.smooth-scroll").click(function (event) {
    event.preventDefault(); // prefent the default behaviour of link element
    // stop the default action of link element from happining and is going to prevent a link from opening url

    //  get section id like #about , #services etc.
    // this mean the link just clicked
    var section_id = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(section_id).offset().top - 64,
      },
      1250
    );
    //how long this animation will run , this animation is going to take 1.25 seconds
  });
});

/* mobile menu */
$(function () {
  // show mobile navigation
  $("#mobile-nav-open-btn").click(function () {
    {
      // alert(" you've just clicked open button");

      $("#mobile-nav").css("height", "100%");
    }
  });

  // hide mobile navigation
  $("#mobile-nav-close-btn ,#mobile-nav a").click(function () {
    {
      $("#mobile-nav").css("height", "0%");
    }
  });
});

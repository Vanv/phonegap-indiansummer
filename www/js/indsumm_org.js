console.log("ind summer");
//$('.page2').hide();
// $element.velocity({
//    p: { opacity: 1 },
//    o: { duration: 500 }
// });
var $page1 = $(".page1");
var $page2 = $(".page2");

// $(".page2").velocity({ 
//     display: "none"
//   });
// $page2.velocity({ opacity: 0 }, { display: "none" });

$("#menu").on("click", function() {
  console.log("clicked");
  // $page2.velocity(
  //  {display: "block"}
  //   // duration: 2000,
  //   // easing: "easeInBack"
  // );
  $page1.velocity("slideleft",
    { opacity: 0 }, 
    // { duration: 3000, 
  //      easing: "linear"
    // },
    { display: "none" });
  $page2.velocity( 
    { opacity: 1 },
    {duration: 350}, 
    { display: "block" });
});


// $("div").velocity("slideUp", {
//     duration: 350
// });


// var animationSequence = [
//     { e: $("#offcanvas"), p: { translateX: 0 } , o: duration: 300 },
//     { e: $(".widget"), p: { translateX: 0, opacity: 0 } , o: duration: 300 },
//     { e: $("#close"), p: { translateY: 0, rotateZ: 0 } , o: duration: 150 }
// ];
//  $.Velocity.RunSequence(animationSequence);


//Hamburger menu 
  var menuBoolean = false;
var menuWidthThird = $('.off-canvas').width() / $('.menu-element').length;

$('.nav-wrapper').click(function(ev) {
      $('#nav-trigger-anim').toggleClass('active');
      if (menuBoolean == false) {
            menuAnimIn($('.container'), menuWidthThird);
            menuBoolean = true;
      } else {
            menuAnimIn($('.container'), 0);
            menuBoolean = false;
      }
});

$('.seemore').click(function(ev) {
  if  ($('.container').offset().left != $('.off-canvas').width())
  {
    var currentLoc = $('.container').offset().left;
    menuAnimIn($('.container'), currentLoc + menuWidthThird); 
  }
});

function menuAnimIn(obj, fromLeft) {
      $(obj).velocity({
            left: fromLeft
      }, {
            easing: 'easeInSine'
      })
}


$('#pointer').velocity({
  translateX: "10px"
}, {
  loop: true
}).velocity("reverse");

var offCanvasIn = [{
  e: $("#offcanvas"),
  p: {
    translateX: [0, "-100%"]
  },
  o: {
    duration: 300
  }
}, {
  e: $("#about"),
  p: {
    translateX: [0, "-10px"],
    opacity: [1, 0]
  },
  o: {
    duration: 300
  }
}, {
  e: $("#images"),
  p: {
    translateX: [0, "-10px"],
    opacity: [1, 0]
  },
  o: {
    duration: 300
  }
}, {
  e: $("#follow"),
  p: {
    translateX: [0, "-10px"],
    opacity: [1, 0]
  },
  o: {
    duration: 300
  }
}, {
  e: $("#close"),
  p: {
    translateY: [0, "-100%"],
    rotateZ: ["180deg", 0]
  },
  o: {
    duration: 300
  }
}];

var offCanvasOut = [{
  e: $("#close"),
  p: {
    translateY: "-100%",
    rotateZ: "180deg"
  },
  o: {
    duration: 300
  }
}, {
  e: $("#about"),
  p: {
    translateX: "-10px",
    opacity: 0
  },
  o: {
    duration: 300
  }
}, {
  e: $("#images"),
  p: {
    translateX: "-10px",
    opacity: 0
  },
  o: {
    duration: 300
  }
}, {
  e: $("#follow"),
  p: {
    translateX: "-10px",
    opacity: 0
  },
  o: {
    duration: 300
  }
}, {
  e: $("#offcanvas"),
  p: {
    translateX: "-100%"
  },
  o: {
    duration: 300
  }
}, ];

// run the sequence on click
$("#open").on('click', function(event) {
  event.preventDefault();
  $.Velocity.RunSequence(offCanvasIn);
});
$("#close").on('click', function(event) {
  event.preventDefault();
  $.Velocity.RunSequence(offCanvasOut);
});



setInterval(function() {
  $(".slideUp")
      .velocity("transition.slideUpIn", 1250)
      .delay(750)
      .velocity({ opacity: 1 }, 750)
}, 2000);





//Menu offcanvas
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
      duration: 150
    }
  }, {
    e: $("#about"),
    p: {
      translateX: [0, "-10px"],
      opacity: [1, 0]
    },
    o: {
      duration: 150
    }
  }, {
    e: $("#images"),
    p: {
      translateX: [0, "-10px"],
      opacity: [1, 0]
    },
    o: {
      duration: 150
    }
  }, {
    e: $("#follow"),
    p: {
      translateX: [0, "-10px"],
      opacity: [1, 0]
    },
    o: {
      duration: 150
    }
  }, {
    e: $("#close"),
    p: {
      translateY: [0, "-100%"],
      rotateZ: ["180deg", 0]
    },
    o: {
      duration: 150
    }
  }];
  var offCanvasOut = [{
    e: $("#close"),
    p: {
      translateY: "-100%",
      rotateZ: "180deg"
    },
    o: {
      duration: 150
    }
  }, {
    e: $("#about"),
    p: {
      translateX: "-10px",
      opacity: 0
    },
    o: {
      duration: 150
    }
  }, {
    e: $("#images"),
    p: {
      translateX: "-10px",
      opacity: 0
    },
    o: {
      duration: 150
    }
  }, {
    e: $("#follow"),
    p: {
      translateX: "-10px",
      opacity: 0
    },
    o: {
      duration: 150
    }
  }, {
    e: $("#offcanvas"),
    p: {
      translateX: "-100%"
    },
    o: {
      duration: 150
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

$(document).ready(function() {
  $('.collapse.in').prev('.panel-heading').addClass('active');
  $('#accordion, #accordion2, #bs-collapse')
    .on('show.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').addClass('active');
    })
    .on('hide.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').removeClass('active');
    });
});


(function() { 
})();
  
  // if(isOpen) {
  //   $('button')
  // }

//Contact US MODAL
        // $('#modalOpen').click(function() {
        //   $('.overlay').velocity({translateY: ['0%','-50%'] }, {display:"block"});
        // });
        
        // $('#modalClose').click(function() {
        //   $('.overlay').velocity({translateY: ['0%','50%'] }, {display:"none"});
        // });

//Scroll top

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});







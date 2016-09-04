//Hamburger menu 
// var menuBoolean = false;
// var menuWidthThird = $('.off-canvas').width() / $('.menu-element').length;

// $('.nav-wrapper').click(function(ev) {
//       $('#nav-trigger-anim').toggleClass('active');
//       if (menuBoolean == false) {
//             menuAnimIn($('.container'), menuWidthThird);
//             menuBoolean = true;
//       } else {
//             menuAnimIn($('.container'), 0);
//             menuBoolean = false;
//       }
// });

// $('.seemore').click(function(ev) {
//   if  ($('.container').offset().left != $('.off-canvas').width())
//   {
//     var currentLoc = $('.container').offset().left;
//     menuAnimIn($('.container'), currentLoc + menuWidthThird); 
//   }
// });

// function menuAnimIn(obj, fromLeft) {
//       $(obj).velocity({
//             left: fromLeft
//       }, {
//             easing: 'easeInSine'
//       })
// }
//Hamburger menu - END


(function() { 
    
    
      //HOBSONVILLE POINT MENU DIV

      var $hvmenupointDiv = $('#hobsonville-point-menu'),
      $hvmenupointBtn = $('#hv-menu-point-Btn');
      
        $hvmenupointBtn.on('click', function() {
        console.log("hv point menu");
        var isOpen = $hvmenupointDiv.is(':visible'),
            slideDir = isOpen ? 'slideUp' : 'slideDown',
            dur = isOpen ? 200 : 400;
        $hvmenupointDiv.velocity(slideDir, {
          easing: 'easeOutQuart', 
          duration: dur,
        });
    });


      //HOBSON VILLE MENU DIV

      var $hvmenuDiv = $('#hobsonville-menu'),
      $hvmenuBtn = $('#hv-menu-Btn');
     
        $hvmenuBtn.on('click', function() {
        var isOpen = $hvmenuDiv.is(':visible'),
            slideDir = isOpen ? 'slideUp' : 'slideDown',
            dur = isOpen ? 200 : 400;
        $hvmenuDiv.velocity(slideDir, {
          easing: 'easeOutQuart', 
          duration: dur,
        });
    });

      //HOBSONVILLE POINT MENU
      //ENTREE

      var $entreeBtn = $('#entree'),
      $entreeList = $entreeBtn.next('ul');
      // entreeText = $entreeBtn.text();

      $entreeBtn.on('click', function() {
        var isOpen = $entreeList.is(':visible'),
            slideDir = isOpen ? 'slideUp' : 'slideDown',
            //entreeBtnText = isOpen ? entreeText : 'Entree',
            dur = isOpen ? 200 : 400;
        $entreeList.velocity(slideDir, {
          easing: 'easeOutQuart', 
          duration: dur,
          // complete: function() {
          //   $entreeBtn.text(entreeBtnText);
          // }
        });
      });

      //CHEF-SPECIAL
      var $chefSpecialBtn = $('#chefSpecial'),
      $chefSpecialList = $chefSpecialBtn.next('ul');

      $chefSpecialBtn.on('click', function() {

      var isOpen = $chefSpecialList.is(':visible'),
          slideDir = isOpen ? 'slideUp' : 'slideDown',
          dur = isOpen ? 200 : 400;
      $chefSpecialList.velocity(slideDir, {
        easing: 'easeOutQuart', 
        duration: dur,
      });
    });


      //HOBSONVILLE MENU
      //ENTREE

      var $entreehvBtn = $('#entree-hv'),
      $entreeListhv = $entreehvBtn.next('ul');
      
      $entreehvBtn.on('click', function() {
      console.log("hov ve menu");
        var isOpen = $entreeListhv.is(':visible'),
            slideDir = isOpen ? 'slideUp' : 'slideDown',
            dur = isOpen ? 200 : 400;
        $entreeListhv.velocity(slideDir, {
          easing: 'easeOutQuart', 
          duration: dur,
        });
      });

  
})();
  

//Contact US MODAL
        $('#modalOpen').click(function() {
          $('.overlay').velocity({translateY: ['0%','-50%'] }, {display:"block"});
        });
        
        $('#modalClose').click(function() {
          $('.overlay').velocity({translateY: ['0%','50%'] }, {display:"none"});
        });




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

  $("#contact").on('click', function(event) {
    event.preventDefault();
    //$.Velocity.RunSequence(offCanvasOut);
  });



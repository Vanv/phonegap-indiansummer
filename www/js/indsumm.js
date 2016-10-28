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

(function() { 
    
    
      //HOBSONVILLE POINT MENU DIV

      var $hvmenupointDiv = $('#hobsonville-point-menu'),
      $hvmenupointBtn = $('#hv-menu-point-Btn');
      
        $hvmenupointBtn.on('click', function() {
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
      //STARTERS

      var $startersBtn = $('#starters'),
      $startersList = $startersBtn.next('ul');
      // entreeText = $entreeBtn.text();

      $startersBtn.on('click', function() {
        var isOpen = $startersList.is(':visible'),
            slideDir = isOpen ? 'slideUp' : 'slideDown',
            //entreeBtnText = isOpen ? entreeText : 'Entree',
            dur = isOpen ? 200 : 400;
        $startersList.velocity(slideDir, {
          easing: 'easeOutQuart', 
          duration: dur,
          // complete: function() {
          //   $entreeBtn.text(entreeBtnText);
          // }
        });
      });

      //Main Course
      var $mainCourseBtn = $('#mainCourse'),
      $maincourseList = $mainCourseBtn.next('ul');
      $mainCourseBtn.on('click', function() {
        var isOpen = $maincourseList.is(':visible'),
            slideDir = isOpen ? 'slideUp' : 'slideDown',
            dur = isOpen ? 200 : 400;
        $maincourseList.velocity(slideDir, {
          easing: 'easeOutQuart', 
          duration: dur,
        });
      });

      //Breads and Side Dishes
      var $breadssideDishesBtn = $('#breadssideDishes'),
      $breadssideDishesList = $breadssideDishesBtn.next('ul');
      $breadssideDishesBtn.on('click', function() {
        var isOpen = $breadssideDishesList.is(':visible'),
            slideDir = isOpen ? 'slideUp' : 'slideDown',
            dur = isOpen ? 200 : 400;
        $breadssideDishesList.velocity(slideDir, {
          easing: 'easeOutQuart', 
          duration: dur,
        });
      });

      //ENTREE
      var $entreeBtn = $('#entree'),
      $entreeList = $entreeBtn.next('ul');

      $entreeBtn.on('click', function() {
        var isOpen = $entreeList.is(':visible'),
            slideDir = isOpen ? 'slideUp' : 'slideDown',
            dur = isOpen ? 200 : 400;
        $entreeList.velocity(slideDir, {
          easing: 'easeOutQuart', 
          duration: dur,
        });
      });
      //Non Veg
      var $nonvegHvpBtn = $('#nonveg-Hvp'),
      $nonvegHvpList = $nonvegHvpBtn.next('ul');

      $nonvegHvpBtn.on('click', function() {
        var isOpen = $nonvegHvpList.is(':visible'),
            slideDir = isOpen ? 'slideUp' : 'slideDown',
            dur = isOpen ? 200 : 400;
        $nonvegHvpList.velocity(slideDir, {
          easing: 'easeOutQuart', 
          duration: dur,
        });
      });

      //Non Veg
      var $vegetarianHvpBtn = $('#vegetarian-Hvp'),
      $vegetarianHvpList = $vegetarianHvpBtn.next('ul');

      $vegetarianHvpBtn.on('click', function() {
        var isOpen = $vegetarianHvpList.is(':visible'),
            slideDir = isOpen ? 'slideUp' : 'slideDown',
            dur = isOpen ? 200 : 400;
        $vegetarianHvpList.velocity(slideDir, {
          easing: 'easeOutQuart', 
          duration: dur,
        });
      });
      //Breads and Side Dishes
      var $breadssidedishesDinnerBtn = $('#breadssidedishesDinner'),
      $breadssidedishesDinnerList = $breadssidedishesDinnerBtn.next('ul');
      $breadssidedishesDinnerBtn.on('click', function() {
        var isOpen = $breadssidedishesDinnerList.is(':visible'),
            slideDir = isOpen ? 'slideUp' : 'slideDown',
            dur = isOpen ? 200 : 400;
        $breadssidedishesDinnerList.velocity(slideDir, {
          easing: 'easeOutQuart', 
          duration: dur,
        });
      });

      //HOBSONVILLE MENU
      
      //ENTREE
      var $entreehvBtn = $('#entree-hv'),
      $entreeListhv = $entreehvBtn.next('ul');
      
      $entreehvBtn.on('click', function() {
        var isOpen = $entreeListhv.is(':visible'),
            slideDir = isOpen ? 'slideUp' : 'slideDown',
            dur = isOpen ? 200 : 400;
        $entreeListhv.velocity(slideDir, {
          easing: 'easeOutQuart', 
          duration: dur,
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

    //Hobsonville Breads and Side Dishes
      var $hvbreadssidedishesDinnerBtn = $('#hv-breadssidedishesDinner'),
      $hvbreadssidedishesDinnerList = $hvbreadssidedishesDinnerBtn.next('ul');
      $hvbreadssidedishesDinnerBtn.on('click', function() {
        var isOpen = $hvbreadssidedishesDinnerList.is(':visible'),
            slideDir = isOpen ? 'slideUp' : 'slideDown',
            dur = isOpen ? 200 : 400;
        $hvbreadssidedishesDinnerList.velocity(slideDir, {
          easing: 'easeOutQuart', 
          duration: dur,
        });
      });  

    //Hv Main Course
      var $hvmainCourseBtn = $('#hv-maincourse'),
      $hvmaincourseList = $hvmainCourseBtn.next('ul');
      $hvmainCourseBtn.on('click', function() {
        var isOpen = $hvmaincourseList.is(':visible'),
            slideDir = isOpen ? 'slideUp' : 'slideDown',
            dur = isOpen ? 200 : 400;
        $hvmaincourseList.velocity(slideDir, {
          easing: 'easeOutQuart', 
          duration: dur,
        });
      });



      //Back to top link
      // $top = $('#top')
      // $top.on('click', function(){

      //   // $top.velocity({opacity: 0}, {display:"none"});
      // });
})();
  
  if(isOpen) {
    $('button')
  }

//Contact US MODAL
        $('#modalOpen').click(function() {
          $('.overlay').velocity({translateY: ['0%','-50%'] }, {display:"block"});
        });
        
        $('#modalClose').click(function() {
          $('.overlay').velocity({translateY: ['0%','50%'] }, {display:"none"});
        });

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







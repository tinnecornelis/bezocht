var main = function () {
  "use strict";
  
  $(".polaroid1").on("mouseover", function(){
    $(".polaroid1").fadeOut(100, function(){
       $(".polaroid1").addClass("onzichtbaar");
     $(".box1").fadeIn(100, function(){
       $(".box1").removeClass("onzichtbaar");
     });
    });
  });
    $(".box1").on("mouseout", function(){
      $(".box1").fadeOut(100, function(){
        $(".box1").addClass("onzichtbaar");
      $(".polaroid1").fadeIn(100, function(){
        $(".polaroid1").removeClass("onzichtbaar");
      });
    });
  });

  $(".polaroid2").on("mouseover", function(){
    $(".polaroid2").fadeOut(100, function(){
       $(".polaroid2").addClass("onzichtbaar");
     $(".box2").fadeIn(100, function(){
       $(".box2").removeClass("onzichtbaar");
     });
    });
  });
    $(".box2").on("mouseout", function(){
      $(".box2").fadeOut(100, function(){
        $(".box2").addClass("onzichtbaar");
      $(".polaroid2").fadeIn(100, function(){
        $(".polaroid2").removeClass("onzichtbaar");
      });
    });
  });

  $(".polaroid3").on("mouseover", function(){
    $(".polaroid3").fadeOut(100, function(){
       $(".polaroid3").addClass("onzichtbaar");
     $(".box3").fadeIn(100, function(){
       $(".box3").removeClass("onzichtbaar");
     });
    });
  });
    $(".box3").on("mouseout", function(){
      $(".box3").fadeOut(100, function(){
        $(".box3").addClass("onzichtbaar");
      $(".polaroid3").fadeIn(100, function(){
        $(".polaroid3").removeClass("onzichtbaar");
      });
    });
  });

  $(".polaroid4").on("mouseover", function(){
    $(".polaroid4").fadeOut(100, function(){
       $(".polaroid4").addClass("onzichtbaar");
     $(".box4").fadeIn(100, function(){
       $(".box4").removeClass("onzichtbaar");
     });
    });
  });
    $(".box4").on("mouseout", function(){
      $(".box4").fadeOut(100, function(){
        $(".box4").addClass("onzichtbaar");
      $(".polaroid4").fadeIn(100, function(){
        $(".polaroid4").removeClass("onzichtbaar");
      });
    });
  });





}

$("document").ready(main);
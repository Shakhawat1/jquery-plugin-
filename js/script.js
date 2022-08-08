// wow.js
 wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
                    wow.init(); 
// jq
 $(document).ready(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});
window.onload = ()=>{
    // $(selector).countMe(delay,speed)
    $("#coun1").countMe(1,1.5);
    $("#coun2").countMe(3,3);
    $("#coun3").countMe(4,5);
 }
 // aos .com
 AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });

  /**
     * Demo 1
     */
    var arc = function (t)
    {
        return {
            x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * t - 0.5 * Math.PI),
            y: 400.0 + 300.0 * Math.sin(2.0 * Math.PI * t - 0.5 * Math.PI)
        };
    };

    $('#text1').curvedText({
        curve:    arc,
        domain:   [-0.2, 0.2],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 400.0 }
    });

// curved text start
$('.autoplay').slick({
  dots: true,  
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});


// lite-box start
$(".example").rbox({

  'type':'image',

});

// lite-box end
// lite-box2 start
$(".example").rbox({
  'type': 'image',
});

// lite-box2 end

// gallery start


// gallery end
 
}); 

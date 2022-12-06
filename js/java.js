// home page java scrit





$(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('header').addClass("sticky");

        }
        else {
            $('header').removeClass("sticky");

        }      
    });



    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });
    




    var preloder = document.getElementById('preloder');
        function myfunction() {
            preloder.style.display = 'none'; 
        }





$('.trending-items').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 300,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows:false,
  dots:true,
});



        function openNav() {
               document.getElementById("mySidenav").style.width = "300px"; 
               
           }
                
           function closeNav() {
               document.getElementById("mySidenav").style.width = "0";
           }
           const checkbox = document.getElementById('checkbox');

           checkbox.addEventListener('change', () => {
               document.body.classList.toggle('dark');
           })

          
          
          
   
      
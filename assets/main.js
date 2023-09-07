$(document).ready(function(){  // Quando la pagina ha finito di caricarsi, fai quello dentro

    $('#hamburger-menu').on('click', function(){ // quando clicco sulla voce del menu mobile

      if($('#mobile-menu').hasClass('open')){   // se dopo aver cliccato sull'icona del menu, il menu ha classe "open"
        $('#mobile-menu').removeClass('open');  // togli la classe "open"
        $('body').css('overflow', 'scroll');    // lascia scrollare la pagina
      }else{                                    // altrimenti
        $('#mobile-menu').addClass('open');     // mettei la classe "open"
        $('body').css('overflow', 'hidden');    // blocca lo scroll della pagina
      }
      
    })

    var swiperGalleria = new Swiper(".home-galleria-swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {       // attivare le frecce
          nextEl: ".home-galleria-swiper .swiper-button-next",
          prevEl: ".home-galleria-swiper .swiper-button-prev",
        },
        breakpoints: {      // responsive
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {             // Quando la finestra è più grande di 1199px
            slidesPerView: 3, // 3 immagini alla volta
            spaceBetween: 60, // 60px di spazio tra di loro
          },
        },
    });

    var swiperRecensioni = new Swiper(".home-recensioni-swiper", {
        slidesPerView: 1,   // 1 immagine alla volta
        spaceBetween: 0,   // 0px di spazio tra di loro
        loop: true,
        navigation: {       // attivare le frecce
          nextEl: ".home-recensioni-swiper .swiper-button-next",
          prevEl: ".home-recensioni-swiper .swiper-button-prev",
        },
        pagination: {
            el: ".home-recensioni-swiper .swiper-pagination",
          },
          breakpoints: {      // responsive
            768: {
              slidesPerView: 1,
              spaceBetween: 120,
            },
          },
    });
})
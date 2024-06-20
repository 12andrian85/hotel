const main = new Splide( "#main-carousel", {
    type: 'fade',
    rewind: true,
    pagination: false,
    arrows: true,
});

const thumbnails = new Splide('#thumbnail-carousel', {
      fixedWidth: 100,
      fixedHeight: 60,
      gap       : 10,
      rewind    : true,
      pagination: false,
      arrows    : false,
      // focus      : 'center',
      isNavigation: true,
      breakpoints: {
        600: {
          fixedWidth : 60,
          fixedHeight: 44,
        },
      },
});

main.sync( thumbnails );
main.mount();
thumbnails.mount();



// slider_two
const secondmain = new Splide( "#main-carousel-second", {
  type: 'fade',
  rewind: true,
  pagination: false,
  arrows: true,
});

const secondthumbnails = new Splide('#thumbnail-carousel-second', {
    fixedWidth: 100,
    fixedHeight: 60,
    gap       : 10,
    rewind    : true,
    pagination: false,
    arrows    : false,
    // focus      : 'center',
    isNavigation: true,
    breakpoints: {
      600: {
        fixedWidth : 60,
        fixedHeight: 44,
      },
    },
});

secondmain.sync( secondthumbnails );
secondmain.mount();
secondthumbnails.mount();


// slider_three
const lastmain = new Splide( "#main-carousel-three", {
  type: 'fade',
  rewind: true,
  pagination: false,
  arrows: true,
});

const lastthumbnails = new Splide('#thumbnail-carousel-three', {
    fixedWidth: 100,
    fixedHeight: 60,
    gap       : 10,
    rewind    : true,
    pagination: false,
    arrows    : false,
    // focus      : 'center',
    isNavigation: true,
    breakpoints: {
      600: {
        fixedWidth : 60,
        fixedHeight: 44,
      },
    },
});

lastmain.sync( lastthumbnails );
lastmain.mount();
lastthumbnails.mount();

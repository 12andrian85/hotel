
const splideWellness = document.querySelector('#wellness')
const splideWedding = document.querySelector('#wedding')
const splideNews = document.querySelector('#news')
const splideGallery = document.querySelector('#gallery')
const splideSugestion = document.querySelector('#sugestion')
const splideProperties = document.querySelector('#properties')




if (splideWellness) {

  new Splide('#wellness', {
    type: 'loop',
    perPage: 1,
    // autoplay: 'true',
    focus: 'center',
    arrows: false,
    breakpoints: {
      // 640: {
      //   perPage: 1,
      // },
      // 768: {
      //   perPage: 1,
      // },
      // 1200: {
      //   perPage: 3,
      // },
      2560: {
        perPage: 1,
      },
    }
  }).mount();
}

if (splideWedding) {

  new Splide('#wedding', {
    type: 'loop',
    perPage: 1,
    focus: 'center',
    arrows: false,
    breakpoints: {
      // 640: {
      //   perPage: 1,
      // },
      // 768: {
      //   perPage: 1,
      // },
      // 1200: {
      //   perPage: 1,
      // },
      2560: {
        perPage: 1,
      },
    }
  }).mount();
}


if (splideNews) {

  new Splide('#news', {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    arrows: 'false',
    breakpoints: {
      640: {
        perPage: 1,
      },
      768: {
        perPage: 1,
      },
      1200: {
        perPage: 1,
      },
      2560: {
        perPage: 1,
      },
    }
  }).mount();
}

if (splideGallery) {

  new Splide('#gallery', {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    arrows: 'false',
    breakpoints: {
      // 640: {
      //   perPage: 1,
      // },
      // 768: {
      //   perPage: 3,
      // },
      // 1200: {
      //   perPage: 5,
      // },
      2560: {
        perPage: 1,
      },
    }
  }).mount();
}

if (splideSugestion) {

  new Splide('#sugestion', {
    type: 'loop',
    perPage: 3,
    // focus: 'center',
    arrows: 'true',
    breakpoints: {
      640: {
        perPage: 1,
      },
      // 768: {
      //   perPage: 3,
      // },
      // 1200: {
      //   perPage: 5,
      // },
      2560: {
        perPage: 2,
      },
    }
  }).mount();
}

if (splideProperties) {

  new Splide('#properties', {
    type: 'loop',
    perPage: 3,
    // autoplay: 'true',
    focus: 'center',
    // arrows: false,
    breakpoints: {
      640: {
        perPage: 1,
      },
      768: {
        perPage: 2,
      },
      // 1200: {
      //   perPage: 3,
      // },
      2560: {
        perPage: 3,
      },
    }
  }).mount();
}




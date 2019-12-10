$(document).ready(function () {

  $('form').each(function () {
    const form = $(this);
    const fileInput = $(this).find('input[type="file"]');
    const fileSpan = $(this).find('input[type="file"] ~ span');
    const fileText = 'Прикрепить файл';
    const phone = $(this).find('input[name*="phone"]');
    const privacyLabel = $(this).find('label[class*="privacy"]');
    const privacyInput = privacyLabel.find('input');

    privacyLabel.on('click', function () {
      if (privacyInput.attr('type') == 'checkbox') {
        privacyInput.is(':checked')
          ? privacyLabel.addClass('active')
          : privacyLabel.removeClass('active');
      } else if (privacyInput.attr('type') == 'radio') {
        privacyInput.is(':checked')
          ? (privacyLabel.siblings().removeClass('active'), privacyLabel.addClass('active'))
          : privacyLabel.removeClass('active');
      }
    });

    phone.each(function () {
      $(this).inputmask("+7 (999) 999-99-99");
    });

    fileInput.on('change', function () {
      const fileVal = $(this).val().replace(/.+[\\\/]/, '');
      fileVal !== '' ? fileSpan.text(fileVal) : fileSpan.text(fileText);
    });

    form.on('submit', function () {
      fileSpan.text(fileText);
      privacyLabel.removeClass('active');
    });
  });

  $(window).scroll(function () {
    $(this).scrollTop() > 600 ? $('#top').fadeIn(500) : $('#top').fadeOut(500);
  });

  $('#top').click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
  });

  $('.menu-toggle .icon-toggle').click(function () {
    $(this).toggleClass('active');
    $('.main-menu-items').slideToggle();
    return false;
  });

  $('inline').magnificPopup({
    type: 'inline',
    removalDelay: 500,
    mainClass: 'mfp-fade',
  });

  $('.portfolio-items').each(function () {
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-fade',
      gallery: {
        enabled: true
      }
    });
  });

  $(document).on('click', '.goto', function (event) {
    event.preventDefault();
    let id = $(this).attr('href');
    let top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 500);
  });

  $('.select').each(function () {
    const selectBlock = $(this);
    const selectCurrent = selectBlock.find('div[class*="__current"]');
    const selectItems = selectBlock.find('ul');
    const selectItem = selectBlock.find('li');
    const input = selectBlock.find('input');

    selectBlock.on('click', function () {
      selectItems.slideToggle(200);
      selectBlock.toggleClass('active');
      $(this).hasClass('active')
        ? selectBlock.css('border-radius', '4px 4px 0 0')
        : selectBlock.css('border-radius', '4px');
    });

    selectItem.on('click', function () {
      const html = $(this).html();
      const text = $(this).text();
      selectCurrent.html(html);
      input.val(text);
    });
  });

  $('.main-menu').append('<div class="main-menu-hover"></div>');

  $('.main-menu__item').on('mouseover', function () {
    let pseudoWidth = $(this).innerWidth();
    let pseudoHeight = $(this).innerHeight();
    let pseudoOffsetLeft = $(this).position().left;
    let pseudoOffsetTop = $(this).position().top;
    $('.main-menu-hover').css({
      'width': pseudoWidth + 'px',
      'height': pseudoHeight + 'px',
      'left': pseudoOffsetLeft + 'px',
      'top': pseudoOffsetTop + 'px',
      'opacity': 1,
    });
  });

  $('.main-menu__item').on('mouseout', function () {
    $('.main-menu-hover').css('opacity', '0');
  });

  $('.specials-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev fas fa-chevron-left"></button>',
    nextArrow: '<button class="slick-next fas fa-chevron-right"></button>',
  });

  $('.portfolio-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev fas fa-chevron-left"></button>',
    nextArrow: '<button class="slick-next fas fa-chevron-right"></button>',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  if ($(window).width() <= 1100) {
    $('.clients-items').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      prevArrow: '<button class="slick-prev fas fa-chevron-left"></button>',
      nextArrow: '<button class="slick-next fas fa-chevron-right"></button>',
      responsive: [
        { breakpoint: 1100, settings: { slidesToShow: 4 } },
        { breakpoint: 900, settings: { slidesToShow: 3 } },
        { breakpoint: 700, settings: { slidesToShow: 2 } },
        { breakpoint: 500, settings: { slidesToShow: 1 } }
      ]
    });
  }

  wow = new WOW(
    {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    }
  );
  wow.init();

});

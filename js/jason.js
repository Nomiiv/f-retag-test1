$(function () {
  $(".multiple-items").slick({
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:
      "<img class='a-left control-c prev slick-prev' src='pic/left.png'>",
    nextArrow:
      "<img class='a-right control-c next slick-next' src='pic/right.png'>",
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          arrows: true,
          slidesToShow: 5,
          centerMode: true,
          variableWidth: true
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true
        },
      },
    ],
  });
});

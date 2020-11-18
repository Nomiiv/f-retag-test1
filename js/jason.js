$(function () {
  $(".multiple-items").slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    prevArrow:
      "<img class='a-left control-c prev slick-prev' src='pic/left.png'>",
    nextArrow:
      "<img class='a-right control-c next slick-next' src='pic/right.png'>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});

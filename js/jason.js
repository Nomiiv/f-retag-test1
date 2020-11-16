$(function () {
  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: "0",
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:
      "<img class='a-left control-c prev slick-prev' src='pic/left.png'>",
    nextArrow:
      "<img class='a-right control-c next slick-next' src='pic/right.png'>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0",
          slidesToShow: 1,
        },
      },
    ],
  });
});

$(function () {});

$(".hambug_btn").on("click", function () {
  $(".toggle-menu__wrap").removeClass("hidden");
});

$(".toggle_close").on("click", function () {
  $(".toggle-menu__wrap").addClass("hidden");
});

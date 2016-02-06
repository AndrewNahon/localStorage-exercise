$(function() {

  lastTabs();
  lastBackground();
  $("textarea").val(localStorage.getItem("text"));

  $("#tabs a").on("click", function(e) {
    e.preventDefault();
    var $target = $(e.target),
        index = $target.attr("data-id");
    $(".active").removeClass("active");
    $target.addClass("active");
    $("p:visible").toggle();
    $("p[data-id=" + index +"]").toggle();
    setTab(index);
  });

  $("[type=radio]").on("change", function(e) {
    var $target = $(e.target),
    color = $target.val();
    $("body").css({"background": color});

    localStorage.setItem("background", color)
  });

  $(window).on("unload", function() {
    localStorage.setItem("text", $("textarea").val());
  });

  function setTab(index) {
    localStorage.setItem("tab", index)
  }

  function lastTabs() {
    var index = localStorage.getItem("tab") || 1;
    $(".active").removeClass("active");
    $("a[data-id=" + index + "]").addClass("active");
    $("p:visible").toggle();
    $("p[data-id=" + index +"]").toggle();
  }

  function lastBackground() {
    var color = localStorage.getItem("background") || "black";
    $("input[value=" + color + "]").prop("checked", true);
    $("body").css({"background": color});
  }
});
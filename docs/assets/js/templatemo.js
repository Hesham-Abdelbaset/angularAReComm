/*


*/

"use strict";
// close the navbar
$(document).ready(function () {
  $(function () {
    $(document).on("click", (e) => {
      let navLinksContainer = $("nav.navbar, nav ul.nav.navbar-nav");
      if (
        !navLinksContainer.is(e.target) &&
        navLinksContainer.has(e.target).length === 0
      ) {
        $("button.navbar-toggler").addClass("collapsed");
        $("#templatemo_main_nav").addClass("collapsed").removeClass("show");
        $("button.navbar-toggler").attr("aria-expanded", "false");
      }

      // console.log("click");
    });
  });

  // Accordion
  var all_panels = $(".templatemo-accordion > li > ul").hide();

  $(".templatemo-accordion > li > a").click(function () {
    console.log("Hello world!");
    var target = $(this).next();
    if (!target.hasClass("active")) {
      all_panels.removeClass("active").slideUp();
      target.addClass("active").slideDown();
    }
    return false;
  });
  // End accordion

  // Product detail
  $(".product-links-wap a").click(function () {
    var this_src = $(this).children("img").attr("src");
    $("#product-detail").attr("src", this_src);
    return false;
  });
  $("#btn-minus").click(function () {
    var val = $("#var-value").html();
    val = val == "1" ? val : val - 1;
    $("#var-value").html(val);
    $("#product-quanity").val(val);
    return false;
  });
  $("#btn-plus").click(function () {
    var val = $("#var-value").html();
    val++;
    $("#var-value").html(val);
    $("#product-quanity").val(val);
    return false;
  });
  $(".btn-size").click(function () {
    var this_val = $(this).html();
    $("#product-size").val(this_val);
    $(".btn-size").removeClass("btn-secondary");
    $(".btn-size").addClass("btn-success");
    $(this).removeClass("btn-success");
    $(this).addClass("btn-secondary");
    return false;
  });
  // End roduct detail
});

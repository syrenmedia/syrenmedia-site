$(document).ready(function() {
  $(".fa").click(function() {
    $(this).parent().parent().find("ul").toggle("slow");
    $(this).parent().parent().find("hr").toggle("slow");
    $(this).toggleClass("fa-angle-double-down");
  });
});


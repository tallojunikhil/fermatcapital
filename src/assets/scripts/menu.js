/**
 * Created by penug on 5/1/2017.
 */
function initMenu() {
  $('#menu ul').hide();
  $('#menu ul').children('.current').parent().show();
  //$('#menu ul:first').show();
  $('#menu li a').click(
    function () {
      var checkElement = $(this).next();
      if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
        return false;
      }
      if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
        $('#menu ul:visible').slideUp('normal');
        checkElement.slideDown('normal');
        return false;
      }
    }
  );
}
$(document).ready(function () {
  $("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });
  $("#menu-toggle-2").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled-2");
    $('#menu ul').hide();

    console.log('clicked..');
  });

  // $('#sandbox-container .input-group.date').datepicker({
  //   maxViewMode: 3,
  //   todayBtn: "linked",
  //   autoclose: true,
  //   clearBtn: true,
  //   orientation: "bottom left",
  // }).on('change', function () {
  //   $('.datepicker').hide();
  //   $('#startDate').attr('value', $("#sandbox-container").find("input").val());
  // });

  initMenu();
});

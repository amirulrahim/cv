// window.alert(
//   "Please note that this website currently only support web browsers."
// );

function scroll_to_div(div_id) {
  $("html,body").animate(
    {
      scrollTop: $("#" + div_id).offset().top,
    },
    "slow"
  );
}

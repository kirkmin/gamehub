window.Gamehub = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Gamehub.Routers.Router({
      $rootEl: $('#main')
    });
    Backbone.history.start();
  }
};
//background movement
$(document).ready(function() {
  $(document).mousemove(function(event) {
    TweenLite.to($(".bg-move"),
    .5, {
      css: {
        backgroundPosition: "" + parseInt(event.pageX / 80) + "px " + parseInt(event.pageY / '50') + "px, " + parseInt(event.pageX / '150') + "px " + parseInt(event.pageY / '75') + "px, " + parseInt(event.pageX / '150') + "px " + parseInt(event.pageY / '150') + "px",
      "background-position": parseInt(event.pageX / 80) + "px " + parseInt(event.pageY / 50) + "px, " + parseInt(event.pageX / 150) + "px " + parseInt(event.pageY / 75) + "px, " + parseInt(event.pageX / 150) + "px " + parseInt(event.pageY / 150) + "px"
      }
    })
  })
})
//search menu dropdown
// $(document).ready(function () {
//   $('.menu-close-icon').click(function (e) {
//     e.preventDefault();
//     $('#side-menu').animate({ left: '-250px', top: '-1000px' });
//   });
//   $('.menu-open-icon').click(function (e) {
//     e.preventDefault();
//     $('#side-menu').animate({ left: '0px', top: '0px' });
//   });
// });

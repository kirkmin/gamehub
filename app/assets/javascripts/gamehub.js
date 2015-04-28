window.Gamehub = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $root = $('#main');
    this.currentUserId = $root.data('current-user');
    new Gamehub.Routers.Router({
      $root: $root
    });
    Backbone.history.start();
  },

  addEvent: function (elem, type, eventHandle) {
    if (elem === null || typeof(elem) == 'undefined') return;
    if ( elem.addEventListener ) {
      elem.addEventListener( type, eventHandle, false );
    } else if ( elem.attachEvent ) {
      elem.attachEvent( "on" + type, eventHandle );
    } else {
      elem["on"+type]=eventHandle;
    }
  },

  guestLogIn: function () {
    $username = $("#email");
    $password = $("#password");
    $button = $(".submit");
    this.typewriter($username, "kirk@lol.com", function () {
      this.typewriter($password, "awesome", function () {
        $button.click();
      });
    }.bind(this));
  },

  typewriter: function ($el, string, fn) {
    $el.val();
    this.type(0, string, $el, fn);
  },

  type: function (char, content, $el, fn) {
    if (char < content.length) {
      var typingSpeed = 200;
      setTimeout(function(){
        char++;
        var type = content.substring(0, char);
        $el.val(type);
        this.type(char, content, $el, fn);
      }.bind(this), typingSpeed);
    } else {
      $el.val(content)
      fn.call();
    }
  },
};
//background movement
$(document).ready(function() {
  $(document).mousemove(function(event) {
    Gamehub.addEvent($(".guest")[0], "click", Gamehub.guestLogIn.bind(Gamehub));
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

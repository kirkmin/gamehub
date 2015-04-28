Gamehub.Views.BlogShow = Backbone.View.extend({
  className: 'blog-show',

  template: JST['blogs/show'],

  events: {
    'click .delete-post': 'deletePost',
    // "mouseenter .vids" : "videoPlay",
    // "mouseleave .vids" : "videoStop"
  },

  // videoPlay: function (event) {
  //   debugger
  //   event.currentTarget.autoplay = true
  // },
  //
  // videoStop: function (event) {
  //   event.currentTarget.autoplay = false
  // },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.posts(), 'remove', this.render)
  },

  render: function () {
    var posts = this.model.posts();
    var content = this.template({
      posts: posts,
      blog: this.model
    });
    this.$el.html(content);
    return this;
  },

  deletePost: function (event) {
    var $target = $(event.currentTarget);
    var post = this.model.posts().get($target.attr('data-post-id'));
    post.destroy();
  }
})

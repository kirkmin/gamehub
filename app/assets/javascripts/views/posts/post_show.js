Gamehub.Views.PostShow = Backbone.View.extend({
  className: 'post-show',

  template: JST['posts/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync change', this.render);
  },

  render: function () {
    var comments = this.model.comments();
    var content = this.template({
      post: this.model
    });
    this.$el.html(content);
    return this;
  },
})

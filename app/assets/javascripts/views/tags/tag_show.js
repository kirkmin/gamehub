Gamehub.Views.TagShow = Backbone.View.extend({
  className: 'tag-show',

  template: JST['tags/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync change', this.render);
  },

  render: function () {
    var content = this.template({
      tag: this.model
    });
    this.$el.html(content);
    return this;
  },
})

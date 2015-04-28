Gamehub.Views.BlogIndexItem = Backbone.View.extend({
  template: JST['blogs/item'],

  render: function (all) {
    var content = this.template ({
      blog: this.model,
      all: all
    });
    this.$el.html(content);
    return this;
  }
})

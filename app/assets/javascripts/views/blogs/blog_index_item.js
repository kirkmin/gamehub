Gamehub.Views.BlogIndexItem = Backbone.View.extend({
  template: JST['blogs/item'],

  render: function () {
    var content = this.template ({
      blog: this.model
    });
    this.$el.html(content);
    return this;
  }
})

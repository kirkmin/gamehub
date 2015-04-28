Gamehub.Views.BlogForm = Backbone.View.extend({
  tagName: 'form',
  template: JST['blogs/form'],

  events: {
    'click button': 'submit'
  },

  render: function () {
    var content = this.template({
      blog: this.model
    })
    this.$el.html(content);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON(),
        that = this;
    this.model.save(attrs, {
      success: function () {
        that.collection.add(that.model, { merge:true });
        Backbone.history.navigate("", { trigger: true });
      }
    });
  }
});

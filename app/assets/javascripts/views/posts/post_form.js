Gamehub.Views.PostForm = Backbone.View.extend({
  tagName: 'form',
  template: JST['posts/form'],

  events: {
    'click .submit-post': 'submit'
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var that = this;
    var tag_string = [];
    var tags = this.model.tags().models
    tags.forEach( function (tag) {
      tag_string.push(tag.get("label"))
    });
    var content = this.template({
      tag_string: tag_string.join(", "),
      post: this.model
    });
    this.$el.html(content);
    var $filepickerInput = this.$("input[type=filepicker]").first();
    filepicker.constructWidget($filepickerInput);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON();
    var that = this;
    this.model.save(attrs, {
      success: function () {
        Backbone.history.navigate("blogs/" + that.model.get("blog_id") + "/posts/" + that.model.id, { trigger: true });
      }
    });
  }
});

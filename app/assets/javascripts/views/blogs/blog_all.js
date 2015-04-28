Gamehub.Views.BlogsAll = Backbone.CompositeView.extend({
  template: JST['blogs/all'],

  initialize: function () {
    var that = this;
    this.collection.forEach( function (blog) {
      that.addIndexItem(blog)
    });
    this.listenTo(this.collection, 'sync add change remove reset', this.render);
    this.listenTo(this.collection, 'add', this.addIndexItem);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addIndexItem: function (blog) {
    var that = this;
    var view = new Gamehub.Views.BlogIndexItem({
      model: blog
    });
    that.addSubview('#blogs-all', view);
  },

  destroyBlog: function (event) {
    var $target = $(event.currentTarget);
    var blog = this.collection.get($target.attr('data-id'));
    blog.destroy();
  }
});

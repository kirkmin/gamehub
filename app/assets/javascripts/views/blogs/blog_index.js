Gamehub.Views.BlogsIndex = Backbone.CompositeView.extend({
  template: JST['blogs/index'],

  events: {
    'click .delete': 'destroyBlog'
  },

  initialize: function () {
    var that = this;
    this.collection.forEach( function (blog) {
      that.addIndexItem(blog)
    });
    this.listenTo(this.collection, 'add', this.addIndexItem);
    this.listenTo(this.collection, 'remove', this.removeIndexItem);
    this.listenTo(this.collection, 'sync add change remove reset', this.render);
  },

  removeIndexItem: function (blog) {
    var that = this;
    var view = new Gamehub.Views.BlogIndexItem({
      model: blog
    });
    that.removeSubview('#blogs-index', view);
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
      model: blog,
    });
    that.addSubview('#blogs-index', view, "index");
  },

  destroyBlog: function (event) {
    var $target = $(event.currentTarget);
    var blog = this.collection.get($target.attr('data-id'));
    blog.destroy();
  }
})

Gamehub.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    // var searchView = new Gamehub.Views.SearchView();
    // $('#add-dropdown').append(searchView.render().$el);
    this.$root = options.$root;
  },

  routes: {
    '': 'indexBlog',
    'blogs/all': 'allBlog',
    'blogs/new': 'newBlog',
    'blogs/:id': 'showBlog',
    'blogs/:id/edit': 'editBlog',
    'blogs/:blog_id/posts/new': 'newPost',
    'blogs/:blog_id/posts/:id': 'showPost',
    'blogs/:blog_id/posts/:id/edit': 'editPost',
    'tags/:id' : 'showTag'
  },

  allBlog: function () {
    Gamehub.Collections.blogs.fetch({data: {all: true}});
    var allView = new Gamehub.Views.BlogsAll({
      collection: Gamehub.Collections.blogs
    });
    this._swapView(allView);
  },

  showTag: function (id) {
    var tag = new Gamehub.Models.Tag({ id: id })
    tag.fetch();

    var showTagView = new Gamehub.Views.TagShow({
      model: tag
    });
    this._swapView(showTagView);
  },

  editPost: function (blog_id, id) {
    var post = new Gamehub.Models.Post({ id: id, blog_id: blog_id })
    post.fetch();

    var editPostView = new Gamehub.Views.PostForm({
      model: post
    });
    this._swapView(editPostView);
  },

  newPost: function (blog_id) {
    var post = new Gamehub.Models.Post( { blog_id: blog_id });

    var newPostView = new Gamehub.Views.PostForm({
      model: post
    });
    this._swapView(newPostView);
  },

  showPost: function (blog_id, id) {
    var post = new Gamehub.Models.Post({ id: id, blog_id: blog_id })
    post.fetch();

    var showPostView = new Gamehub.Views.PostShow ({
      model: post
    });
    this._swapView(showPostView);
  },

  indexBlog: function () {
    var collection = new Gamehub.Collections.Blogs()
    collection.fetch();
    var indexView = new Gamehub.Views.BlogsIndex({
      collection: collection
    });
    this._swapView(indexView)
  },

  showBlog: function (id) {
    var blog = Gamehub.Collections.blogs.getOrFetch(id);
    var showView = new Gamehub.Views.BlogShow({
      model: blog
    });
    this._swapView(showView);
  },

  newBlog: function () {
    var blog = new Gamehub.Models.Blog();
    var formView = new Gamehub.Views.BlogForm({
      model: blog,
      collection: Gamehub.Collections.blogs
    })
    this._swapView(formView)
  },

  editBlog: function (id) {
    var blog = Gamehub.Collections.blogs.getOrFetch(id);
    var formView = new Gamehub.Views.BlogForm({
      model: blog,
      collection: Gamehub.Collections.blogs
    })
    this._swapView(formView)
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$root.html(view.render().$el);
  }
})

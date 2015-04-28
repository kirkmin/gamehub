Gamehub.Collections.Blogs = Backbone.Collection.extend({
  model: Gamehub.Models.Blog,
  url: 'api/blogs',

  comparator: function (blog) {
    return -blog.get('updated_at')
  },

  getOrFetch: function (id) {
    var blog = this.get(id);

    if (!blog) {
      blog = new Gamehub.Models.Blog({ id: id });
      blog.fetch({
        success: function () {
          this.add(blog);
        }.bind(this)
      });
    } else {
      blog.fetch();
    }

    return blog;
  }
});

Gamehub.Collections.blogs = new Gamehub.Collections.Blogs();

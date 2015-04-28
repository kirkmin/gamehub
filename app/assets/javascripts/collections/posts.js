Gamehub.Collections.Posts = Backbone.Collection.extend({
  model: Gamehub.Models.Post,
  url: 'api/posts',

  comparator: function (post) {
    return -post.get('updated_at')
  },

  initialize: function (models, options) {
    this.blog = options.blog;
    this.tag = options.tag;
  },

  getOrFetch: function (id) {
    var post = this.get(id);

    if (!post) {
      post = new Gamehub.Models.Post({ id: id });
      post.fetch({
        success: function () {
          this.add(post);
        }.bind(this)
      });
    } else {
      post.fetch();
    }

    return post;
  }
});

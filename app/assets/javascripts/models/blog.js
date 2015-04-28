Gamehub.Models.Blog = Backbone.Model.extend({
  urlRoot: 'api/blogs',

  posts: function () {
    if (!this._posts) {
      this._posts = new Gamehub.Collections.Posts([], { blog: this });
    };
    return this._posts;
  },

  parse: function (payload) {
    if (payload.posts) {
      this.posts().set(payload.posts, { parse: true });
      delete payload.posts;
    }

    return payload;
  }
})

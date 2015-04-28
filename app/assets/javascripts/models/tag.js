Gamehub.Models.Tag = Backbone.Model.extend({
  urlRoot: "api/tags",

  posts: function () {
    if (!this._posts) {
      this._posts = new Gamehub.Collections.Posts([], { tag: this })
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

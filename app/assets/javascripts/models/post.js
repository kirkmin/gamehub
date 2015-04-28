Gamehub.Models.Post = Backbone.Model.extend({
  urlRoot: 'api/posts',

  tags: function () {
    if (!this._tags) {
      this._tags = new Gamehub.Collections.Tags([], { post: this })
    };
    return this._tags
  },

  comments: function () {
    if (!this._comments) {
      this._comments = new Gamehub.Collections.Comments([], { post: this })
    };
    return this._comments
  },

  parse: function (payload) {
    if (payload.tags) {
      this.tags().set(payload.tags, { parse: true });
      delete payload.tags;
    }
    if (payload.comments) {
      this.comments().set(payload.comments, { parse: true });
      delete payload.comments;
    }

    return payload;
  }
})

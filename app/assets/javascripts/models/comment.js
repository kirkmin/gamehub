Gamehub.Models.Comment = Backbone.Model.extend({
  urlRoot: 'api/blogs',

  comments: function () {
    if (!this._comments) {
      this._comments = new Gamehub.Collections.Comments([], { post: this })
    };
    return this._comments
  },

  parse: function (payload) {
    if (payload.comments) {
      this.comments().set(payload.comments, { parse: true });
      delete payload.comments;
    }

    return payload;
  }
})

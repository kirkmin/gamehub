Gamehub.Collections.Comments = Backbone.Collection.extend({
  url: 'api/comments',
  model: Gamehub.Models.Comment,

  comparator: function (blog) {
    return -blog.get('updated_at')
  },

  initialize: function (models, options) {
    this.parent = options.parent;
  },

  getOrFetch: function (id) {
    var comment = this.get(id);

    if (!comment) {
      comment = new Gamehub.Models.Comment({ id: id });
      comment.fetch({
        success: function () {
          this.add(comment);
        }.bind(this)
      });
    } else {
      comment.fetch();
    }

    return comment;
  }
})

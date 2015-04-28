Gamehub.Collections.Tags = Backbone.Collection.extend ({
  url: 'api/tags',
  model: Gamehub.Models.Tag,

  comparator: function (tag) {
    return -tag.get('updated_at')
  },

  initialize: function (models, options) {
    this.post = options.post;
  },

  getOrFetch: function (label) {
    var tag = this.get({label: label});

    if (!tag) {
      tag = new Gamehub.Models.Tag({ label: label });
      tag.fetch({
        success: function () {
          this.add(tag);
        }.bind(this)
      });
    } else {
      tag.fetch();
    }

    return tag;
  }
})

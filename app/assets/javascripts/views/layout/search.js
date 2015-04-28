// Gamehub.Views.SearchView = Backbone.View.extend({
//   events: {
//     'click .filter-choice' : 'switchFilter',
//     'click .submit-search' : 'search'
//   },
//
//   search: function (event) {
//     event.preventDefault();
//     var $target = $(event.currentTarget)
//     var targetValue = $target.val()
//     if (this._filter === "tags") {
//       var tag = new Backbone.Collections.Tags().getOrFetch(targetValue)
//       Backbone.history.navigate("tags/" + fag.id)
//     } else if (this._filter === "post") {
//       var post = new Backbone.Models.Post({title: targetValue})
//       post.fetch({
//         success: function () {
//           Backbone.history.navigate("")
//         },
//       })
//     } else if (this._filter === "blog") {
//       var blog = new Backbone.Models.Blog({title: targetValue})
//       blog.fetch({
//         success: function () {
//           Backbone.history.navigate("")
//         }
//       })
//     }
//   },
//
//   switchFilter: function (event) {
//     event.preventDefault();
//     var $target = $(event.currentTarget);
//     this._filter = $target.attr({'data-id'})
//     //change placeholder of search to Search by <%= this._filter %>
//   },
// })

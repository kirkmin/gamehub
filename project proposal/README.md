# GameHub

[heroku link] [will be there at the end first day]

## Minimum Viable Product
GameHub is a clone of twitch.tv where they can:

- [X] Create accounts
- [X] Log in
- [X] Upload videos/articles (post)
- [X] Tag their own uploaded content
- [ ] Subscribe to user and get feeds
- [ ] Search for content by title
- [X] Search for content by tag

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Basic Blogs and Heroku  (1 day)
Auth done.

[Details][phase-one]

### Phase 2: JSON API and First Backbone Views (2 days)
After JSON API, it's Backbone time. After getting the API routes to work and
display JSON, I will then add Backbone models, collections, views and router to
make my GameHub a single page app. Users should be able to log in and create
their own blogs and be able to create, edit and delete simple text posts.
[Details][phase-two]

### Phase 3: Editing and Displaying Posts (2 days)
Filepicker is key. My app is going to be all about uploading content. I will
integrate Filepicker or the like to enable users to upload videos and images
on top of their texts. Markdown editor would be a nice touch, but will be
secondary to the uploading feature. The uploaded content should be stored and
able to be fetched to be viewed by other users.

[Details][phase-three]

### Phase 4: User Feeds (2 days)
Enable Users to express reactions. I will clone aspects from reddit and other
blogs in that users will be able to leave comments on posts and maybe even other
comments (nested comments?). For subscriptions, I will need a separate Backbone
collection that fetches specific models. Not sure if I should add new route or
recycle PostsIndex View with a different collection. In addition to the
subsciption button, users will also have thumbs up, thumbs down, and middle
finger buttons if time allows.

[Details][phase-four]

### Phase 5: Searching for Blogs and Posts (2 days)
I want to have a search bar on the top, like I would have a navigation bar. It
would be on every page, and may have a radio option that would check if it will
be searching in terms of title, username or tags. I would have to implement
tagging by creating a new table and have correct associations. Each of these
searches will have its own queries. Perhaps I will recycle the PostsIndex by
just replacing the collections.


### Final Phase: Beautify
Presentation is (almost) everything. Pages will need extensive css/backbone
beautification. Backgrounds are a must. Cool gamer fonts are a must. Navigation
bar is a must. Copy Right footer is sort of a must. Any upgrades on top of the
minimum viable product goes here. All leftover time will be used here.

### Bonus Features (TBD)
- [ ] Add site of event on map
- [ ] Search for events around an area
- [ ] Activity history for posts (e.g. likes, reblogs, taggings)
- [ ] Custom urls for blogs
- [ ] 'Thumbs Up' button and counter for `PostShow` view
- [ ] 'Thumbs Down' && 'Middle Finger' button and counter
- [ ] Support for multiple open sessions
- [ ] Avatars

[phase-one]: ./docs/phases/day1.jpg
[phase-two]: ./docs/phases/day2.jpg
[phase-three]: ./docs/phases/day3.jpg
[phase-four]: ./docs/phases/day4.jpg

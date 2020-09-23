# Back-End API Guide
NodeJS Backend for Expat Journal 2

## Login/Register

These are your basic endpoints to access any protected info on the API. You'll need to register a user first and then login to do any other requests. Upon login you'll be given a JWT which you can use in local storage for pulling ing user/post/image data

Base URL
- https://expatjournal-backend.herokuapp.com/

Register URL
- Can do a POST request to this url to create a new user
- https://expatjournal-backend.herokuapp.com/api/auth/register

Login URL - Only requires username and password
- Can do a POST request here to login and retrieve JWT for local storage
- https://expatjournal-backend.herokuapp.com/api/auth/login

## Other Endpoints

All of these endpoints will have full CRUD functionality, meaning you can do GET, POST, PUT, and DELETE to them. I've also allowed you to get by id by supplying the user/post id as well. I've listed all these below for you to make things as easy as possible.

Users
- https://expatjournal-backend.herokuapp.com/api/users
- Can add /:id to the end to grab specific items with a get request. You'll also need to have an id to delete or put anything (so the server knows exactly what it is you're planning to update or delete)

Posts
- https://expatjournal-backend.herokuapp.com/api/posts
- Same deal as the one above, should be able to perform all basic steps from this. Please include an id in the URL where appropriate.

Images
- https://expatjournal-backend.herokuapp.com/api/images
- Same as above, full CRUD functionality here. I've seeded some images as well for you to use

## Seed Data

I've included some post and user seed data, so if you need to do some get requests you'll at least pull in something to display from it. Once you start populating more data with post requests there will be plenty more to pull from.

# devSocialApp

//////////////////////////////////////////////////////////////////////////////
npm i express express-validator bcryptjs config gravatar jsonwebtoken mongoose request

---

So let's do an npm install or I and of course we need Express which is our main web framework for the
backend.
We're going to use something called Express validator for data validation.
So when when we make our poster request to our API if there's fields that need to be there that aren't.
It'll raise an error.
So we'll use that for validation.
Also we need be crypts.
We're going to be crypt J.S. which is used for password encryption.
You never want to store plain plain text passwords in your database.
We're gonna use a package called config for global variables.
We're going to use grab a star for profile avatars how that works is if a user signs up they can use
an email that's associated with a graviton account and it will automatically show their profile image.
OK we need Jason Webb token because we're using JWT to pass along a token for validation.
So where are you going.
We'll be doing that stuff much later but I want to get this stuff installed now.
We're also using Mongoose which is a layer that sits on top of the database so we can interact with
it.
We need request which is just a small module that will allow us to make recall HDP requests to another
API.

And the reason wearing stalling this is for get hub repositories.
We want our profiles to be able to have GitHub repositories listed on them.
So we're going to make that request from our backend so that we can hide our API key and stuff like
that and we can just return the repositories.
And then I think yeah that should be it for the regular dependencies.
So we'll go ahead and install all of those.
/////////////////////////////////////////////////////

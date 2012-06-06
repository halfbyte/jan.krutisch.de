---
title: The Single Page App
layout: post
---

Yesterday, I gave two talks at RailsWayCon in Berlin, probably one of the weirdest Rails related conferences - It's been held as a subconference to the "Webinale", a rather large german conference on all things web. My guts tell me that this subconference had less then 50 visitors. Also, while the list of speakers is only partly impressive (Well, Yehuda is here, that's something, I'd say), the talks were really, really good. So, really, weird mixed signals there.

My [second talk](http://slides.halfbyte.org/rwc2012-the-css-revolution/#1) was recycled from last years codebits, talking about the importance of tooling in the frontend space (specifically Sass, Compass and the Asset pipeline).

My first talk though, which was quite well received I think, was about building single page apps with Rails and backbone.js. It was a relatively high level talk about the things I've learned so far building backbone.js applications.

Since my [slides](http://slides.halfbyte.org/rwc2012-the-single-page-app/) are usually not too useful without the actual talk (sadly, talks at RailsWayCon are not recorded on camera), let me summarize.

<!-- more -->

## Pros

### 1. "Snappiness"

Being a very subjective term, snappiness describes the "feel" of an app. There are no long times waiting for the server to load whole pages. Things are persisted to the server in an asyncronous fashion, not keeping the user from using the app in the meantime. 

Also, doing things asynchronously allow you use what I call "delayed persistence", for example, if a user can resort a list using drag and drop, it might be a good idea to delay the actual call to the server until things have settled down (=user finished sorting) so that we can then persist all the changes at once, not only making the action feeling more "snappier" to the user but also cutting down on requests considerably.

### 2. Mobile apps

Writing a web app that creates a good user experience on a smartphone or a tablet actually makes you use completely new models and modes of interaction. Users want to swipe, pinch, zoom, shake, turn your app and expect it to react on it. This is not really possible without creating an app that does most of the interaction work on the client side. A simple request/response app simply won't cut the butter here.

Also, a more technical thing: If you want to enable the user to install the app (for example on an iPhone or on Android) to the home screen and thus wrapping it up in a standalone webkit which allows you to hide the browser chrome, you're basically forced to write a single page app, because every normal link will end up being opened in the regular mobile Safari (at least on iOS). (Actually you can fake this with an onclick handler on links, but that's a pretty bad hack and will break occasionally)

### 3. Offline Access

If you want to make sure that a user can use your app if no network connection is available (this is especially handy when creating one of those "install to homescreen apps"), you probably need offline storage. Of all the alternatives, DOM storage (or localStorage) is currently, due to Browser compatibility, the only viable option. If you want to use a nice wrapper around all those things with fallbacks and stuff, take a look at [lawnchair](http://brian.io/lawnchair/)

### 4. Clear Boundaries

When building a Rails app the "37signals" way, using jQuery and stuff to partially AJAXify your app, if you're not watching closely, you'll end up with what I like to call the "jQuery mess". Obviously that's not jQuery's fault, but it's relatively hard to find a good structure that gives you testability, maintainability and readability with this approach.

Going all the way and builing your app on top of the various Javascript MVC frameworks makes it a lot easier, because you'll end up with a reasonably well structured app that has clearly defined boundaries that are easy to test, maintain and understand. Also:

### 5. API uniformity

Let' assume you want to build an iPhone app (a native one that is) and maybe later on, even an Android app. If you've build a Javascript MVC based single page app, chances are pretty good that you actually have an API that will server stuff easily consumable by your iPhone app. One API, serving ALL THE CLIENTS!

## Cons

### 1. Search Engines

Bummer. If you are really, really dependent on SEO traffic, you'll probably need to build an app with a more hybrid approach, which will serve some content via static rendering on the server and some content added via Javascript. These are a pain to build currently and you might end up with a lot of duplication (for example having separate templates for server and client)

Also, URLs are a problem, Twitter now will dump the hashbang thing they had going on and generally, using the hashbang proposal from google with will turn #!/halfbyte into ?_escaped_fragment=halfbyte is very much frowned upon. You should at least try to use the pushState API (most JSMVC-Frameworks support this nowadays) which allows you to change the URL in the browser bar without actually reloading the content.

### 2. Leaving the "Rails way"

At least backbone.js (deliberatly so) comes with a lot less structure and convention than your average Rails app. It's something that you need to get used to. There are projects like ember.js which try to re-introduce this to JS MVC development, but most of the time you're likely to be on your own. It's probably a good idea to read a lot of code to get a feeling for how other people solved that problem, the [documentcloud](https://github.com/documentcloud/documentcloud) source being the natural choice. I'll try to compile a list of good books on the subject as well.

### 3. More complexity

Yehuda, on a walk to "The Barn", yesterday claimed that ember.js, at least in it's 1.0 form, will drastically cut down complexity for the developer. Still, you need to take into account that, regardless of how you build your rich client app, these things almost always turn out to be more complex than any simple request/response app or even a slightly "ajaxified" web app. Building complex, asynchronous, snappy, slick apps is a complex process with complex requirements. And almost everything gets more complicated in the process. Error handling? Your connection is down while the user uses your app? In a standard web app the app stops working, but since request/response based apps are usually stateless, a reload of the page when the connection is back will usually fix this (yes, reality can get a bit more complex even here). But if your app manages state and uses XHR extensively to persist data, you want to make sure that your app reacts appropriately to network outages. So implement ALL THE CALLBACKS and have a plan what to do when the network gets down.


### 4. Testing

Building a testsuite that makes you and your team feel comfortable is already hard for normal web apps. With a JS MVC app on top, things get serious, though. You have a completely new class of unit tests (Javascript based, usually need some kind of browser env to run in, even if it's a headless one), you need integration tests to make sure your apps works through all the layers, and you need to test the additional complexity of complex client apps. It's fun, but in a rather complex way.

The technologies to do this right are just evolving but they already get better and better. A few pointers would be to look at qunit, sinon.js, phatom.js, capybara and watch out for buster.js which seems to claim to solve a lot of these problems all in one nice little package.

### 5. Browsers

When building complex browser based client applications, you end up using a lot of very immature technology. CSS3, HTML5 and what ever you want to call it involve lots of weird edge cases in the various browsers. First of all you need to know what your target audience will use as their browsers. This will give you a rough idea what kind of technologies you can actually use. 3d-transformations look really cool, but they have their pitfalls, especially in the mobile field. Watch out for tacking too many fancy backgrounds, box-shadows and stuff like that onto a div that will be moved with a css-transition. Stuff like that. 

## Conclusion

If you are just about to start a problem, and your target is not an obvious target for a single page app (such as a non-native mobile app), you should probably not start by doing a single page app. For most cases it's probably a better idea to start with a simple standard web app, especially if you're planning on building an MVP.

But if you are actually decide that you really want to build a single page app, you will find that while it is a lot more complex than your average rails app, it's also a fun ride that's worth it if only for the experience. Still, make sure that you understand the limits of a single page app and that sometimes hybrid apps are probably the way to go although it's even more complex to pull that off.


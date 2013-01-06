---
title: Premature Abstractions Illustrated
layout: post
---
A lot of the discussion in the Ruby community are revolving around abstractions and when to use/do them and when not to. This is a struggle every developer faces every day, on various levels of, wait for it, abstractions.

It is also something the JavaScript community discusses very often, hotly, with very mixed results. If you look at, for example, the discussions around [backbone.js](http://backbonejs.org/) and all of those add ons like [Marionette](http://marionettejs.com/), you can easily see that this is a topic that can lead to hot blood and unclear results.

Funnily, I recently fell into the "premature abstractions" trap pretty badly myself. I can't share details in code, because it's a yet to be released client project, but the story goes a little something like this (drop the bass):
<!-- more -->
(Note: I shared part of that story on my mailing list for The Single Page App Book in the december post. A list you should subscribe to, of course.)

I spent quite some during october and november last year to develop the code for what I would call an "interactive child book". A website, suitable for tablets and desktop browsers both telling a story and having some interactive elements. It was a joint effort and we were making good progress when, one day, our designer slash illustrator, my dear friend [Benjamin](http://www.nonuts.de/), came in very unhappily and with some bad news: He was afraid that the whole thing wasn't working, really. His main gripe was the very linear, page-by-page navigation that we've built. 

And after some consideration, we all had to agree: It was uninteresting, technologically boring and didn't serve the story we were trying to tell.

After working on this for quite some time, news like these don't go down very well. But, yes, the current version simply sucked. No doubt about that.

Now, with some distance, It's a good idea to look back and try to find out, how we ended up in that unfortunate position. I think the problem was twofold. The main mistake was mine: When we started with the production, I decided very early on to use Middleman as our "production system", a simple means to have niceties like compass, [coffescript](http://coffeescript.org) etc. available. And Middleman, well, it's based on HTML pages, right? So using **pages** as an abstraction for our content made total sense. We added some small animations and even a game to it and hey, it worked. Only, it didn't, really.

The other problem was that we didn't test our results with outside people. And we ourselves were so entrenched in our work that we didn't see the big picture anymore, a problem that is very common and you really have to be careful to avoid that trap.

So, very close to Xmas last year, I cooked up some ideas on how to fix our problem technologically while the other guys (Consisting of Benjamin and the [story experts from the three headed monkeys](http://www.threeheadedmonkeys.com/)) tried to create a more visual storyboard with cues on how to do more complex transitions and how to vary the rhythm of the story both visually and textually.

And I fell into the abstraction trap **again**. Looking at the story board, I cooked up a json representation of the scenes, only to fail at implementing the animation part properly. The typical "design up front" fallacy. Almost always, when you try to come up with a design for something before actually coding, you'll end up with bad code.

So I took this weekend and gave it some more thought. While fetching me a doughnut (Berliner!) from my favourite bakery, it hit me: Do away with as much abstraction as you can, implement some test animations and then build abstractions based on the low level constructs I used to build the test animations.

Now, in my case, I actually used a pretty amazing abstraction to build my low level prototype: Greensocks amazing TimelineMax and TweenMax from their [Animation Platform](http://www.greensock.com/gsap-js/), which is amazing, btw.. It can animate almost any css and element property (and does amazing things like automatically morphing (!) from one css class to another by interpolating with inline styles. All while being extremely performant even on mobile devices. As soon as we're able to push out the project to the public, I'll do a writeup on that software, because it is amazing.

In the end, I had a few hundred lines of JavaScript, css and HTML that were doing exactly what I wanted. My abstraction on top of the GSAP has about a hundred lines of code and already deals with a lot of the cases we'll need. And by leaving out certain high level concepts my original idea had, I gained a lot of flexibility.

Just an hour ago, I finally pushed a branch to our private repo that contained by work of this weekend. And I'm really, really happy with the way this turned out, because I am now very confident that we can deliver an awesome product, even if we only have a few days left.

The lessons I've learned:

* Make sure you have someone on the team or externally available that will keep the critical, outside look at the project, ready to scream and shout if things turn bad.
* Don't let your technical solution influence your design decisions. It's the tool that needs to fit the job, not the other way round.
* Don't build abstractions as long as you have no proven idea on how the levels below that abstraction will look like.


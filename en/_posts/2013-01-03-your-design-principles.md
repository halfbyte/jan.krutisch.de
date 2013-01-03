---
title: Your Design Principles
layout: post
---
A quick show of hands, how many of you have seen [Dave Thomas'](http://pragdave.pragprog.com/) closing keynote at the Scottish Ruby Conf?

For me, [this keynote](http://programme.scottishrubyconference.com/slots/24/video) was one of the most liberating moments of 2012. Why? Because in essence, he was telling me that I wasn't crazy. He was telling my that my gut feelings of what I thought was wrong with the rails community were at least shared by someone who I hold in high regard.

(By the way. If you have never read ["The Pragmatic Programmer"](http://pragprog.com/the-pragmatic-programmer), please do. Really.)

Here's the contents of the slide where Dave made me jump with joy:

> "Good" code is not the only code

Dave said:

> I think there's this increasing tendency in the ruby community  to feel that somehow we're the guardians of "good" programming taste. Right? Everything has to be done right. Everything has to be done using patterns. Everything has to be done using factories and injection and all this other kind of bullshit that I tried to escape when I left the Java world 1999. And what happens? You're bringing it back to me. **STOP!**

Yes, you could say that this resonated with me.
<!-- more -->


#### The Gospel

There is this weird misconception in many developers heads that the works of Uncle Bob Martin and Martin Fowler and the GOF are set in stone. That it is something to be followed religiously and if you don't do that, you're a bad programmer.

Don't get me wrong. There's a lot of valuable information in these books. You are certainly a better programmer if you have read, understood and, (here comes the tricky part) contextualized some of these books. But they are not gospel. They do not apply to every software design problem. They are not always the best solution.

So here's my number one design principle, the only one **I** consider universally applicable to **my** work:

> Get sh\*t done.

Dave Thomas, in his keynote said this:

> …if it works for you, and it is maintainable, then it's good.

Which makes an important point: "Getting sh\*t done" means that you should also be able to get sh\*t done in two years or a few hundred commits down the line.

So, yes, Rails controllers **do** violate the SRP, but for the most part, they get sh\*t done.

And that's the thing with rails: Web development with rails is so efficient not despite the fact the rails core team chooses to ignore a lot of OO design principles, but often just **because** it chooses to do so.

#### Oh the complexity

Now, one of the biggest gripes people often have with large rails codebases are the tests. The source for their gripes usually is test runtime, which is a valid concern. Software that is hard to test is by definition not very maintainable, at least in my book. But here starts the rabbit hole descent:

Because then you find out that Rails' unit tests are not really unit tests. Tests involving ActiveRecord often hit the database, something that Uncle Bob would probably want to shoot you for. And there you go, suddenly you discover that the rails codebase has all kind of ugly coupling going on that makes it really hard to test things in isolation. Because testing things in isolation makes tests fast.

And there is absolutely nothing wrong with that. This is a huge problem for larger codebases and test suites that run several minutes (if you are lucky) are a pain in the arse to work with.

What you do forget, though, if you argue against rails here, is that this is a deliberately chosen tradeoff. Because of this very bad tight coupling, you can do things in rails with a minimum amount of code in a few hours that takes ages in other technologies. If you look at all the decisions the rails core team made over the last years, in the end practical solutions that work almost always trumped design principles. You might not like it, but that's how Rails rolls.

But, well, that statement doesn't really fix your problem with that huge codebase, right?

#### More than one way

Right. If your codebase starts to grow beyond the limits of what's acceptable from a test run time perspective, you do have a serious problem that needs to be fixed. And the problem only begins with test run time, because usually that's just a very good indicator for general complexity in your app.

The gospel dictates that you should use Design Patterns and apply design principles to give you an idea to improve the code base. Decoupling things so that you can test things in isolation. Services, Presenters, Concerns, whatever. And that is a fine strategy. But by far not the only one.

Here's something to think about first:

Why did your code base grow like that? Do you really need all that code? Did you relentlessly refactor and trim your code where possible? Do your users really use all of that app? Can you deactivate, then delete some code?

I'm asking this because I know a lot of examples where the complexity of a codebase was much more the result of a relentlessly pushed forward feature creep (hey, all those product managers need to do something, right?) than actual business requirements.

If you are in a situation like this, there are two solutions: Trying to push back, maybe by constantly asking a few "whys" before accepting a feature into the process. Or accepting that this environment will inherently produce complexity and then applying whatever strategy necessary to deal with that.

But instead of completely giving up on rails' conventions and niceties as a tradeoff for a "better" design, what about trying to extract parts of your app as external services that can be built and tested independently? Bringing each of those apps back to a level of complexity that better fits rails' conventions and assumptions?

There's usually more than one way, that's all I'm trying to say.

#### Complex things are complex

Because in the end, regardless of how hard you try, by ruthlessly applying OOP principles to your Rails app, you might actually make things more complicated. In a million ways. Starting with having to find common code conventions with your team, something that is a lot easier when you can take the rails conventions for granted. Also, while the resulting code hopefully is less complex on the inside (mostly: less coupling), it will be, at first, way more complex from the outside. Just take a look at the common examples of refactoring a rails controller into a class based construct. A lot more code to scan (less code is a value in itself, peeps), even if the code is more idiomatic.

Again, don't get me wrong: That might be the only solution for **your** case that will actually gonna fix **your** problems. Sometimes requirements and solutions are just that: complex.

Before that, though, the wrongly named ActiveRecord and the wrongly named Concern and the wrongly named unit tests and the wrongly named functional tests, all weirdly coupled together in a big freaking mess, carried you a long, long way.

**Don't you dare to forget that.**

From what I can see, DHH and the rest of the core team don't care so much about naming, but they do care a great deal about "getting sh\*t done".

And that's why I still love working with rails after now close to 8 years.

There simply is no alternative solution that is as pure as you would like Rails to be that is as effective to get sh\*t done (for the specific use case of database backed web applications, that is). Indeed if you look at other frameworks that have similar capabilities in other languages, the pureness of their OO approach is usually not their biggest selling point.

Don't make the mistake of thinking that this is just because nobody tried hard enough. You would make a fool out of yourself.

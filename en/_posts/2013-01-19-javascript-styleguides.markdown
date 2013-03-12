---
title: JavaScript Styleguides
layout: post
---
As an author of a soon-to-be-published book on JavaScript applications, I had to come up with a coding style to use in the examples I have in the book. So I wrote this article to explain my way of thinking about JavaScript coding styles.

Having said that, the JavaScript community if there's such a thing, has a few elements that leave me baffled every time. One of them is the battle over coding styles.

One particularly curious example, that also often gets cited, is the [npm styleguide](https://npmjs.org/doc/coding-style.html). So to explain why my JavaScript coding style looks as old fashioned and C-Like, let's look at this extreme example and why I don't follow it.

<!-- more -->
I once made fun of the proposed semicolon-first, comma-first style at a lightning talk at last years [Railsberry](http://railsberry.com), but of course if someone comes up with such a weird, uncommon proposal (well, as it seems, it's not so uncommon in the node.js world, but in general, JavaScript doesn't get written that way a lot, I guess), it makes sense to take a look at the rationale behind it.

> npm's coding style is a bit unconventional. It is not different for difference's sake, but rather a carefully crafted style that is designed to reduce visual clutter and make bugs more apparent.

There is something to be said about the "make bugs more apparent" part, especially with the comma/semicolon first approach. I do tend to forget commas a lot, especially when configuring stuff in JavaScript using the object notation syntax. I must admit, though, that it's not bothering me as much as it should - I usually find these errors quite easily and as annoying as it sometimes is to make an extra roundtrip, it happens so seldom that I am not willing to sacrifice something else, something that I would like to dub the "aesthetics of language": Punctuation, when writing in roman literals, belongs to the end of the sentence (or, in the case of a comma, the end of a section of a sentence). It's how we consume written text. We start learning that stuff, or at least most of us these days, at an age of 4-6. We spend at least 10-20 years using language this way before we first make contact with these so called "programming languages".

Here's the example from the npm styleguide regarding comma first:

{% highlight javascript %}
var magicWords = [ "abracadabra"
                 , "gesundheit"
                 , "ventrilo"
                 ]
  , spells = { "fireball" : function () { setOnFire() }
             , "water" : function () { putOut() }
             }
  , a = 1
  , b = "abc"
  , etc
  , somethingElse

{% endhighlight %}

The array example actually looks visually pleasing, but everything falls apart after that pretty quickly. For one, the stand alone comma at the beginning of a line just makes me cringe. This does not happen in normal language. On the other hand, the array literal in most programming languages **is** modelled after something that we use in normal language every day, the comma separated list. Add flour, water, sugar, two eggs, stirr quickly.

So, while the CF syntax does have a few technical benefits, what gets completely lost here is the connection of our programming languages to, well, our languages, which doesn't only make me cringe, which is bad enough, but it also is, by the way our brains are wired by using normal written language every day for most part of our life, way harder to parse. I don't have real scientific proof for that, of course, only my anecdotal evidence.

So let's get to the semicolons real quick. In npm code, semicolons are to be avoided at any cost. Now, this is interesting. For some reason, JavaScript has this thing called Automatic Semicolon Insertion, or ASI. As you can see in the npm styleguide, there are a few situations where ASI fails, because it cannot reliably detect boundaries between statements. The npm statement lists 5 exceptions to the "no semicolons" rule and in the end you might end up with code like this:

{% highlight javascript %}
;(x || y).doSomething()
;[a, b, c].forEach(doSomething)

{% endhighlight %}

Again, a pretty bad violation of normal punctuation rules, but understandable if you hate the visual clutter created by semicolons at the end of statements. Which, I'm sorry, I can't understand. Yes, I do love me my Ruby, and no, you usually don't use semicolons there, but then again, we don't have these funky edge cases to worry about, so unless you don't want to have more than one statement on one line, your Ruby code will probably never have semicolons in it.

Now, you could argue that the semicolon is a violation of normal punctuation rules anyway, and I love programming languages where a statement is closed by a full stop instead, but somehow someone messed up and now we use the dot to pass messages and the semicolon to end statements. Still, having punctuation at the beginning of a statement looks confusing to me. (The fact that the semicolon is used for one line comments in most LISP variants and Assemblers is only adding insult to injury here)

This all doesn't invalidate the arguments the author of the npm styleguide. And [other people](http://www.futurealoof.com/posts/two-things-about-semicolons.html) have their own takes on this as well. I also didn't write all this to diss the npm style and their authors, but to highlight that obviously these people have very different priorities, but also a very different perception about this. The above post by Mikeal Rogers contains this bit:

> I’m very happy using the npm coding style and not just for aesthetic reasons. I find that I have less errors and that I can read code faster and tend to lose my place less often than I did before. This is anecdotal and even though I wrote code with semicolons for years you could argue that I had a hidden aesthetic preference for this style I had not yet realized, but you can’t say that this method is error prone because in all this time I’ve never shipped a bug related to lack of semicolon.

To sum up: Mikeal finds npm code more aesthetic and easier to parse. I find, for myself, both to be completely the other way around.

[@isaacs](http://twitter.com/isaacs) spent a lot of time in the comment thread on this [gist](https://gist.github.com/357981) to again and again explain his rationale. His core argument is that you are getting used to the (un-)aesthetical parts and you end up with only the benefits.

I don't buy that. I do subscribe to the notion that you can get used to the style. I mean, after all, I managed to get used to JavaScript in the first place, which was an ugly and verbose language from the beginning. What I don't subscribe to, and oppose strongly, is the notion that it's okay to think of code as something completely different from normal language and thus okay to break conventions that exist in both spaces.

So, in the end, my JavaScript almost looks like what [this guy wrote](http://javascript.crockford.com/code.html). It is not because I'm taking the Crockford for gospel. It is because I think that this is the way of writing JavaScript code that will be the easierst to parse for most people, either because it is closer to normal language or because it is just closer to how most people wrote C, C++ and Java for the last 40 years.

(It is interesting to note that CoffeScript, which I like quite a lot, fixes most of the problems the npm guide tries to address with syntax. The semicolon exceptions are fixed. You don't need commas in an object literal, so no need to put them in the front, etc.)

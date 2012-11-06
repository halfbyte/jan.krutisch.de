---
title: Distributed synthesis - my MHD Reykjavik hack
layout: post
---
This is actually a pretty sad moment - I am sitting in an airport cafe at KEF and am about to leave Iceland after a brief, 6 day love affair with one of the most exciting places I've ever been to.

The reason I'm here is the Music Hack Day Reykjavik which, as Johan, one of the organizers, told us, started off more as some sort of joke and then turned into the most awesome Music Hack Days I've ever been to. The event itself was great: Awesome food, great crowd of people, small enough to be able to get to know each other, pretty much the most awesome food I ever had at a hack day (Lobster soup from the Sea Baron. Need I say more?) and some pretty awesome hacks. But on top of this awesomeness: Iceland. With Geysirs and Huge Waterfalls (Gullfoss), Edges of continental plates.

But enough of that. If you can find a chance, to go to iceland, it's worth it. I will definitely go back for a longer visit.

My Hack was something I had in mind for a long time now, but in contrast to earlier hackdays I didn't actually prepare myself: I wanted to build some form of distributed synthesizer. With the Web Audio API available on iOS devices since iOS6 came out, this project got even more interesting. My original plan was to create something together with our long time MHD travelmate [Michael](http://twitter.com/rockitbaby) aka Rockitbaby, but he had to cancel the trip on short notice due to very unfortunate events, so I was on my own.
<!-- more -->
Early in on the hackday I then settled to deviate even more from my orginal plans and to make the hack Web Audio API only. This allowed me to use the Web Audio API building blocks to build a pretty nice sounding synth without actually having to calculate stuff in javascript. While this is certainly possible with current iOS devices if you don't do totally crazy stuff, my new approach is certainly a lot less CPU intense, with the cost of lost Firefox compatibility. As soon as Firefox will support the Web Audio API, [The Mozilla Wiki](https://wiki.mozilla.org/Web_Audio_API) has some more Info on that, and progress of implementation can be checked in [Bugzilla](https://bugzilla.mozilla.org/show_bug.cgi?id=779297), only minor prefix changes will enable output there as well.

Implementation was pretty straight forward: I use a small-ish node server based on express and socket.io to deliver the two apps and to receive and send note-on and note-off events. One app is a very simple multitouch (with fallback mousedown/mouseup implementation) control surface that could use a lot of refinement, but in essence it only records touches and for every touch sends a note-on event with a note that is derived from one of two simple pentatonic scales and a control value between 0 and 1 that's derived from the y-pos of the touch. The server distributes the notes round-robin to all connected clients under the rule that every client can only play one one. This limitation seems a bit stupid in retrospect and there's no good reason to keep it, but I really wanted to have every note ending up at a different client.

The cool thing about the Web Audio API and a fact I have not really put to use before is that there are all building blocks to build a simple realtime pseudo virtual analog synthesizer, with a simple, but usable oscillator that can switch between the usual suspects like sine, saw, triangle and square and a custom wavetable that can be created by specifying the fourier coefficients for that wave, a nice versatile biquad filter and other blocks that can be nicely plugged together in any fashion you want.

What surprised me is that Chris Rogers, who created this at Google and who wrote the first spec draft and still is the editor of [the spec](http://www.w3.org/TR/webaudio/), managed to choose the most flexible building blocks. As an example, it might be disappointing that the spec doesn't include a generic Reverb effect, but instead Chris implemented a convolution effect, that allows you to use generic impulse responses to create a really really wide range of reverb, echo and other effects. Another example would be the above mentioned WaveTable implementation or the waveshaper that uses a customizable wave shaping table to create a variety of saturation and distortion effects.

You can take a look at the source at the [githubs](http://github.com/halfbyte/beepr) and it should be reasonably easy to set this up locally if you have nodejs and npm installed.

I love where this is going. I also love that I'll be giving a talk about this web synthesizer stuff at [codebits.eu](http://codebits.eu) in little more than a week (if the portuguese general strike will let me do it) and I'm pretty sure there will be a video of that available later on.

(Here's a simple example on how to use the Web Audio API for synthesizer sounds I just plugged together)

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/halfbyte/Ta8QX/1/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


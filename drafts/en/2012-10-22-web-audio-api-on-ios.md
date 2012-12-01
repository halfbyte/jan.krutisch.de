---
title: Web Audio API on iOS
layout: post
tags: Audio, Webkit, Mobile
---
Sometimes the stupidity of the world out there can only be beaten by the stupidity of … wait for it … yourself.

As some of you may have noticed, I played around with the Web Audio API and related technologies for quite a bit. My biggest project yet was cloudtracker, and I regret to inform you that it's currently (as of end of october) offline, as my good friend Sven had to retire the server it was running on and I simply haven't found the time to deploy it to a different box. So much to do, so little time.

Now, with iOS6 (and, related Safari 6 on the desktop), the Web Audio API finally reaches all of those iPhones, iPods and iPads.
<!-- more -->
Of course, I wanted to play with these devices, but, alas, I had so little time that all I managed to come up with is a non-working jsfiddle. 

Today, I have changed that. Here's my findings:

My [halfplayer](http://pixelpoke.de/halfplayer) that I built for the Mozilla dev challenge actually works. I was pretty sure I checked that before but, uhm, well, it might as well be that I simply forgot to check if my mute switch was on, because that's exactly what took me about 30 minutes to figure out today. D'oh.

On my iPad3, halfplayer works flawlessly, as far as I can tell (although that's hard to say since the remote web inspector doesn't allow proper profiling) without stressing the CPU too much.

On my iPhone, it works kinda okay-ish up to a certain point and then it starts stuttering. Some optimizations might be in order. Since I use XAudio.js for cross compatible playback and XAudio somehow uses requestAnimationFrame for the processing callbacks (something I find kinda weird), every iOS-devices starts stuttering as soon as you touch anything, like scrolling a bit.

The cloudtracker (i tested that with a local version, in case you're wondering) does not work at all, but all the DOM transformation stuff I do to keep the tracker view updated is keeping a desktop quite busy as well, so that was kinda expected.

One big gotcha that I need to fix in my own cross API abstraction: Webkit only creates jsAudioNodes when you specify at least one out- and input channel, regardless of if you need it or not. That's what currently keeps the [webloop](http://webloop.pixelpoke.de/) from working, my first larger web audio experiment.

So, where does that leave us? That remains to be seen. What might be most interesting to many people is the performance of normal sample playing, especially regarding latency, to be able to use that in a gaming situation. And I have absolutely no idea how the various phones and tablets are standing in that respect.

I'll try to come up with some fun stuff with these new possibilities on the upcoming Music Hack Day Reykjavik next weekend. Wish me luck - A larger update might be in order after that. 

I'll be talking about these API's both in a workshop at [RailsIsrael](http://railsisrael.events.co.il/) and at [Codebits](http://codebits.eu), so if you happen to be at one of those events (as unlikely as it is), please let me know!.

Last but not least, my upcoming book project ["The Single Page App"](http://thesinglepageapp.com) will most certainly contain a chapter (if not a mini-book) on using the various audio APIs so if you're interested in that, please subscribe to the [Single Page App Newsletter](http://eepurl.com/qHcYj)!
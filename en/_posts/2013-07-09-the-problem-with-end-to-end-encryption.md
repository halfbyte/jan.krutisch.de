---
title: The Problem with end-to-end encryption
layout: post
---
A friend of mine, Hendrik Mans, wrote a pretty good [article](http://sloblog.io/~hmans/INCs-5ZVTzI/ich-weiss-dass-ich-nichts-weiss) (in german) about the whole PRISM etc. dilemma. His gist: We should stop to act in this case as if we are actually able to tell whats going on there. For the most part, we simply don't know. Because we're are not tech savvy enough to understand the technologies involved (which may or may not be true for you) but also because, for the most part, this stuff is still happening largely in secret and although Edward Snowden gave us some ideas of what's happening, we still don't know much about *how* that's happening.

He also rants about the "solutionists" crying "you only need to use end-to-end encryption" and that's a point I actually want to elaborate on a bit.

First of all, what do we mean with end-to-end encryption (e2ee) . For the sake of the argument, let's assume it means something like PGP (or GPG for that matter) and everyone uses securely stored keys, the encryption is asymmetric and the keysize is big enough (which are a lot of assumtions already if you think about it) and so we can be relatively sure that this encryption is safe. Please note that I am not going to explain all of this to you. Fortunately, there are a lot of places on the web where you can get good information on this.

This is a great tool if your name is Alice and you want to send Bob a message which should stay secret between you two.

That is to say, if the secrecy of the message is what you actually care about.
<!-- more -->
But what if you want to prohibit that anyone knows that you and Bob are affiliated? For example because you are a whistleblower and Bobs name is actually Glenn Greenwald? There are other solutions, of course, that help you with this. But it's quite important to keep in mind that Metadata actually does count.

Speaking of Metadata. Solutions like PGP for encrypting emails do not encrypt the metadata. And there's a reason for that: Our Email systems only work because the metadata is open. Think about it that way: If you want to send a letter to someone, you can't actually encrypt the receiver's address. Nobody would know where to send the goddamn letter. Postal services need metadata to do their work.

Now imagine a social network like twitter or facebook with e2ee. A post on facebook usually has more valuable metadata than actual content. The location you posted it from. A date. Maybe the friends you addressed in the post. And so on. And most of the data is actually used by facebook to do valuable (well. the usefulness of facebook lies in the eyes of the beholder) things with it. Stick it to your friend's walls, for example.

Even worse: For many services (take the way GMail completely relies on fulltext search) we are used to use today, strict e2ee would dramatically reduce the usefulness of the service. I'm not sure if there are people working on solutions for this, but I would bet that it's pretty darn mathmatically impossible to build a fulltext index that allows you to search in encrypted data without compromising the data itself.

What I'm trying to say is that while e2ee is a valuable tool and we should definitely try to make this stuff simpler for people to use, but everyone who's bragging about how e2ee is the one thing that will save us from the NSA hasn't really paying attention to how most of our software works. And also how metadata is in many cases as dangerous or even more dangerous to give away than actual data.

Which is the point where I point back to Hendrik's article: First of all we should all acknowledge that we actually don't have a clue. Neither about what is actually going on but nor about what this actually means for us. And also not for what we as a society, but also as individuals can do about it, or should do about it. 

End-to-end encryption is not a solution. It's a tool that solves a very specific job that is a tiny, but nevertheless important part of what can make communication secure. Nothing more, nothing less.
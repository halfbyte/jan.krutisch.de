---
title: Going Full Encryption
layout: post
---
One of the main outcomes of the whole NSA thing for me is that we actually need to step up our game. And with we, I, above all, mean me. And what exactly means stepping up our game?

If you haven't, read [Private By Default](https://www.tbray.org/ongoing/When/201x/2012/12/02/HTTPS) by one of our wise men, Tim Bray. It makes a few good points, why it makes sense to even encrypt traffic that seems harmless.

So, setting this up on my personal web server (which is actually a cheap root server that by now mostly hosts static web pages) was relatively easy. There are some weird pitfalls though.

<!-- more -->

### The good

I'm buying SSL certs via GoGetSSL and I can recommend them. Their whole website and self service interface is good, bloat free, no freaky upselling and their prices for the Comodo certs I bought there are hard to beat. I've bought a multi domain certificate, which is probably not the most cost effective variant, but I wanted to keep things simple. All in all, I've now paid somewhere around 80 EUR for two years, which is, to be honest, not that much.

### The bad

Even with a multi domain certificate, hosting multiple domains on one IP is only possible via the so called SNI (Server Name Indication) mechanism which is, fortunately widely supported by now. And by widely I mean no Windows XP. No Android 2.x. I guess you just have to stop caring about those platforms, which are horribly outdated and still refuse to die for some reason. You actually don't have to do anything for this to work on current versions of Apache 2.x. It might give you a warning when starting up, but apart from that, it's not a big deal.

Also, a little tricky: If you have any external components (in my case: A twitter widget, flattr-buttons and the lanyrd conf list), you have to make sure that you use an SSL compatible form. Some browsers latetly started to simply block traffic from non encrypted channels on encrypted pages. In my case, the two biggest culprits were the Skype-Indicator (which is simply not available via SSL so it had to die) and the lanyrd widget which, in the originally documented version uses a cloudfront URL with a custom domain that is not working via SSL. If you're running into the same problem: Here's the URL to an SSL version (the widget itself works fine via SSL): [d3brtmsfoeeao4.cloudfront.net/badges/person-v1.min.js](https://d3brtmsfoeeao4.cloudfront.net/badges/person-v1.min.js). Interesting trick I've learned somewhere on the way: If you write URLs starting with //, the current protocol is implied. 

### The ugly

When I initially switched on SSL support on this domain, I've tweeted about it and someone sent me the link of this [awesome SSL test suite by SSLLabs](https://www.ssllabs.com/ssltest/). Do yourself a favour and use it at least once after configuring SSL. It's a great tool. I initially already scored an A, but there were some issues with the cypher suites. One thing that became more important now that we know that the NSA most probably records most internet traffic somehow (my mind still boggles at the mere thought) is [perfect forward secrecy](http://en.wikipedia.org/wiki/Forward_secrecy), which means that your cypher suites (which have names like TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA) should contain a bit like DHE (Diffie-Hellman-Ephemeral) or ECDHE (Elliptic-Curve-Diffie-Hellman-Ephemeral). The ending E (Ephemeral) is the Key here. Turns out that the Apache 2.2 I had running only supported the DHE variant, which is more CPU intensive than the newer elliptic curve algorithms. No, I don't actually understand what's going on here. But the SSLLabs test had a remark on that and I embarked on a journey to update my Server to Ubuntu 13.10 which contains an Apache 2.4. 

Oh boy. Apache 2.4 changes quite a few configuration options. And my webserver had a bit of downtime, some of the sites are still down, because I haven't gotten around to fix the configs.

### Outlook

Regardless of the hassle, I feel like I've accomplished something. And you can, too. It's not as complicated as it seems. You don't actually need to know your cryptography inside out to publish web sites via https.

For the regulars: We're going to do a security special at the Februry meeting of the Hamburgian Ruby User Group and I will explain the SSL thing in a short talk there as well.


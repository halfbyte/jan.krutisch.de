--- 
wordpress_id: 283
layout: post
title: Java Madness
wordpress_url: http://localhost/~jankrutisch/wordpress/?p=283
---
Was ich an Java ja im Prinzip mag, ist die Tatsache, das fast jedes Problem schon mal gelöst wurde und man im Ernstfall nur 'n JAR irgendwo hinlegen muss und gut ist.

Manchmal fragt man sich allerdings, warum an bestimmten Stellen das Rad immer wieder neu erfunden wird.

Bestes Beispiel so far: Parsen von Request-Parametern. Jeder Servlet-Container kann das. In den J2EE-Apidocs zum Interface "ServletRequest" sind ja eine ganze Reihe Methoden vorhanden, mit denen man solche Parameter ohne Probleme aus dem Request extrahieren kann, ohne sich um Implementationsdetails kümmern zu müssen. So weit so gut.

Warum aber muss jeder Servlet-Container dieses Zeug selbst implementieren? Mein akutes Problem ist, das ich eine URL nach parametern durchsuchen muss, ohne zu dieser URL einen Request-Context zu haben ('ne URL ist ja erstmal nur ein String). Es gäbe zwar z.B. im Tomcat im Prinzip Möglichkeiten die vom Tomcat implementierten Methoden zu verwenden, aber Code zu bauen, der vom verwendeten Container abhängig ist, ist irgendwie extrem unsexy.

Im Prinzip (wenn man mal von Schweinereien wie unterschiedlichen URL-Encodings absieht), ist das parsen der Parameter trivial. Parameter mit Hilfe des "?" abtrennen, StringTokenizer mit "&" als Trennzeichen und dann noch am "=" Name und Wert trennen. Das ist auch schnell implementiert. Aber man fühlt sich als Javaprogrammierer doch einigermaßen dreckig, weil man das Gefühl hat, das man sich mit einer Sache beschäftigt, an der sicher schon 100x oder öfter jemand versucht hat.

Das hinterlässt irgendwie einen schalen Beigeschmack. 

Back to work.

--- 
wordpress_id: 283
layout: post
title: Java Madness
wordpress_url: http://localhost/~jankrutisch/wordpress/?p=283
---
Was ich an Java ja im Prinzip mag, ist die Tatsache, das fast jedes Problem schon mal gel�st wurde und man im Ernstfall nur 'n JAR irgendwo hinlegen muss und gut ist.

Manchmal fragt man sich allerdings, warum an bestimmten Stellen das Rad immer wieder neu erfunden wird.

Bestes Beispiel so far: Parsen von Request-Parametern. Jeder Servlet-Container kann das. In den J2EE-Apidocs zum Interface "ServletRequest" sind ja eine ganze Reihe Methoden vorhanden, mit denen man solche Parameter ohne Probleme aus dem Request extrahieren kann, ohne sich um Implementationsdetails k�mmern zu m�ssen. So weit so gut.

Warum aber muss jeder Servlet-Container dieses Zeug selbst implementieren? Mein akutes Problem ist, das ich eine URL nach parametern durchsuchen muss, ohne zu dieser URL einen Request-Context zu haben ('ne URL ist ja erstmal nur ein String). Es g�be zwar z.B. im Tomcat im Prinzip M�glichkeiten die vom Tomcat implementierten Methoden zu verwenden, aber Code zu bauen, der vom verwendeten Container abh�ngig ist, ist irgendwie extrem unsexy.

Im Prinzip (wenn man mal von Schweinereien wie unterschiedlichen URL-Encodings absieht), ist das parsen der Parameter trivial. Parameter mit Hilfe des "?" abtrennen, StringTokenizer mit "&" als Trennzeichen und dann noch am "=" Name und Wert trennen. Das ist auch schnell implementiert. Aber man f�hlt sich als Javaprogrammierer doch einigerma�en dreckig, weil man das Gef�hl hat, das man sich mit einer Sache besch�ftigt, an der sicher schon 100x oder �fter jemand versucht hat.

Das hinterl�sst irgendwie einen schalen Beigeschmack. 

Back to work.

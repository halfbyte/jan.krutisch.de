--- 
wordpress_id: 328
layout: post
title: Rails 1.2 - Was man beachten sollte!
wordpress_url: http://localhost/~jankrutisch/wordpress/?p=328
---
Ich teste gerade so nach und nach Qype durch um es auf Rails 1.2 zum laufen zu bringen. Echte Fleiﬂarbeit. Dieser Eintrag wird so nach und nach die wichtigsten Punkte zusammentragen, die mir dabei auffallen.

<strong>1. Assoziationen verhalten sich anders</strong>

An einigen Stellen mogelt sich der Code um die Assioziationsproxys herum, in dem er entweder das das Assioziationsobjekt ¸ber den Foreign key anh‰ngt, was man NICHT machen sollte, weil man dann eventuell vorhandene Callbacks auf den Assioziationen ignoriert, oder in dem er die Assoziation von dem assoziierten Objekt aus setzt. Das Problem: Rails 1.1 hat scheinbar diese Operationen zum Anlass genommen, die Assoziationen zu updaten, oder das Objekt gleich neu zu laden (Eine detailierte Analyse steht noch aus). Rails 1.2 macht das nicht mehr. Wenn man jetzt in Tests z.B. die Objekte nicht mit .reload explizit neu l‰dt, funktionieren weder die Assoziationsproxys korrekt, noch solche Dinge wie :dependent => :destroy.
Tricky. Macht vermutlich einen Groﬂteil der Test-Failures aus.

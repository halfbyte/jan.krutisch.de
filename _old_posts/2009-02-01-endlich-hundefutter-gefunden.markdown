--- 
wordpress_id: 389
layout: post
title: Endlich Hundefutter gefunden!
wordpress_url: http://localhost/~jankrutisch/wordpress/?p=389
---
Ich habe mir ja vor geraumer Zeit mal den Hillegass zugelegt, also quasi das Standardwerk f�r OS X-Programmierer. Das ist auch wirklich gut geschrieben und ich hatte schon einen Gro�teil des Buches durchgearbeitet. Aber so lange man keine konkrete Anwendung hat, verliert man im Zweifel irgendwann die Lust und legt es beiseite. Mein Ziel war ja damals, durch besseres Verstehen der Cocoa-Konzepte einen leichteren Einstieg in die iPhone-Programmierung zu finden, was sicher auch geklappt hat, aber auch da fehlt mir sowohl Zeit, als auch eine ganz konkrete Anwendung f�r den Kram.

Jetzt fiel mir eine Idee f�r eine OS-X-Desktop-Anwendung quasi aus dem Nichts in den Scho�. Und zwar habe ich seit einiger Zeit so einen von diesen hippen Surfsticks mit g�nstiger Tagesflatrate, um meiner Sucht nach TCP-Paketen auch in total abwegigen Situationen nachgeben zu k�nnen. Die Installation war ohne Herrn Google nicht zu schaffen, weil man da entgegen der Anleitung n�mlich noch Dinge manuell tun muss. Dar�berhinaus ist die mitgelieferte Software wirklich einfach der letzte Dreck. Das Zeugs ist null in OS X integriert, ist 'ne h�ssliche Java-Anwendung und funktioniert auch nur so leidlich.

Das ist umso bedauerlicher, als dass die n�tigen Protokolle, wie ich ziemlich leicht rausfinden konnte, alles andere als Komplex sind: Diese bl�den Dinge funktionieren (wenn man die untere Treiberebene mal wegabstrahiert) n�mlich immer noch genau so wie damals mein erstes 2400-Baud-Modem - Per erweitertem Hayes-AT-Befehlssatz. Man findet auch ziemlich viel Infos dr�ber, was es alles an Spezialkommandos gibt, um z.B. SMS zu verschicken, die PIN einzugeben, die Signalst�rke abzufragen, you Name it. Passenderweise macht so ein Surfstick auch gleich zwei (!) Serielle Schnittstellen auf, um auf einem Kanal die PPP-Verbindung offen halten zu k�nnen, und auf dem zweiten gleichzeitig den Status abfragen zu k�nnen etc.

Da ginge also was. Hier ein paar Ideen, was so eine Software f�r Features habe k�nnte:

- SIM-PIN eingeben (das ist, um den Surfstick einfach nur zum Surfen zu benutzen, fast die wichtigste Aufgabe der extra-Software)
- PIN im Schl�sselbund speichern
- SMS abrufen und verschicken (an Nummern aus dem OS-X-Addressbuch)
- Status �ber ein Icon in der Men�leiste anzeigen

Angefangen habe ich schon, momentan eroiere ich gerade, wie man am geschicktesten die AT-Kommandos absetzt und die Ergebnisse reinparsed.

Mal schauen. Ich w�rd' sowas nutzen. Wer noch?

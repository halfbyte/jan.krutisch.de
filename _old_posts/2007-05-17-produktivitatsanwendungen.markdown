--- 
wordpress_id: 343
layout: post
title: "Produktivit�tsanwendungen"
wordpress_url: http://localhost/~jankrutisch/wordpress/?p=343
---
Seit geraumer Zeit bin ich auf der Suche nach dem geeigneten Produktivit�tstool mit dem ich (nach m�glichkeit GTD-Kompatibel, damit ich zumindest die Chance habe, es noch mal zu versuchen) meine Aufgaben (Landl�ufig ja Todos genannt klammer auf wann steht das eigentlich im Duden klammer zu) tracken kann. In der letzten Zeit habe ich versucht, dem Papier (in Form meines bisher vor allem f�r spontane Brainstormings verwendeten Moleskine) eine Chance zu geben. War so mittel erfolgreich, f�rchte ich.

Die letzten Tage habe ich mit <a href="http://www.stikkit.com" >Stikkit</a> gespielt. Dort habe ich schon ewig einen Account, finde das Prinzip (und die gute Integration in mein geliebtes Quicksilver) eigentlich auch ganz witzig, allerdings ist es, wie so viele Tools in dem Bereich stark Sprach- und Kulturabh�ngig. Aus drei deutschen Adressen parst er am Ende die Hausnummer und PLZ des letzten Eintrags als Telefonnummer (wtf?) und markiert den Stikkit als "Peep".

Nachdem ich heute dann endlich das <a href="http://blog.bestpractical.com/2006/09/todopl_or_how_i.html"  title="bestpractical">todo.pl von Jesse Vincent</a> (Seines Zeichens Perl-Uberhacker und Chef von BestPractical, Ursprung von RT und SVK) dank einer etwas l�ngeren CPAN-Session zum laufen gebracht hatte, habe ich jetzt Hiveminder am laufen. Das Webinterface finde ich ein bisschen tr�ge, ansonsten ist das schon ganz nett, zumal man mit dem todo.pl wirklich witzige Sachen machen kann. 

Sehr cool: Sowohl Hiveminder als auch Stikkit schie�en die Todos nat�rlich gleich wieder als ics-Datei (iCalendar) raus, so da� ich meine gesammelten Todos auch im iCal stehen habe (auch wenn ich sie da nicht antickern kann, was aber laut Jesse bei Hiveminder in Arbeit ist).

Was ich jetzt noch br�uchte ist ein Tool, dass z.B. RSS-Feeds von Trac (z.B. die Feeds der mir zugeordneten, unerledigten Tickets) parst und diese in die Liste der Todos (nat�rlich terminiert und getagged) einf�gt - Gem�� der GTD-Regel, dass die Todos nach m�glichkeit an einem Platz zu stehen haben.

[<strong>UPDATE:</strong> Da der Vaddertach etwas anders verlief als urspr�nglich geplant, hatte ich viel Zeit um diese Idee zu verfolgen. Herausgekommen ist eine Ruby-Kapselung der Hiveminder-API und ein Tool, das genau den oben beschriebenen Ansatz erfolgreich umsetzt. Das ganze geht sogar so weit, dass aus dem Feed verschwundene Tickets automatisch als "done" markiert werden. Ich werde das Ding demn�chst mal ver�ffentlichen, sobald es eine Runde refactoring und packaging �berstanden hat.] - I feel hackerish zur Zeit.

'n bisschen mehr Disziplin meinerseits k�nnte nat�rlich auch nicht schaden ;)

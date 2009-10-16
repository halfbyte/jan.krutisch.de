--- 
wordpress_id: 315
layout: post
title: Subversion mit Macports und Radrails
wordpress_url: http://localhost/~jankrutisch/wordpress/?p=315
---
Nachdem ich auf meinem MacBookPro Subversion �ber Macports installiert hatte (Subversion 1.4.x), konnte ich mir sehr galant meine mit RadRails ausgecheckten Repositories zerhacken, indem ich einfach ein >svn up ausgef�hrt habe. Problem: Radrails benutzt standardm��ig JavaSVN (Neuerdings: <a href="http://svnkit.com/"  title="SVNKit">SVNKit</a>), welches mit Subversion 1.4-Repos nicht klar kommt. 

L�sung, nachdem ich an meinen mangelhaften "ports"-Kenntnissen verzweifelt bin: Den subversion-javahlbindings port installieren, Eclipse neustarten und in den Prefs von JavaSVN auf JavaHL switchen. Bingo. Alles wird gut.

Und ja, wir (<a href="http://www.qype.com/"  title="qype.com">qype</a>) nutzen Radrails. Aber wir nutzen es momentan nur f�r das ein- und auschecken, da der Team-Synchronizing-Modus sehr genial ist. Editiert wird (nat�rlich) mit <a href="http://macromates.com"  title="Macromates">Textmate</a>. Aber die Einschl�ge kommen n�her. RadRails rockt an einigen Enden schon ziemlich. Sp�testens wenn das <a href="http://rubyeclipse.sourceforge.net/"  title="Ruby Development Tools">RDT-Projekt</a> umfangreiche Refactoring-Sachen integriert, wird die Luft f�r Textmate SEHR eng.

(Man verstehe mich nicht falsch: Textmate ist ein sehr, sehr cooler Texteditor, der viele Dinge ziemlich richtig macht. Aber die Radrails-Jungs brennen ziemlich und integrieren viele Dinge, die bei Textmate cool sind, so z.B. die Snippets. Hippy completion gibts andererseits bei Eclipse schon l�nger, weiss nur keiner. Am Ende wird Radrails vermutlich durch die coole Integration z.B. von Test::Unit und die Refactoring-Sachen gewinnen.)

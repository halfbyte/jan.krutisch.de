--- 
wordpress_id: 35
layout: post
title: DHTML-Spackungen
wordpress_url: http://localhost/~jankrutisch/wordpress/?p=35
---
Habe mich am Wochenende mal wieder mit DHTML rumgeschlagen, eigentlich nur, weil ich keine Lust hatte mir f&uuml;r den Test einer lustigen Textaufbauroutine (So Filmcredit-Style) 'ne C++-Umgebung zurecht zu legen.<br />
<br />
Schreck #1: Element.firstChild.nodeValue schluckt keine Tags. Bei n&auml;herem Nachdenken einigerma&szlig;en logisch, aber irgendwie doch sehr l&auml;stig, da ich gerne Umbr&uuml;che erzeugt h&auml;tte in dem &lt;div&gt;. Da ist guter Rat dann teuer.<br />
<br />
Schreck #2: nodeValue schluckt auch keine Entities. Das verstehe ich jetzt konzeptionsm&auml;&szlig;ig dann doch nicht. Gut, man kann sich mit unicode-Ersetzungen helfen, aber &amp;nobr; ist schon irgendwie intuitiver als \u0A0 oder wie auch immer der code noch war. Naja, gibt sicher einen sehr einleuchtenden Grund daf&uuml;r. Vermutlich k&ouml;nnte ich die entities auch vorher per Javascript-Methode dekodieren.<br />
<br />
Schreck #3: Die konzeptionelle Arbeit, die ich da geleistet habe, war v&ouml;llig f&uuml;r den Arsch. Das ist nicht ganz richtig, weil ich wieder eine Menge gelernt und ausprobiert habe.<br />

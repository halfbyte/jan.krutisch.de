--- 
wordpress_id: 96
layout: post
title: When Adcalls go bad
wordpress_url: http://localhost/~jankrutisch/wordpress/?p=96
---
Ein Beispiel eines h&ouml;chst unsinnvollen Adcalls lieferte uns heute ein mir unbekannter Werbeanbieter. <br />
<br />
<%image(20041018-NIX MEHR.gif|412|277|NIX MEHR)%><br />
<br />
Ich gehe mal davon aus, das es beim Auslaufen eines Ads auf einem Adserver bessere Alternativen gibt als folgendes auszuliefern:<br />
<br />
<code><br />
document.writeln('&lt;script type="text/javascript"&gt;');document.writeln('alert(\'NIX MEHR\');');document.writeln('&lt;/script&gt;');<br />
</code><br />
<br />
Ein Hoch auf den DOM-Inspektor des Firefox, der das Finden solcher Wild Ads doch sehr viel einfacher macht.

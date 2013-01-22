The [Blog of Jan Krutisch](http://jan.krutisch.de/), currently created with the help of Jekyll and a whole
bunch of home grown extensions.

## Generating the pygments stylesheet

The blog uses the "default" style (how boring) with the jekyll prefix .highlight, so to generate the according style file, you have to call the following command line:

``` bash
$ pygmentize -S default -f html -a .highlight > sass/partials/_pygments.scss
```

(This needs to be followed by a manual 'compass compile')


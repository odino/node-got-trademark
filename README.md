# got trademark?

> Because, shit, apparently we need to be careful.

This module let's you check if a trademark is registered, according to
the [Marker API](http://www.markerapi.com/).

## Installation

```
npm install -g got-trademark
```

The module should work on node 5 and above -- too lazy to add tests.

## Usage

```
~ (master ✔) ᐅ got-trademark fanta
Awwww, sheeez... We found the following registered trademarks:
 * FANTA (NON-ALCOHOLIC, NON-CEREAL, MALTLESS BEVERAGES SOLD AS SOFT DRINKS), registered on 08/16/1949
~ (master ✔) ᐅ
~ (master ✔) ᐅ # now, get this, it's funny...
~ (master ✔) ᐅ got-trademark                 
Awwww, sheeez... We found the following registered trademarks:
 * UNDEFINED (Beanies; Belts; Hats; Scarves; Shorts; Sweatshirts; Swimwear; T-shirts; Toques; Yoga pants), registered on 09/25/2012
~ (master ✔) ᐅ
```

This module uses a set of default credentials for the marker api, which means
you dont need to register on ther website to start using it. The downside is that
we all got 1k searches a month. If you can't live without this module (and I would
well understand why), the create your own account and set these env variables:

```
GOT_TRADEMARK_USER=...
GOT_TRADEMARK_PASSWD=...
```

## Inspiration

[Well](http://www.theregister.co.uk/2016/03/23/npm_left_pad_chaos/).
[Ehm](https://github.com/pugjs/pug/issues/2184).

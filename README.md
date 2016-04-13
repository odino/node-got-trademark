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

## Inspiration

[Well](http://www.theregister.co.uk/2016/03/23/npm_left_pad_chaos/).
[Ehm](https://github.com/pugjs/pug/issues/2184).

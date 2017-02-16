# moment-immutable
[![MIT License][license-image]][license-url] 
[![Build Status][travis-image]][travis-url]
[![Dependency Status][versioneye-image]][versioneye-url]
[![npm version][npm-image]][npm-url]  


Make moment.js immutable (moments and durations)

## Getting Started
moment-immutable can be included in your app by different ways:

### Node.js
moment-immutable can be installed with npm and required into a script:
```
npm install --save moment-immutable
```
```js
var moment = require('moment');
require('moment-immutable');
```


### Browser
Just include the momentjs script, all your other moment.js-plugins and then the moment-immutable script:
```html
<script src="moment.js"></script>
<!-- All the other cool moment.js-plugins -->
<script src="moment-immutable.min.js"></script>
```

### Browser with Require.js
```js
define(["moment", "moment-immutable"], function (moment) {
    // you probably won´t need a reference to moment-immutable istself, so include it last
});
```

### Bower
```
bower install --save moment-immutable
```

## Working without moment-immutable

```js
var january1st = moment("2017-01-01");
var february1st = january1st.add(1, "month");

january1st.format();    // "2017-02-01T00:00:00+01:00" - damn
february1st.format();   // "2017-02-01T00:00:00+01:00"
```

## Working with moment-immutable
```js
var january1st = moment("2017-01-01");
var february1st = january1st.add(1, "month");

january1st.format();    // "2017-01-01T00:00:00+01:00" - yeah
february1st.format();   // "2017-02-01T00:00:00+01:00"
```

## Converting mutable methods of other plugins to immutable methods
By default moment-immutable is aware of all the mutable methods of moment.js (moments and durations) and moment-timezone.  
For converting mutable methods of other plugins to immutable methods you can do this:
```js
// If it is a method on moment-objects:
moment.immutable.addMomentMutable('period', 1); // makes the period-function immutable if it has at least 1 parameter

// If it is a method on a moment-duration-object
moment.immutable.addDurationMutable('set', 0);  // makes the set-function immutable
```

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[travis-url]: http://travis-ci.org/smartin85/moment-immutable
[travis-image]: https://travis-ci.org/smartin85/moment-immutable.svg?branch=master

[versioneye-image]: https://www.versioneye.com/user/projects/58a0d4ab6a7781003a57a209/badge.svg
[versioneye-url]: https://www.versioneye.com/user/projects/58a0d4ab6a7781003a57a209

[npm-image]: https://badge.fury.io/js/moment-immutable.svg
[npm-url]: https://badge.fury.io/js/moment-immutable
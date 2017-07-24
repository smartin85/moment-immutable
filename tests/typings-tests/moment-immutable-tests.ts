/// <reference path="../../moment-immutable.d.ts" />
import moment = require('../../moment-immutable');

var isMutable: boolean = moment().mutable();
var version : string = moment.immutable
.addDurationMutable('test')
.addDurationMutable('test2', 3)
.addMomentMutable('test3', 2)
.addMomentMutable('test4').version;
var mom: moment.Moment = moment().mutable(true).add(5, 'years').mutable(true);
var version2: string = moment.immutable.version;
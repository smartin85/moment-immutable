/// <reference path="../../moment-immutable.d.ts" />
import moment = require('../../moment-immutable');

const isMutable: boolean = moment().mutable();
const version : string = moment.immutable
.addDurationMutable('test')
.addDurationMutable('test2', 3)
.addMomentMutable('test3', 2)
.addMomentMutable('test4').version;
const mom: moment.Moment = moment().mutable(true).add(5, 'years').mutable(true);
const version2: string = moment.immutable.version;
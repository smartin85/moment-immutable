'use strict';

describe("moment-immutable", function () {

	it("should be defined", function () {
		expect(moment.immutable).toBeDefined();
	});

	it("should have addMutable-functions for moments and durations", function () {
		expect(typeof moment.immutable.addMomentMutable).toBe("function");
		expect(typeof moment.immutable.addDurationMutable).toBe("function");
	});

	it("should have the same version as the package", function () {
		expect(moment.immutable.version).toBe(window.globals.packageVersion);
	});

	it("should make moments immutable", function () {
		var testMoment = moment(),
			formated = testMoment.format();

		expect(testMoment.add(1, 'year')).not.toBe(testMoment);
		expect(testMoment.endOf('hour')).not.toBe(testMoment);
		expect(testMoment.lang('de')).not.toBe(testMoment);
		expect(testMoment.locale('de')).not.toBe(testMoment);
		expect(testMoment.set('year', 2000)).not.toBe(testMoment);
		expect(testMoment.startOf('year')).not.toBe(testMoment);
		expect(testMoment.subtract(2, 'hours')).not.toBe(testMoment);
		expect(testMoment.year(2000)).not.toBe(testMoment);
		expect(testMoment.weekYear(2010)).not.toBe(testMoment);
		expect(testMoment.isoWeekYear(2009)).not.toBe(testMoment);
		expect(testMoment.quarters(2)).not.toBe(testMoment);
		expect(testMoment.quarter(3)).not.toBe(testMoment);
		expect(testMoment.month(4)).not.toBe(testMoment);
		expect(testMoment.weeks(2)).not.toBe(testMoment);
		expect(testMoment.week(1)).not.toBe(testMoment);
		expect(testMoment.isoWeeks(3)).not.toBe(testMoment);
		expect(testMoment.isoWeek(4)).not.toBe(testMoment);
		expect(testMoment.date(1)).not.toBe(testMoment);
		expect(testMoment.days(1)).not.toBe(testMoment);
		expect(testMoment.day(1)).not.toBe(testMoment);
		expect(testMoment.weekday(3)).not.toBe(testMoment);
		expect(testMoment.isoWeekday(3)).not.toBe(testMoment);
		expect(testMoment.dayOfYear(4)).not.toBe(testMoment);
		expect(testMoment.hours(4)).not.toBe(testMoment);
		expect(testMoment.hour(2)).not.toBe(testMoment);
		expect(testMoment.minutes(45)).not.toBe(testMoment);
		expect(testMoment.minute(34)).not.toBe(testMoment);
		expect(testMoment.seconds(22)).not.toBe(testMoment);
		expect(testMoment.second(45)).not.toBe(testMoment);
		expect(testMoment.milliseconds(234)).not.toBe(testMoment);
		expect(testMoment.millisecond(345)).not.toBe(testMoment);
		expect(testMoment.utcOffset(120)).not.toBe(testMoment);
		expect(testMoment.utc()).not.toBe(testMoment);
		expect(testMoment.local()).not.toBe(testMoment);
		expect(testMoment.dates(4)).not.toBe(testMoment);
		expect(testMoment.months(2)).not.toBe(testMoment);
		expect(testMoment.years(2010)).not.toBe(testMoment);
		expect(testMoment.zone(120)).not.toBe(testMoment);
		expect(testMoment.format()).toBe(formated);
	});

	it("should make moments mutable again if mutable is set to true", function () {
		var testMoment = moment().mutable(true);

		expect(testMoment.add(1, 'year')).toBe(testMoment);
		expect(testMoment.mutable()).toBe(true);
	});
});
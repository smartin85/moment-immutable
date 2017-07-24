import * as moment from 'moment';

declare module "moment" {
    interface MomentTsTz {
        ts: number;
        tz: string;
    }

    interface Moment {
		mutable(isMutable : boolean): moment.Moment;
		mutable() : boolean;
    }
	
	interface MomentImmutable {
		version: string;
		addMomentMutable: (attributeName: string, minParameters?: number) => MomentImmutable;
		addDurationMutable: (attributeName: string, parminParameters?: number) => MomentImmutable;
	}

    const immutable: MomentImmutable;
}

// require("moment-dt") === require("moment-timezone")
export = moment;
import Vue from 'vue'

function Error(func, msg) {
	console.error(`Error occurred @ time_conv "${func}"\n${msg}`)
}

const WEEK = 7
const DAY = 24
const HOUR = 60
const MINUTE = 60

export const timeConv = {
	WEEKS(val) {
		return (((val / MINUTE) / HOUR) / DAY) / WEEK
	},
	DAYS(val) {
		return (this.WEEKS(val) - Math.trunc(this.WEEKS(val))) * WEEK
	},
	HOURS(val) {
		return (this.DAYS(val) - Math.trunc(this.DAYS(val))) * DAY
	},
	MINUTES(val) {
		return (this.HOURS(val) - Math.trunc(this.HOURS(val))) * HOUR
	},
	SECOUNDS(val) {
		return (this.MINUTES(val) - Math.trunc(this.MINUTES(val))) * MINUTE
	},
	CERTAIN(val, which) {
		let duration = new Object()
		which.forEach(item => {
			switch (item) {
				case 'secounds':
					Vue.set(duration, 'SECOUNDS', this.SECOUNDS(val)); break
				case 'minutes':
					Vue.set(duration, 'MINUTES', this.MINUTES(val)); break
				case 'hours':
					Vue.set(duration, 'HOURS', this.HOURS(val)); break
				case 'days':
					Vue.set(duration, 'DAYS', this.DAYS(val)); break
				case 'weeks':
					Vue.set(duration, 'WEEKS', this.WEEKS(val)); break
				default:
					Error(
						'CERTAIN', `Given type "${item}" not existing.\n` +
						'Try [secounds,minutes,hours,days,weeks]',
					); break
			}
		})
		return duration
	},
}

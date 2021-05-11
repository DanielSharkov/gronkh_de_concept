import Vue from 'vue'

function Error(func, msg) {
	console.error(`Error occurred @ bit_conv "${func}"\n${msg}`)
}

const BYTE = 8
const KILOBYTE = BYTE * 1024
const MEGABYTE = KILOBYTE * 1024
const GIGABYTE = MEGABYTE * 1024
const TERABYTE = GIGABYTE * 1024
const PETABYTE = TERABYTE * 1024

export const bitConv = {
	isThis(type, value) {
		switch (type) {
			case 'byte':
				return value > BYTE
			case 'kilobyte':
				return value > KILOBYTE
			case 'megabyte':
				return value > MEGABYTE
			case 'gigabyte':
				return value > GIGABYTE
			case 'terabyte':
				return value > TERABYTE
			case 'petabyte':
				return value > PETABYTE
		}
	},
	BYTE(val) { return val / 8 },
	KILOBYTE(val) { return this.BYTE(val) / 1024 },
	MEGABYTE(val) { return this.KILOBYTE(val) / 1024 },
	GIGABYTE(val) { return this.MEGABYTE(val) / 1024 },
	TERABYTE(val) { return this.GIGABYTE(val) / 1024 },
	PETABYTE(val) { return this.TERABYTE(val) / 1024 },
	CERTAIN(val, which) {
		if (typeof val != 'number' || typeof Number(val) != 'number') Error(
			'CERTAIN', 'Given value not a number\n +'
			`Want (number) got (${typeof val})`,
		)
		if (which.length < 1) Error('CERTAIN', 'No types given.')
		let sizes = new Object()
		which.forEach(item => {
			switch (item) {
				case 'bit':
					Vue.set(sizes, 'BIT', val); break
				case 'byte':
					Vue.set(sizes, 'BYTE', this.BYTE(val)); break
				case 'kilobyte':
					Vue.set(sizes, 'KILOBYTE', this.KILOBYTE(val)); break
				case 'megabyte':
					Vue.set(sizes, 'MEGABYTE', this.MEGABYTE(val)); break
				case 'gigabyte':
					Vue.set(sizes, 'GIGABYTE', this.GIGABYTE(val)); break
				case 'terabyte':
					Vue.set(sizes, 'TERABYTE', this.TERABYTE(val)); break
				case 'petabyte':
					Vue.set(sizes, 'PETABYTE', this.PETABYTE(val)); break
				default:
					Error(
						'CERTAIN', `Given type "${item}" not existing.\n` +
						'Try [bit,byte,kilobyte,megabyte' +
						',gigabyte,terabyte,petabyte]',
					); break
			}
		})
		return sizes
	},
}

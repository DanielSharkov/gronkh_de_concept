export const colorConv = {
	toHSL(givenColor) {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
		result.exec(givenColor)
		const red = parseInt(result[1], 16) / 255
		const green = parseInt(result[2], 16) / 255
		const blue = parseInt(result[3], 16) / 255

		const max = Math.max(red, green, blue)
		const min = Math.min(red, green, blue)
		let hue, saturation, lightness = (max + min) / 2

		if (max == min) hue = saturation = 0
		else {
			const difference = max - min
			if (lightness > 0.5) saturation = difference / (2 - max - min)
			else saturation = difference / (max + min)
			switch (max) {
				case red:
					hue = (green-blue) / difference + (green < blue ? 6:0); break
				case green:
					hue = (blue-red) / difference + 2; break
				case blue:
					hue = (red-green) / difference + 4; break
			}
			hue /= 6
		}
		saturation = Math.round(saturation * 100)
		lightness = Math.round(lightness * 100)

		return {
			givenColor,
			hslColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
			isBright: lightness > 40,
			isDark: lightness < 40,
		}
	},
}

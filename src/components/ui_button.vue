<template>
	<button
	v-ripple
	:rippleColor="setRippleColor()"
	:rippleOpacity="rippleOpacity"
	ref="button"
	type="button"
	class="butn DisableMarker non-selectable"
	:class="{
		'icon': isIcon() ||
			isFab() ||
			imageIcon,
		'fab': isFab(),
		'smaller': smaller,
		'small': small,
		'large': large,
		'larger': larger,
		'no-shadow': outline ||
			flat ||
			active ||
			isIcon() ||
			disabled ||
			imageIcon,
		'solid': solid,
		'round': round,
		'outline': outline,
		'flat': flat,
		'justify-left': justify === 'left',
		'justify-center': justify === 'center',
		'justify-right': justify === 'right',
		'align-top': align === 'top',
		'align-middle': align === 'middle',
		'align-bottom': align === 'bottom',
		'no-margin': noMargin,
		'not-round': notRound,
		'upper-case': upperCase,
		'lower-case': lowerCase,
	}"
	:active="active"
	:disabled="disabled"
	:style="{
		borderColor: setBorderColor(),
		color: setFontColor(),
		backgroundColor: isFab() ? setFabBack() : '',
	}">
		<icon
			v-if="(isIcon() || isFab()) && imageIcon === false"
			:type="iconType"
			:icon="isIcon() ? icon : fab"
		/>
		<slot v-else/>
		<div
			class="background"
			:class="{
				'fab': isFab(),
				'solid': solid,
				'transparent-bg': transparent && !active,
				'icon-bg': isIcon() ||
					(isFab() && !solid) ||
					imageIcon,
				'fab-bg': isFab() && solid,
				'flat-bg': flat && !active,
				'active-bg': active,
			}"
			:style="{ backgroundColor: setBackColor() }"
		/>
	</button>
</template>

<script>
export default {
	name: 'UI-Button',
	props: {
		backColor: String,
		activeBackColor: String,
		fontColor: String,
		activeFontColor: String,
		rippleColor: String,
		rippleOpacity: String,
		outline: Boolean,
		round: Boolean,
		active: Boolean,
		flat: Boolean,
		solid: Boolean,
		icon: String,
		imageIcon: Boolean,
		iconType: String,
		smaller: Boolean,
		small: Boolean,
		large: Boolean,
		larger: Boolean,
		fab: String,
		transparent: Boolean,
		noMargin: Boolean,
		disabled: Boolean,
		notRound: Boolean,
		align: {
			type: String,
			default: 'middle',
		},
		justify: {
			type: String,
			default: 'center',
		},
		upperCase: Boolean,
		lowerCase: Boolean,
	},
	methods: {
		isIcon() {
			return this.icon ? true : false
		},
		isFab() {
			return this.fab ? true : false
		},
		setFontColor() {
			if (this.active) {
				if (this.activeFontColor) return this.activeFontColor
				else if (this.fontColor) return this.fontColor
				return
			}

			else if (this.solid && this.fontColor) return this.fontColor

			else if (this.fontColor) return this.fontColor

			else if (
				this.flat || this.outline || this.isIcon() &&
				this.backColor
			) return this.backColor
		},
		setBackColor() {
			if (this.active) {
				if (this.activeBackColor) return this.activeBackColor
				else if (this.backColor) return this.backColor
				return
			}

			else if (
				this.icon || this.imageicon || this.fab && this.backColor
			) return this.backColor

			else if (this.flat) {
				if (this.backColor) return this.backColor
				return
			}

			else if (this.solid && this.backColor) return this.backColor
		},
		setBorderColor() {
			if (!this.outline) return

			else if (this.active && this.backColor) return this.backColor

			else if (this.backColor) return this.backColor
		},
		setFabBack() {
			if (this.backColor) return this.backColor
		},
		setRippleColor() {
			if (this.rippleColor) return this.rippleColor

			else if (
				(!this.active && !this.solid) && this.backColor
			) return this.backColor
		},
		setRippleOpacity() {
			if (this.rippleOpacity) return this.rippleOpacity
		},
		handleWarn(prop, msg) {
			console.warn(`Warning @ UI-Button "${prop}"\n${msg}`)
		},
		setRippleColor() {
			if (this.rippleColor) return this.rippleColor
			else if (this.rippleColor === 'none') return
			else if (this.backColor && !this.solid) return this.backColor
			return
		},
	},
	mounted() {
		if (this.outline && this.solid) this.handleWarn(
			'prop:outline', `Using prop "outline" with prop "solid"`,
		)
		if (this.icon && this.fab) this.handleWarn(
			'prop:icon', `Using prop "icon" with prop "fab"`,
		)
	},
}
</script>

<style lang="stylus" scoped>
@import '../styles/global_variables'

.lightmode
	.butn
		color: $FontColorDark
		&:not(.no-shadow)
			$DropShadow(1, 'light')
		&:hover
			&:not(.no-shadow)
				$DropShadow(5, 'light')
		&:active, &:focus
			&:not(.no-shadow)
				$DropShadow(10, 'light')
		&:not(.flat):not(.outline):not(.active):not(.icon):not([disabled])
			background-color: #fff
		&.flat
			color: $DarkModeBG
		&.fab
			background-color: #fff
			&:not(.no-shadow)
				$DropShadow(1, 'light')
				&:hover
					$DropShadow(5, 'light')
				&:active, &:focus
					$DropShadow(10, 'light')
		.background
			background-color: $FontColorDark
		&.solid .background
			background-color: $BlueGreyLight
		&[active]
			color: $LightModeBG
			.background
				background-color: $DarkModeBGContrast
			&.outline
				border-color: $DarkModeBGContrast

.darkmode
	.butn
		color: $FontColorLight
		&:not(.no-shadow)
			$DropShadow(1, 'dark')
		&:hover
			&:not(.no-shadow)
				$DropShadow(5, 'dark')
		&:active, &:focus
			&:not(.no-shadow)
				$DropShadow(10, 'dark')
		&:not(.flat):not(.outline):not(.active):not(.icon):not([disabled])
			background-color: $DarkModeBGContrast
		&.flat
			color: $LightModeBG
		&.fab
			background-color: $DarkModeBGContrast
			&:not(.no-shadow)
				$DropShadow(1, 'dark')
				&:hover
					$DropShadow(5, 'dark')
				&:active, &:focus
					$DropShadow(10, 'dark')
		.background
			background-color: $FontColorLight
		&.solid .background
			background-color: $BlueGrey
		&[active]
			color: $DarkModeBG
			.background
				background-color: $LightModeBGContrast
			&.outline
				border-color: $LightModeBGContrast

.butn
	position: relative
	$DisplayFlex()
	padding: .5rem 1rem
	$BorderRadius()
	$TransitionDuration(150ms)
	$SmoothAnimation()
	text-decoration: none
	cursor: pointer
	z-index: 1
	&:not(.no-margin)
		margin: .5rem
	> *
		padding-left: 1rem
		color: inherit
		$TextSelect(none)
		&:first-child
			padding-left: 0
	.background
		margin: 0 !important
		padding: 0 !important
		border-radius: inherit
		opacity: 0
		z-index: -1
		pointer-events: none
	&[disabled]
		opacity: .4
		pointer-events: none
	&.justify-left
		justify-content: flex-start
	&.justify-center
		justify-content: center
	&.justify-right
		justify-content: flex-end
	&.align-top
		align-items: flex-start
	&.align-middle
		align-items: center
	&.align-bottom
		align-items: flex-end
	&.round
		border-radius: 10rem
	&.upper-case
		text-transform: uppercase
		> *
			text-transform: uppercase
	&.lower-case
		text-transform: lowercase
		> *
			text-transform: lowercase
	&.solid
		color: $LightModeBG
		.background
			opacity: 1
		.ripple-container .ripple-effect
			background-color: red
	&.outline
		border: solid .1rem
		.background
			border-radius: 0
			background-color: transparent

	&.icon
		position: relative
		display: inline-block
		padding: 0
		&:not(.not-round)
			border-radius: 50%
		.icon
			height: 1.25rem
			width: @height
			margin: .5rem
		> .background
			transform: scale(0)
		&:hover, &:active
			.background
				$Transition(
					transform $OutCubic 200ms,
					opacity $OutCubic 200ms
				)
				transform: scale(1)
			&.fab .background
				opacity: .15
				&.solid
					opacity: .3
		&.smaller .icon
			margin: .25rem
			font-size: .5rem
			height: @font-size
			width: @height
			&:before, &:after
				font-size: @font-size
		&.small .icon
			margin: .35rem
			font-size: .75rem
			height: @font-size
			width: @height
			&:before, &:after
				font-size: @font-size
		&.large .icon
			margin: .75rem
			font-size: 1.5rem
			height: @font-size
			width: @height
			&:before, &:after
				font-size: @font-size
		&.larger .icon
			margin: 1rem
			font-size: 1.75rem
			height: @font-size
			width: @height
			&:before, &:after
				font-size: @font-size

	.icon-bg
		opacity: .15
	.fab-bg
		opacity: .25
	.flat-bg
		opacity: 0
		background-color: #000
	&:hover, &:focus
		.flat-bg
			opacity: .1
	.active-bg
		opacity: 1
	&:not(.icon)
		&.smaller
			padding: .1rem .25rem
		&.small
			padding: .25rem .5rem
		&.large
			padding: .75rem 1.5rem
		&.larger
			padding: 1rem 1.75rem
</style>

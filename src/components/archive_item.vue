<template>
	<button
	v-ripple
	:rippleColor="color"
	rippleOpacity=".5"
	:style="{ backgroundColor: color }"
	:name="name"
	type="button"
	class="archive-item">
		<div
			class="image"
			:style="{
				backgroundImage: archive.image ? `url(${archive.image})` : ''
			}"
		/>
		<grid class="info drop-shadow-1">
			<span class="game-name single medium-font">
				{{ name }}
			</span>
			<span v-if="format" class="format single medium-font">
				{{ format }}
			</span>
			<div class="background" :style="{ backgroundColor: color }"/>
		</grid>
	</button>
</template>

<script>
import {colorConv} from '../mixins/color_conv'

export default {
	name: 'ArchiveItem',
	props: {
		archive: Object,
		color: String,
		name: String,
		format: String,
	},
	methods: {
		getFormatColor(index) {
			if (index >= 0)
			return this.$store.state.podcastFormats[index].color
		},
	},
}
</script>

<style lang="stylus" scoped>
@import '../styles/global_variables'

.lightmode .archive-item
	background-color: #fff
	$DropShadow(1, 'light')
	&:hover
		$DropShadow(5, 'light')
	&:active, &:focus
		$DropShadow(10, 'light')

.darkmode .archive-item
	background-color: $BlueGrey
	$DropShadow(1, 'dark')
	&:hover
		$DropShadow(5, 'dark')
	&:active, &:focus
		$DropShadow(10, 'dark')

.archive-item
	position: relative
	$DisplayFlex()
	height: 13rem
	width: 9rem
	margin: 1rem
	flex: 0 0 @width
	outline: none
	overflow: hidden
	cursor: pointer
	$BorderRadius()
	$TextSelect(none)
	$SmoothAnimation()
	> .image
		position: absolute
		top: 0
		left: 0
		height: 100%
		width: 100%
		background-size: cover
		background-repeat: no-repeat
		background-position: center
		$SmoothAnimation()
		$Transition(transform $OutCubic 1000ms)
	> .info, > .info .background
		$SmoothAnimation()
		$Transition(transform $OutCubic 200ms)
	> .info
		position: absolute
		bottom: 0
		left: 0
		width: 100%
		padding: .5rem
		flex-flow: row wrap
		background-color: rgba($BlueGreyDark, .6)
		transform: translate(0, calc(100% - .3rem))
		$TextSelect(none)
		> .game-name
			font-size: .75rem
		> .format
			font-size: .65rem
			opacity: .75
		> *:not(.background)
			position: relative
			color: #fff
			text-align: center
			text-shadow: 0 0 .2rem rgba(#000, .5)
			word-break: break-word
			margin-top: .5rem
			&:first-child
				margin: 0
		.background
			opacity: .65
			z-index: -1
	&:hover, &:active, &:focus
		transform: scale(1.05)
		> .image
			transform: scale(1.05)
		> .info
			color: #fff
			$SmoothAnimation()
			> .title:after
				border-color: #fff
			> .background
				background-color: $BlueGrey
	&:active, &:focus
		transform: scale(1.1)
</style>

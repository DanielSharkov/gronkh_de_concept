<template>
	<div class="tool-tip-object">
		<slot name="parent"/>
		<div class="tool-tip">
			<slot name="tip"/>
		</div>
	</div>
</template>

<script>
export default { name: 'ToolTip' }
</script>

<style lang="stylus" scoped>
@import '../styles/global_variables'

.lightmode .tool-tip-object .tool-tip .tip
	$DropShadow(5, 'light')
	background-color: $DarkModeBG
	color: $LightModeBG

.darkmode .tool-tip-object .tool-tip .tip
	$DropShadow(5, 'dark')
	background-color: $LightModeBG
	color: $DarkModeBG

.tool-tip-object
	position: relative
	.tool-tip
		$SmoothAnimation()
		position: absolute
		top: 0
		left: 0
		$DisplayFlex()
		width: 100%
		$AlignContent(center)
		$Transition(
			transform $OutCubic 200ms,
			opacity $OutCubic 200ms
		)
		pointer-events: none
		opacity: 0
		transform: translate(0, -70%)
		> .tip
			position: relative
			$DisplayFlex()
			padding: .5rem
			$BorderRadius()
			$AlignContent(center)
			white-space: nowrap
			z-index: 1
			> *
				color: inherit
				flex: 0 0 auto
				&:first-child
					margin-right: .5rem
				&:last-child
					margin: 0
			> .text
				font-size: $SmallFS2
			> .icon
				font-size: $SmallFS2 * 1.25
			&:after
				content: ''
				position: absolute
				bottom: -.25rem
				height: .5rem
				width: @height
				background-color: inherit
				transform: rotate(45deg)
				border-radius: .1rem
	.parent:hover ~ .tool-tip
		opacity: 1
		transform: translate(0, -100%)
</style>

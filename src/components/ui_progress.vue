<template>
	<div
	:class="[
		'custom-progress',
		{ 'line': bar },
		{ 'indeterminate': indeterminate },
	]">
		<div v-if="bar" class="line">
			<div
				class="buffer"
				:style="{
					width: `${buffer}%`
				}"
			/>
			<div
				class="value"
				:style="{
					width: `${value}%`
				}"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'UI-Progress',
	props: {
		value: {
			type: Number,
			default: 0,
		},
		buffer: {
			type: Number,
			default: 0,
		},
		bar: Boolean,
		indeterminate: Boolean,
	},
}
</script>

<style lang="stylus" scoped>
@import '../styles/global_variables'

start()
	transform: translateX(-100%) scaleX(0)
expanded()
	transform: translateX(0) scaleX(1)
end()
	transform: translateX(100%) scaleX(0)

@keyframes valueIndeterminate
	0%
		start()
	30%
		expanded()
	60%
		end()
	75%
		start()
	85%
		expanded()
	100%
		end()

@keyframes bufferIndeterminate
	0%
		start()
	60%
		start()
	70%
		expanded()
	80%
		end()
	90%
		start()
	100%
		start()

.lightmode
	.custom-progress
		.line
			background-color: rgba($DarkModeBG, .15)
			.value
				background-color: $DarkModeBG

.darkmode
	.custom-progress
		.line
			background-color: rgba($LightModeBG, .15)
			.value
				background-color: $LightModeBG

.custom-progress
	$DisplayFlex()
	.line
		position: relative
		$DisplayFlex()
		height: .25rem
		width: 13rem
		margin: 1rem
		flex: 0 1 @width - @margin
		overflow: hidden
		.value, .buffer
			position: absolute
			top: 0
			left: 0
			height: 100%
			width: 100%
			flex: 0 0 auto
			transform: translateX(0) scaleX(1)
			$Transition(
				opacity $OutCubic 500ms,
				width linear 500ms
			)
	&.indeterminate .line
		.value
			animation: valueIndeterminate $InOutCubic 3s infinite
			opacity: .5
		.buffer
			animation: bufferIndeterminate $InOutCubic 3s infinite
			opacity: .5
		.value, .buffer
			width: 100% !important
			transform: translateX(-100%) scaleX(0)
			animation-delay: 500ms
</style>

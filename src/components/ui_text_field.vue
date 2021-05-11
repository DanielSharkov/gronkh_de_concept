<template>
	<div
	class="inpt"
	:class="{
		'error': error.type,
		'disabled': disabled,
	}">
		<textarea
			v-if="textarea"
			ref="input"
			:value="inputValue"
			@input="inputValue = $event.target.value"
			:maxLen="maxLen"
			:rows="Number(rows)"
			:disabled="disabled"
		/>

		<input
			v-else
			ref="input"
			:value="inputValue"
			@input="inputValue = $event.target.value"
			:maxLen="maxLen"
			:disabled="disabled"
		/>

		<label
		v-if="placeholder.length > 0"
		:active="inputValue !== ''"
		:style="{ color: inputColor() }">
			{{ placeholder }}
		</label>

		<div class="underline">
			<div :style="{ backgroundColor: inputColor() }"/>
			<div :style="{ backgroundColor: inputColor() }"/>
		</div>

		<div class="details">
			<!-- If error -->
			<span v-if="error.type" class="error-msg">{{ error.msg }}</span>

			<!-- Hint -->
			<span v-else-if="hint" class="hint">{{ hint }}</span>

			<!-- Max length counter -->
			<span
			v-if="maxLen && Number(maxLen)"
			class="counter"
			:class="{ 'max-count': inputValue.length >= maxLen }">
				{{ `${inputValue.length} / ${maxLen}` }}
			</span>

			<!-- Max length counter -->
			<span
			v-if="inputValue.length < Number(minLen) && Number(minLen)"
			class="counter">
				{{ `${minLen} / ${inputValue.length}` }}
			</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'UI-TextField',
	props: {
		color: String,
		theme: Boolean,
		textarea: Boolean,
		placeholder: {
			type: String,
			default: '',
		},
		maxLen: Number(Number),
		minLen: Number(Number),
		value: String,
		rows: {
			type: String,
			default: '1',
		},
		hint: String,
		focus: Boolean,
		disabled: Boolean,
	},
	data() {
		return {
			inputValue: '',
			error: {
				type: '',
				msg: '',
			},
		}
	},
	methods: {
		inputColor() {
			if (this.error.type) return

			if (this.theme) return this.$store.state.theme
			else if (this.color) return this.color

			return
		},
		setError(type, msg) {
			if (!type && !msg) {
				this.error.type = null
				this.error.msg = null
				this.$emit('error', null)
			} else {
				this.error.type = type
				this.error.msg = msg
				this.$emit('error', type)
			}
		},
	},
	watch: {
		focus (val) {
			if (val) this.$refs.input.focus()
		},
		inputValue (val) {
			this.$emit('input', val)
		},
		error (val) {
			console.error(val)
		},
		value (val) {
			this.inputValue = val

			// Emit error when minLen not reached or else remove error
			if (
				this.minLen &&
				this.inputValue.length < this.minLen &&
				this.inputValue.length !== 0
			) this.setError('minLenNotReached', 'Minimal length not reached')
			else if (
				this.inputValue.length >= Number(this.minLen) ||
				this.inputValue.length < 1 &&
				!(this.inputValue.length > this.maxLen)
			) this.setError()

			// Emit error when maxLen exceeded or else remove error
			if (
				this.maxLen &&
				this.inputValue.length > this.maxLen &&
				!(this.inputValue.length < this.minLen)
			) this.setError('maxLenExceeded', 'Maximal length exceeded')
			else if (
				this.inputValue.length <= Number(this.maxLen) &&
				!(this.inputValue.length < this.minLen)
			) this.setError()
		},
	},
	mounted() {
		if (this.value) this.inputValue = this.value

		// If maxLen definded but not number
		if (this.maxLen && !Number(this.maxLen)) console.error(
			'Maxlength: Got type %s (\'%s\') want number',
			typeof this.maxLen, this.maxLen,
		)

		// If minLen definded but not number
		if (this.minLen && !Number(this.minLen)) console.error(
			'Minlength: Got type %s (\'%s\') want number',
			typeof this.minLen, this.minLen,
		)
	},
}
</script>

<style lang="stylus" scoped>
@import '../styles/global_variables'

$transformLabel()
	transform: translate(-18%, -($BasicFS)) scale(.65)

@keyframes inputError {
	0%	 { transform: translate(-.5rem, 0) }
	25%	 { transform: translate(.5rem, 0) }
	50%	 { transform: translate(-.5rem, 0) }
	75%	 { transform: translate(.5rem, 0) }
	100% { transform: translate(0, 0) }
}

.lightmode
	.inpt
		color: $FontColorDark
		&:not(.error)
			.underline > *
				background-color: $DarkModeBG
				&:last-child
					background-color: $DarkModeBG
		&:hover textarea
			border-color: rgba($DarkModeBG, .2)
		textarea
			border-color: rgba($DarkModeBG, .1)
			&:focus
				border-color: transparent

.darkmode
	.inpt
		color: $FontColorLight
		&:not(.error)
			.underline > *
				background-color: $LightModeBG
				&:last-child
					background-color: $LightModeBG
		&:hover textarea
			border-color: rgba($LightModeBG, .2)
		textarea
			border-color: rgba($LightModeBG, .1)
			&:focus
				border-color: transparent

.inpt
	margin: 2rem 0
	position: relative
	.underline, label, .details
		color: inherit
	.underline
		position: relative
		left: 0
		bottom: 0
		height: .1rem
		width: 100%
		overflow: hidden
		> div
			position: absolute
			top: 0
			left: 0
			height: 100%
			width: @height
			$SmoothAnimation()
			$Transition(
				transform $OutCubic 200ms,
				opacity $OutCubic 200ms
			)
			&:first-child
				opacity: .2
			&:last-child
				transform: scaleX(0)
	label
		position: absolute
		top: 0
		left: 0
		line-height: 1
		font-size: $BasicFS
		pointer-events: none
		$SmoothAnimation()
		transform: translate(.5rem, $BasicFS * .85)
		$Transition(transform $OutCubic 200ms)
		&[active]
			$transformLabel()
	.details
		$DisplayFlex()
		bottom: 0
		left: 0
		min-height: 1.25rem
		justify-content: flex-end
		align-content: flex-start
		align-items: flex-start
		font-size: .65rem
		.max-count, .counter, .error-msg, .hint
			padding: .15rem
			flex: 1 1 auto
			font-size: inherit
			text-align: left
			color: inherit
		.max-count
			$BoldFW()
		.counter
			position: relative
			padding: .15rem .25rem
			flex: 0 0 auto
	input, textarea
		width: 100%
		padding: .5rem
		text-overflow: ellipsis
		font-family: inherit
		overflow: hidden
		overflow-y: auto
		$BorderRadius()
		&:focus
			&~label
				$transformLabel()
			&~.underline > *:last-child
				transform: scaleX(1)
	&:hover
		.underline > *:first-child
			opacity: .4
		textarea
			&~.underline > *:first-child
				opacity: 0
	textarea
		min-height: 2.6rem
		min-width: 2rem
		max-width: 100%
		border: solid .1rem transparent
		overflow-x: hidden
		&~.underline > *:first-child
			opacity: 0
	&.error
		$Animation(inputError $OutCubic 200ms)
		> *
			color: $Red !important
		.underline > *
			background-color: $Red !important
	&.disabled
		pointer-events: none
		opacity: .5
</style>

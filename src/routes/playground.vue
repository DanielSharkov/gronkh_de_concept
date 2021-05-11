<template>
	<div id="playground-view" class="page">
		<div class="center-content">
			<butn noMargin @click.native="$store.commit('TOGGLE_THEME_MODE')">
				Change theme mode
			</butn>
		</div>

		<div class="text-display">
			<h1 class="display-1">Display 1</h1>
			<h1 class="display-2">Display 2</h1>
			<h1 class="display-3">Display 3</h1>
			<h1 class="display-4">Display 4</h1>

			<div>
				<h1>Heading 1</h1>
				<h1 class="subtitle subtitle-1">Subtitle 1</h1>
			</div>
			<div>
				<h2>Heading 2</h2>
				<h2 class="subtitle subtitle-2">Subtitle 2</h2>
			</div>
			<div>
				<h3>Heading 3</h3>
				<h3 class="subtitle subtitle-3">Subtitle 3</h3>
			</div>
			<div>
				<h4>Heading 4</h4>
				<h4 class="subtitle subtitle-4">Subtitle 4</h4>
			</div>
			<div>
				<h5>Heading 5</h5>
				<h5 class="subtitle subtitle-5">Subtitle 5</h5>
			</div>
			<div>
				<h6>Heading 6</h6>
				<h6 class="subtitle subtitle-6">Subtitle 6</h6>
			</div>
		</div>

		<grid class="typography center-content">
			<h1 class="checkpoint">Typography</h1>
			<grid>
				<h1 class="display-1">Aa</h1>
				<h1 class="display-2">Aa</h1>
				<h1 class="display-3">Aa</h1>
				<h1 class="display-4">Aa</h1>
			</grid>
			<grid>
				<h1>Aa</h1>
				<h2>Aa</h2>
				<h3>Aa</h3>
				<h4>Aa</h4>
				<h5>Aa</h5>
				<h6>Aa</h6>
			</grid>
			<grid>
				<span class="thin-font">Thin</span>
				<span class="light-font">Light</span>
				<span class="default-font">Default</span>
				<span class="medium-font">Medium</span>
				<span class="bold-font">Bold</span>
				<span class="bolder-font">Black</span>
			</grid>
			<grid>
				<span class="italic">Italic</span>
				<span class="quote">Quote</span>
				<span class="underline">Unterline</span>
				<span class="underline-dashed">Underline dashed</span>
				<span class="underline-dotted">Underline dotted</span>
				<span class="underline-wavy">Underline wavy</span>
				<span class="strike">Strike</span>
				<span class="monospace">Monospace</span>
				<span class="mark">Marked</span>
			</grid>
			<grid>
				<span v-for="(_, index) in 10" :key="index">
					{{ index }}
				</span>
			</grid>
			<grid>
				<span class="single center-content">
					"" '' ´´ `` “„
				</span>
				<span class="single center-content">
					() {} [] <> / \
				</span>
				<span class="single center-content">
					! § $ % & / = ? + * ~ # , ; . : - _ | ^ ° ² ³
				</span>
				<span class="single center-content">
					␛ ␡ ␀ ␣ ⌘ ⌦ ⌬ ⌥ ⌤ ⌀ ™ …
				</span>
				<span class="single center-content">
					≠ ≙ ½ ⅕ ⅙ ⅛ ℃ ℉ ∞
				</span>
				<span class="single center-content">
					€ £ Ұ $ ₤ ¥
				</span>
			</grid>
			<grid>
				<p
				v-for="color in colors"
				:key="color.name"
				:style="{ color: color.hex }">
					{{ color.name }}
				</p>
			</grid>
		</grid>

		<grid class="sample-text">
			<h3 class="single">Some sample text</h3>
			<div class="text-block">
				<h5 class="heading">What is Lorem Ipsum?</h5>
				<p class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
			</div>
			<div class="text-block">
				<h5 class="heading">Why do we use it?</h5>
				<p class="text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
			</div>
			<div class="text-block">
				<h5 class="heading">Where does it come from?</h5>
				<p class="text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
				<p class="text">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
			</div>
		</grid>

		<grid class="color-preview center-content">
			<h1 class="checkpoint">Colors</h1>
			<grid class="colors collection center-content" flexFlow="row wrap">
				<div
					v-for="item in colors"
					:key="item.name"
					class="item drop-shadow-1"
					:style="{ backgroundColor: item.hex }"
				/>
			</grid>
			<grid class="colors collection center-content" flexFlow="row wrap">
				<div
					v-for="item in 10"
					:key="item"
					class="item drop-shadow-1"
					:style="{ backgroundColor: `hsl(0,0%,${item * 10}%)` }"
				/>
			</grid>
		</grid>

		<grid class="icons" alignItems="flex-start" flexFlow="row wrap">
			<h1 class="checkpoint">Icons</h1>
			<grid class="collection">
				<h5 class="collection-title">Material icons</h5>
				<grid class="group single center-content" flexFlow="row nowrap">
					<icon
						v-for="icon in materialIcons"
						:key="icon.name"
						type="material-icons"
						:icon="icon.name"
					/>
				</grid>
				<grid class="group single center-content" flexFlow="row nowrap">
					<icon
						v-for="icon in materialIcons"
						:key="icon.name"
						type="material-icons"
						:icon="icon.name"
						:color="icon.color"
					/>
				</grid>
			</grid>
			<grid class="collection">
				<h5 class="collection-title">Font awesome</h5>
				<grid class="group single center-content" flexFlow="row nowrap">
					<icon
						v-for="icon in fontAwesomeIcons"
						:key="icon.name"
						:type="icon.type"
						:icon="icon.name"
					/>
				</grid>
				<grid class="group single center-content" flexFlow="row nowrap">
					<icon
						v-for="icon in fontAwesomeIcons"
						:key="icon.name"
						:type="icon.type"
						:icon="icon.name"
						:color="icon.color"
					/>
				</grid>
			</grid>
			<grid class="collection">
				<h5 class="collection-title">Line awesome</h5>
				<grid class="group single center-content" flexFlow="row nowrap">
					<icon
						v-for="icon in lineAwesomeIcons"
						:key="icon.name"
						type="line-awesome"
						:icon="icon.name"
					/>
				</grid>
				<grid class="group single center-content" flexFlow="row nowrap">
					<icon
						v-for="icon in lineAwesomeIcons"
						:key="icon.name"
						type="line-awesome"
						:icon="icon.name"
						:color="icon.color"
					/>
				</grid>
			</grid>
		</grid>

		<grid class="buttons">
			<h1 class="checkpoint">Buttons</h1>
			<grid class="collection">
				<h5 class="collection-title">Default</h5>
				<butn>Normal</butn>
				<butn disabled>Disabled</butn>
				<butn solid>Solid</butn>
				<butn active>Active</butn>
				<butn upperCase>Upper case</butn>
				<butn round>Round</butn>
				<butn round solid>Round</butn>
				<butn round active>Round active</butn>
				<butn fontColor="#00c853">Font color</butn>
				<butn backColor="#00c853">Background color</butn>
				<butn solid backColor="#00c853">Background color</butn>
			</grid>
			<grid class="collection">
				<h5 class="collection-title">Flat</h5>
				<butn flat>Flat</butn>
				<butn flat disabled>Disabled</butn>
				<butn flat active>Active</butn>
				<butn flat upperCase>Upper case</butn>
				<butn flat round>Round</butn>
				<butn flat fontColor="#00c853">Font color</butn>
				<butn flat backColor="#00c853">Background color</butn>
			</grid>
			<grid class="collection">
				<h5 class="collection-title">Outlined</h5>
				<butn outline>Outlined</butn>
				<butn outline disabled>Disabled</butn>
				<butn outline active>Active</butn>
				<butn outline upperCase>Upper case</butn>
				<butn outline round>Round</butn>
				<butn outline fontColor="#00c853">Font color</butn>
				<butn outline backColor="#00c853">Background color</butn>
			</grid>
		</grid>

		<grid class="toasts">
			<h1 class="checkpoint">Toasts</h1>
			<butn>
				Simple toast
			</butn>
		</grid>

		<grid class="progress">
			<h1 class="checkpoint">Progress</h1>
			<butn @click.native="progresses.indeterminate = !progresses.indeterminate">
				Toggle indeterminate to {{ !progresses.indeterminate }}
			</butn>
			<butn @click.native="setRandomProgressValue()">
				Set random value
			</butn>
			<span>{{ progresses.value }}</span>
			<custom-progress
				class="single"
				bar
				:indeterminate="progresses.indeterminate"
				:value="progresses.value"
			/>
		</grid>

		<grid class="ripple-preview center-content" flexFlow="row wrap">
			<h1 class="checkpoint">Ripples</h1>
			<p class="description">
				Ripples with different colors and an opacity of 0.75
			</p>
			<grid class="single center-content">
				<butn @click.native="setRandomRippleColor()">
					Set random colors
				</butn>
				<butn @click.native="rippleColor = ''">
					Reset
				</butn>
			</grid>
			<grid
			v-ripple
			:rippleColor="rippleColor ? rippleColor : '#d50000'"
			:rippleOpacity=".75"
			class="non-selectable card center-content">
				<span>Red</span>
			</grid>
			<grid
			v-ripple
			:rippleColor="rippleColor ? rippleColor : '#00c853'"
			:rippleOpacity=".75"
			class="non-selectable card center-content">
				<span>Green</span>
			</grid>
			<grid
			v-ripple
			:rippleColor="rippleColor ? rippleColor : '#2962ff'"
			:rippleOpacity=".75"
			class="non-selectable card center-content">
				<span>Blue</span>
			</grid>
		</grid>

		<grid class="shadow-elevation">
			<h1 class="checkpoint">Drop shadows</h1>
			<p class="description">Shadow elevation</p>
			<grid class="collection">
				<div
				v-for="stage in 25"
				:key="stage"
				:stage="stage"
				:class="[`drop-shadow-${stage}`]">
					<span>{{ stage }}</span>
				</div>
			</grid>
		</grid>

		<div class="text-fields">
			<h1 class="checkpoint">Text fields</h1>
			<grid class="text-fields-value center-content">
				<h6 class="title single">Text fields value:</h6>
				<pre class="value monospace">{{ textFields.value }}</pre>
			</grid>
			<grid class="collection" flexFlow="row wrap" justifyContent="flex-start">
				<h5 class="collection-title">Default</h5>
				<text-field
					v-for="(type, index) in textFields.types"
					:key="index"
					v-model="textFields.value"
					:placeholder="type.placeholder"
					:color="type.color"
					:maxLen="type.maxLen"
					:minLen="type.minLen"
					:error="type.error"
					:disabled="type.disabled"
				/>
				<text-field
					placeholder="With given value"
					value="I'm a value"
				/>
			</grid>
			<grid class="collection" flexFlow="row wrap" justifyContent="flex-start">
				<h5 class="collection-title">Areas</h5>
				<text-field
					v-for="(type, index) in textFields.types"
					:key="index"
					textarea
					v-model="textFields.value"
					:placeholder="type.placeholder"
					:color="type.color"
					:maxLen="type.maxLen"
					:minLen="type.minLen"
					:error="type.error"
					:disabled="type.disabled"
				/>
				<text-field
					textarea
					placeholder="With given value"
					value="I'm a value"
				/>
			</grid>
		</div>
	</div>
</template>

<script>
export default {
	beforeRouteEnter (to, from, next) {
		next(vm => {
			vm.$store.commit('SET_PAGE_TITLE', 'Dev Playground')
			vm.$store.commit('SET_MENUBAR_TITLE', 'Dev Playground')
		})
	},
	data() {
		return {
			// Icons
			materialIcons: [{
					name: 'code', color: '#263238',
				},{
					name: 'explore', color: '#0088a3',
				},{
					name: 'lock', color: '#1faa00',
				},{
					name: 'translate', color: '#0091ea',
				},{
					name: 'done_all', color: '#00bfa5',
				},{
					name: 'verified_user', color: '#009624',
				},{
					name: 'update', color: '#455a64',
				},{
					name: 'place', color: '#ff5131',
			},],
			fontAwesomeIcons: [{
					type: 'fa-solid', name: 'archive', color: '#ff5131',
				},{
					type: 'fa-solid', name: 'coffee', color: '#9c786c',
				},{
					type: 'fa-brand', name: 'vuejs', color: '#009966',
				},{
					type: 'fa-solid', name: 'download', color: '#009624',
				},{
					type: 'fa-brand', name: 'discord', color: '#7a7cff',
				},{
					type: 'fa-brand', name: 'btc', color: '#ffab00',
				},{
					type: 'fa-brand', name: 'github', color: '#444',
				},{
					type: 'fa-solid', name: 'chart-pie', color: '#79b700',
			}],
			lineAwesomeIcons: [{
					name: 'gear', color: '#455a64',
				},{
					name: 'keyboard-o', color: '#2962ff',
				},{
					name: 'trash', color: '#d50000',
				},{
					name: 'comment', color: '#00b8d4',
				},{
					name: 'money', color: '#00c853',
				},{
					name: 'power-off', color: '#455a64',
				},{
					name: 'file-text', color: '#ff6434',
				},{
					name: 'list-alt', color: '#00c853',
			}],
			// Colors
			colors: [{
					name: 'Red', hex: '#d50000',
				},{
					name: 'Pink', hex: '#c51162',
				},{
					name: 'Purple', hex: '#aa00ff',
				},{
					name: 'Deep Purple', hex: '#6200ea',
				},{
					name: 'Indigo', hex: '#304ffe',
				},{
					name: 'Blue', hex: '#2962ff',
				},{
					name: 'Light Blue', hex: '#0091ea',
				},{
					name: 'Cyan', hex: '#00b8d4',
				},{
					name: 'Teal', hex: '#00bfa5',
				},{
					name: 'Green', hex: '#00c853',
				},{
					name: 'Light Green', hex: '#64dd17',
				},{
					name: 'Lime', hex: '#aeea00',
				},{
					name: 'Yellow', hex: '#ffd600',
				},{
					name: 'Amber', hex: '#ffab00',
				},{
					name: 'Orange', hex: '#ff6d00',
				},{
					name: 'Deep Orange', hex: '#dd2c00',
				},{
					name: 'Brown', hex: '#6d4c41',
			}],
			// Progresses
			progresses: {
				indeterminate: false,
				value: 0,
			},
			// Ripple
			rippleColor: '',
			// Text fields
			textFields: {
				value: '',
				types: [{
						placeholder: 'Normal field',
					},{
						placeholder: 'Green colored',
						color: '#00c853',
					},{
						placeholder: 'Pink colored',
						color: '#c51162',
					},{
						placeholder: 'Max length',
						maxLen: 25,
					},{
						placeholder: 'Min length',
						minLen: 5,
					},{
						placeholder: 'With given error',
						error: 'Simple error',
					},{
						placeholder: 'Disabled',
						disabled: true,
					},{
						placeholder: 'Multi',
						maxLen: 25,
						minLen: 5,
						color: '#ff6434',
				}],
			},
		}
	},
	methods: {
		setRandomRippleColor() {
			this.rippleColor = '#' + Math.floor(
				Math.random()*16777215
			).toString(16)
		},
		setRandomProgressValue() {
			this.progresses.value = Math.round(Math.random() * 100)
		},
	},
}
</script>

<style lang="stylus">
@import '../styles/global_variables'

.lightmode #playground-view
	.shadow-elevation .collection > *
		background-color: $LightModeBG
	.text-fields-value .value
		background-color: $LightModeBGContrast
	.ripple-preview .card
		$DropShadow(1, 'light')

.darkmode #playground-view
	.shadow-elevation .collection > *
		background-color: $DarkModeBG
	.text-fields-value .value
		background-color: $DarkModeBGContrast
	.ripple-preview .card
		$DropShadow(1, 'dark')

#playground-view
	max-width: 960px
	> div
		margin: 3rem 0
	.checkpoint, .description
		margin: 0
		flex: 1 1 100%
		text-align: center
	.content-adjust
		$DisplayFlex()
		flex-flow: row wrap
		> *
			flex: 0 1 auto
			text-align: center
	.collection
		flex: 1 1 100%
		flex-flow: row wrap
		$AlignContent(center)
		&-title
			margin: 2rem 0 .5rem 0
			justify-content: center
			flex: 1 1 100%
			text-align: center
	.typography
		line-height: 1
		> div
			margin: .5rem 0
			flex: 1 1 100%
			$AlignContent(center)
			align-items: baseline
			> *
				padding: .5rem
	.sample-text
		padding: 1rem
		flex: 1 1 100%
		.text-block
			margin: 1rem
			flex: 1 1 calc(100% - 2rem)
			@media screen and (min-width: 960px)
				flex: 0 1 calc(50% - 2rem)
			.text
				text-align: justify
	.colors .item
		height: 3rem
		width: @height
		margin: 1rem
		$BorderRadius()
	.icons .collection .group > .icon
		margin: .75rem
	.ripple-preview .card
		position: relative
		overflow: hidden
		margin: 1rem
		flex: 0 1 6rem
	.shadow-elevation .collection > div
		$DisplayFlex()
		height: 3rem
		width: 3rem
		margin: 1rem
		$AlignContent(center)
		$BorderRadius()
	.text-fields
		.collection > .inpt
			margin: 1rem
			max-width: calc(50% - 2rem)
			flex: 0 0 calc(50% - 2rem)
		&-value
			margin: 0
			.value
				display: block
				min-height: 1.5rem
				margin: 1rem
				padding: 1rem
				flex: 1 1 100%
				$BorderRadius()
				overflow: auto

@media screen and (max-width: 768px)
	#playground-view
		.text-fields .collection > .inpt
			max-width: calc(50% - 2rem)
			flex: 0 0 calc(50% - 2rem)

@media screen and (max-width: 425px)
	#playground-view
		.ripple-preview .card
			flex: 1 1 100%
		.text-fields .collection > .inpt
			max-width: calc(100% - 2rem)
			flex: 0 0 calc(100% - 2rem)
</style>

<template>
	<div id="faq-view" class="page">
		<grid class="search-question center-content single">
			<input
				type="text"
				placeholder="Was willst du den wissen?"
				v-model="searchQuestion"
			/>
			<div class="background"/>
		</grid>
		<grid class="questions card">
			<h6 class="title non-selectable">
				Heufig gestellte Fragen
			</h6>
			<grid
			v-for="(question, index) in questions"
			:key="index"
			v-ripple
			class="question">
				<icon
					v-if="question.hot"
					class="hot"
					type="material-icons"
					icon="whatshot"
				/>
				<icon
					v-if="question.verified"
					class="solved"
					type="material-icons"
					icon="check_circle"
				/>
				<span>{{ question.quest }}</span>
			</grid>
		</grid>
	</div>
</template>

<script>
export default {
	beforeRouteEnter (to, from, next) {
		next(vm => {
			vm.$store.commit('SET_PAGE_TITLE', 'FAQ')
			vm.$store.commit('SET_MENUBAR_TITLE', 'Fragen über Fragen')
		})
	},
	data() {
		return {
			searchQuestion: '',
			questions: [{
					quest: 'Wann kommt...?',
					hot: true,
				},{
					quest: 'Bist du YouTube Milliardär?',
				},{
					quest: 'Wie alt bist du?',
				},{
					quest: 'Wer bist du?',
				},{
					quest: 'Spielst du in der ESL?',
					verified: true,
				},{
					quest: 'Ist Tobi noch immer im Flur?',
				},{
					quest: 'Wie ist das Fahrradfahren so?',
					verified: true,
			},],
		}
	},
}
</script>

<style lang="stylus" scoped>
@import '../styles/global_variables'

.lightmode #faq-view
	.questions .question
		&:hover
			background-color: rgba(#000, .03)
		&:after
			border-color: rgba(#000, .1)
	.search-question
		> .background
			$DropShadow(1, 'light')
			background-color: #fff
		> input:focus ~ .background
			$DropShadow(10, 'light')
		&:hover > .background
			$DropShadow(5, 'light')

.darkmode #faq-view
	.questions .question
		&:hover
			background-color: rgba(#fff, .03)
		&:after
			border-color: rgba(#fff, .1)
	.search-question
		> .background
			$DropShadow(1, 'dark')
			background-color: $DarkModeBGContrast
		> input:focus ~ .background
			$DropShadow(10, 'dark')
			background-color: $DarkModeBGContrastBright
		&:hover > .background
			$DropShadow(5, 'dark')

#faq-view
	.questions
		margin: 1rem
		padding: 0
		flex-flow: row wrap
		flex: 1 1 calc(100% - 2rem)
		@media screen and (min-width: 768px)
			flex: 0 1 calc(60% - 2rem)
		.title
			padding: 1rem
			text-align: center
		.question
			position: relative
			padding: 1rem
			flex-flow: row nowrap
			cursor: pointer
			flex: 1 1 calc(100% - 2rem)
			overflow: hidden
			> *
				flex: 0 1 auto
				&:first-child.icon
					margin-right: .5rem
					font-size: 1rem
			&:after
				content: ''
				position: absolute
				left: 0
				bottom: 0
				margin: 0 1rem
				width: calc(100% - 2rem)
				border-bottom: solid 1px
			&:last-child:after
				content: unset
			.hot
				color: $Orange
			.solved
				color: $Green
	.search-question
		position: relative
		margin: 1rem
		flex: 1 1 calc(100% - 2rem)
		$BorderRadius()
		@media screen and (min-width: 768px)
			flex: 0 1 calc(60% - 2rem)
		&:hover
			> input
				&::-webkit-input-placeholder
					transform: translateX(.25rem)
					TextSelect(none)
				&::-moz-placeholder
					transform: translateX(.25rem)
					TextSelect(none)
				&:-ms-input-placeholder
					transform: translateX(.25rem)
					TextSelect(none)
				&:-moz-placeholder
					transform: translateX(.25rem)
					TextSelect(none)
		> input
			padding: 1rem
			outline: none
			text-overflow: ellipsis
			flex: 1 1 auto
			z-index: 1
			&::-webkit-input-placeholder
				$Transition(all $OutCubic 200ms)
			&::-moz-placeholder
				$Transition(all $OutCubic 200ms)
			&:-ms-input-placeholder
				$Transition(all $OutCubic 200ms)
			&:-moz-placeholder
				$Transition(all $OutCubic 200ms)
			&:active, &:focus
				&::-webkit-input-placeholder
					transform: translateX(1rem)
					opacity: 0
				&::-moz-placeholder
					transform: translateX(1rem)
					opacity: 0
				&:-ms-input-placeholder
					transform: translateX(1rem)
					opacity: 0
				&:-moz-placeholder
					transform: translateX(1rem)
					opacity: 0
		> .background
			z-index: -1
			$BorderRadius()
</style>

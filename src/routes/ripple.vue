<template>
	<div
		id="ripple-view"
		v-ripple
		rippleTransDur="1750"
		rippleOpacity="1"
		class="non-selectable"
	/>
</template>

<script>
export default {
	beforeRouteEnter (to, from, next) {
		next(vm => {
			vm.$store.commit('SET_PAGE_TITLE', 'ReepyWeepy')
			vm.$store.commit('SET_MENUBAR_TITLE', 'Klick mich hart, du Sau! :D')
		})
	},
}
</script>

<style lang="stylus">
@import '../styles/global_variables'

#ripple-view
	height: 100%
	width: 100%
	flex: 1 1 100%
	.ripple-container .ripple-effect
		background-color: $primary
</style>

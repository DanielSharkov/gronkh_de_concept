<template>
	<div id="fourofour-view center-content" class="page">
		<h1 class="display-1">404</h1>
		<h6>Huch! Wo willst du den hin?</h6>
		<butn
		flat
		:backColor="$store.state.primary1"
		@click.native="$store.commit('OPEN_SIDENAV')">
			Wo geht es den lang?
		</butn>
	</div>
</template>

<script>
export default {
	beforeRouteEnter (to, from, next) {
		next(vm => {
			vm.$store.commit('SET_PAGE_TITLE', '404')
			vm.$store.commit('SET_MENUBAR_TITLE', '404')
		})
	},
}
</script>

<style lang="stylus">
#fourofour-view
	> *
		flex: 1 1 100%
	.butn
		margin: 1rem
		flex: 0 0 auto
</style>

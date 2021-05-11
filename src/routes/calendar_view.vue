<template>
	<div id="calendar-view" class="page">
		<h1 class="single display-4">Kalender ansicht</h1>
	</div>
</template>

<script>
export default {
	beforeRouteEnter (to, from, next) {
		next(vm => {
			vm.$store.commit('SET_PAGE_TITLE', 'Kalender / Events')
			vm.$store.commit('SET_MENUBAR_TITLE', 'Kalender / Events')
		})
	},
}
</script>

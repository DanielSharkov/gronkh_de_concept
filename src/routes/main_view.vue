<template>
	<div id="main-view" class="page">
		<h1>Gronkh.de</h1>
	</div>
</template>

<script>
export default {
	beforeRouteEnter (to, from, next) {
		next(vm => {
			vm.$store.commit('SET_PAGE_TITLE', 'Hauptseite')
			vm.$store.commit('SET_MENUBAR_TITLE', 'Gronkh.de')
		})
	},
}
</script>

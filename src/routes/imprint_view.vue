<template>
	<div id="imprint-view" class="page">
		<h1>Impressum</h1>
	</div>
</template>

<script>
export default {
	beforeRouteEnter (to, from, next) {
		next(vm => {
			vm.$store.commit('SET_PAGE_TITLE', 'Impressum')
			vm.$store.commit('SET_MENUBAR_TITLE', 'Impressum')
		})
	},
	methods: {
		openLink(link) {
			window.open(link)
		},
	},
}
</script>

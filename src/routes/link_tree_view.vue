<template>
	<div id="linktree-view" class="page grid">
		<link-collection-object
		:collection="[
			$store.state.shop,
			$store.state.patreon,
		]">
		</link-collection-object>

		<link-collection-object
		title="Discord"
		:collection="$store.state.discord.servers">
		</link-collection-object>

		<link-collection-object
		title="Livestreams - Twitch"
		:collection="$store.state.twitch.channels">
		</link-collection-object>

		<link-collection-object
		v-for="(collection, index) in $store.state.linkCollections"
		:key="index"
		:title="collection.title"
		:collection="collection.links">
		</link-collection-object>
	</div>
</template>

<script>
export default {
	beforeRouteEnter (to, from, next) {
		next(vm => {
			vm.$store.commit('SET_PAGE_TITLE', 'Linking Park')
			vm.$store.commit('SET_MENUBAR_TITLE', 'Linking Park')
			vm.$store.dispatch("LOAD_TWITCH_CHANNELS", [
				'gronkh','gronkhtv',
			])
			vm.$store.dispatch("LOAD_DISCORD_SERVERS", [
				'229589548517031936','253169640988082178',
			])
		})
	},
}
</script>

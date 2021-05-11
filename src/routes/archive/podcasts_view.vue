<template>
	<transition-group tag="div" id="podcasts">
		<archive-item
			v-for="archive in $store.state.archive.podcasts"
			:key="archive.title"
			:name="archive.title"
			:format="getFormat(archive.format)"
			:color="getFormatColor(archive.format)"
			:archive="archive"
			@click.native="this.console.log(archive)"
		/>
	</transition-group>
</template>

<script>
export default {
	methods: {
		getFormatColor(index) {
			if (index >= 0)
			return this.$store.state.podcastFormats[index].color
		},
		getFormat(index) {
			if (index >= 0)
			return this.$store.state.podcastFormats[index].name
		},
	},
}
</script>

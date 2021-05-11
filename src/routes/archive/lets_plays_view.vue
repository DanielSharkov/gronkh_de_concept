<template>
	<transition-group tag="div" id="videos">
		<grid key="search" class="single center-content">
			<grid class="search center-content">
				<input
					type="text"
					placeholder="Durchsuche mich!"
					v-model="search"
				/>
				<butn
					iconType="material-icons"
					icon="filter_list"
					class="filter-types"
					notRound
				/>
				<div class="background"/>
			</grid>
		</grid>
		<archive-item
			v-for="archive in $store.state.archive.letsplays"
			:key="archive.name"
			:name="archive.name"
			:color="archive.color"
			:archive="archive"
			@click.native="$store.commit('OPEN_MODAL', {
				modal: 'view-archive-item',
				data: archive,
			})"
		/>
	</transition-group>
</template>

<script>
export default {
	data() {
		return { search: '' }
	},
}
</script>

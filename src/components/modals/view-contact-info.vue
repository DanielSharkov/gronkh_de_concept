<template>
	<modal>
		<grid slot="header" class="header" justifyContent="center">
			<h2 class="title">{{ $store.state.modal.data.title }}</h2>
		</grid>
		<grid slot="body" class="body" justifyContent="center">
			<tool-tip>
				<a slot="parent" class="parent name" @click="copyName()">
					<a class="link">
						{{ $store.state.modal.data.name }}
					</a>
				</a>
				<div slot="tip" class="tip">
					<icon
						class="icon"
						type="material-icons"
						icon="content_copy"
					/>
					<span class="text">Klicken zum kopieren</span>
				</div>
			</tool-tip>
		</grid>
		<grid slot="footer" class="footer" justifyContent="flex-end">
			<butn noMargin flat @click.native="$emit('closeModal')">
				<span>Schließen</span>
			</butn>
		</grid>
	</modal>
</template>

<script>
export default {
	name: 'ModalViewContactInfo',
	methods: {
		copyName() {
			document.execCommand('copy')
		},
	},
}
</script>

<style lang="stylus">
@import '../../styles/global_variables'

.lightmode #view-contact-info .name
	background-color: $LightModeBGContrastBright
	border-color: rgba($DarkModeBG, .25)

.darkmode #view-contact-info .name
	background-color: $DarkModeBGContrastBright
	border-color: rgba($LightModeBG, .25)

#view-contact-info
	width: 20rem
	padding: 1rem
	.body
		margin: 2rem 0
	.title
		margin: 0
		line-height: 1
	.name
		$DisplayFlex()
		padding: .5rem 1rem
		text-align: center
		cursor: pointer
		border: dashed .1rem
		$BorderRadius()
		.link
			$TextSelect(all)
	.footer .butn
		flex: 0 0 auto
</style>

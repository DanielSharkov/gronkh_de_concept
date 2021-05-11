<template>
	<grid class="modal-viewer" @click.native.self="closeModal()">
		<transition name="modal-viewport">
			<view-contact-info id="view-contact-info"
				v-if="$store.state.modal.type === 'view-contact-info'"
				@closeModal="closeModal()"
			/>

			<view-archive-item id="view-archive-item"
				v-if="$store.state.modal.type === 'view-archive-item'"
				@closeModal="closeModal()"
			/>
		</transition>
	</grid>
</template>

<script>
export default {
	name: 'ModalViewport',
	methods: {
		closeModal() {
			this.$store.commit('CLOSE_MODAL')
			this.$destroy()
		},
		watchKeyEscape(param) {
			if (param.keyCode === 27) this.closeModal()
		},
	},
	created() {
		window.addEventListener('keyup', this.watchKeyEscape)
	},
	destroyed() {
		window.removeEventListener('keyup', this.watchKeyEscape)
	},
}
</script>

<style lang="stylus" scoped>
@import "../styles/global_variables"

.modal-viewport-enter-active, .modal-viewport-leave-active
	transition: all cubic-bezier(.22, .61, .36, 1) .25s
.modal-viewport-enter, .modal-viewport-leave-to
	transform: translate(0, -100%)
	opacity: 0
.modal-viewport-enter-to, .modal-viewport-leave
	transform: translate(0, 0)
	opacity: 1

.modal-viewer
	position: fixed
	top: 0
	left: 0
	height: 100%
	width: 100%
	padding: 2rem
	flex-flow: column nowrap
	justify-content: flex-start
	align-content: center
	align-items: center
	overflow-y: auto
	z-index: 50

@media screen and (max-width: 768px)
	.modal-viewer
		padding: 1rem
</style>

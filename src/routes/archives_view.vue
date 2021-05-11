<template>
	<div id="archive-view" class="page">
		<div id="scroll-up" :show="$root.scrollPosition > 200">
			<butn
				larger
				iconType="la"
				fab="arrow-up"
				@click.native="this.document.querySelector('#app').scrollTop = 0">
			</butn>
		</div>

		<grid class="archives-header non-selectable">
			<div class="switch-archive">
				<butn
					flat
					iconType="la"
					icon="angle-left"
					@click.native="switchArchive('back')"
					notRound
				/>
			</div>

			<div
			v-for="(archive, index) in archives"
			:key="index"
			class="archive-link hide-slider"
			:style="{ transform: `translate(${-100 * currentArchive}%, 0)` }">
				<butn
				flat
				:rippleColor="onActiveArchiveColor(archive.path)"
				:backColor="$store.state.primary1"
				:active="onActiveArchive(archive.path)"
				@click.native="redirectRoute(archive.path)">
					<icon :type="archive.icon.type" :icon="archive.icon.name"/>
					<span>{{ archive.displayName }}</span>
				</butn>
			</div>

			<div class="switch-archive">
				<butn
					flat
					iconType="la"
					icon="angle-right"
					@click.native="switchArchive('forward')"
					notRound
				/>
			</div>
		</grid>

		<transition name="archive-viewport" mode="out-in">
			<router-view class="archive center-content grid" archive-subview/>
		</transition>
	</div>
</template>

<script>
export default {
	beforeRouteEnter (to, from, next) {
		next(vm => {
			vm.$store.commit('SET_PAGE_TITLE', 'Die Gronkh-Vault')
			vm.$store.commit('SET_MENUBAR_TITLE', 'Die Gronkh-Vault')
			vm.setArchives()
			vm.setArchiveIndex()
		})
	},
	data() {
		return {
			archives: [],
			currentArchive: 0,
		}
	},
	methods: {
		setArchives() {
			this.$router.options.routes.forEach(route => {
				if (route.archive) route.children.forEach(subroute => {
					if (subroute.display) this.archives.push(subroute)
				})
			})
		},
		changeArchive(archive) {
			if (this.$store.state.archive.view === archive) return
			this.$store.commit('changeArchive', archive)
			this.$store.commit('SET_MENUBAR_TITLE', 'Das Gronkh-Archiv')
		},
		onActiveArchive(path) {
			if (
				this.$route.fullPath === `/archiv/${path}` ||
				this.$route.fullPath === `/archiv/${path}/`
			) return true

			return false
		},
		switchArchive(direction) {
			if (direction === 'back') {
				if (this.currentArchive < 1) {
					this.currentArchive = this.archives.length -1
					this.$router.push(this.archives[this.currentArchive].path)
					return
				}
				this.currentArchive--
				this.$router.push(this.archives[this.currentArchive].path)
			}
			if(direction === 'forward') {
				if (this.currentArchive === this.archives.length -1) {
					this.currentArchive = 0
					this.$router.push(this.archives[this.currentArchive].path)
					return
				}
				this.currentArchive++
				this.$router.push(this.archives[this.currentArchive].path)
			}
		},
		setArchiveIndex(route) {
			this.archives.forEach((archive, index) => {
				this.$route.matched.forEach(matched => {
					if (
						archive.path === matched.path ||
						`/archiv/${archive.path}` === matched.path
					) this.currentArchive = index
				})
			})
		},
		redirectRoute(route) {
			this.$router.push(route)
			this.setArchiveIndex(route)
		},
		onActiveArchiveColor(path) {
			if (this.onActiveArchive(path)) return 'none'
			return this.$store.state.primary1
		},
	},
}
</script>

<style lang="stylus">
@import '../styles/global_variables'

.archive-viewport-enter-active, .archive-viewport-leave-active
	$Transition(opacity $OutCubic 300ms)
.archive-viewport-enter, .archive-viewport-leave-to
	opacity: 0
.archive-viewport-enter-to, .archive-viewport-leave
	opacity: 1

.lightmode #archive-view
	.search
		> .background
			$DropShadow(1, 'light')
			background-color: #fff
		> input
			&:active, &:focus
				&~.background
					$DropShadow(10, 'light')
		&:hover > .background
			$DropShadow(5, 'light')

.darkmode #archive-view
	.search
		> .background
			$DropShadow(1, 'dark')
			background-color: $DarkModeBGContrast
		> input
			&:focus ~ .background
				background-color: $DarkModeBGContrastBright
			&:active, &:focus
				&~.background
					$DropShadow(10, 'dark')
		&:hover > .background
			$DropShadow(5, 'dark')

#archive-view
	.archives-header
		position: relative
		flex: 1 1 100%
		flex-flow: row nowrap
		align-content: center
		align-items: center
		overflow: hidden
		.switch-archive
			position: absolute
			top: 0
			display: none
			margin: 0
			flex: 0 0 auto
			z-index: 2
			&:first-child
				left: .75rem
			&:last-child
				right: .75rem
		.archive-link
			padding: .5rem
			flex: 0 0 auto
			$SmoothAnimation()
			> *
				flex: 0 0 auto
				margin: 0
				color: #fff
	.search
		position: relative
		width: 100%
		margin: 1rem
		flex: 1 1 auto
		$BorderRadius()
		max-width: 35rem
		&:hover
			> input
				&::-webkit-input-placeholder
					transform: translateX(.25rem)
					TextSelect(none)
				&::-moz-placeholder
					transform: translateX(.25rem)
					TextSelect(none)
				&:-ms-input-placeholder
					transform: translateX(.25rem)
					TextSelect(none)
				&:-moz-placeholder
					transform: translateX(.25rem)
					TextSelect(none)
		> input
			padding: 1rem 0 1rem 1rem
			outline: none
			text-overflow: ellipsis
			flex: 1 1 auto
			z-index: 1
			&::-webkit-input-placeholder
				$Transition(all $OutCubic 200ms)
			&::-moz-placeholder
				$Transition(all $OutCubic 200ms)
			&:-ms-input-placeholder
				$Transition(all $OutCubic 200ms)
			&:-moz-placeholder
				$Transition(all $OutCubic 200ms)
			&:active, &:focus
				&::-webkit-input-placeholder
					transform: translateX(1rem)
					opacity: 0
				&::-moz-placeholder
					transform: translateX(1rem)
					opacity: 0
				&:-ms-input-placeholder
					transform: translateX(1rem)
					opacity: 0
				&:-moz-placeholder
					transform: translateX(1rem)
					opacity: 0
		> .background
			border-radius: inherit
			z-index: -1

@media screen and (min-width: 2560px)
	#archive-view .archive
		.archive-item
			height: 25rem
			width: 18rem
			flex: 0 0 @width

@media screen and (min-width: 768px)
	#archive-view
		.archives-header
			$AlignContent(center)
		.hide-slider
			transform: none !important

@media screen and (max-width: 768px)
	#archive-view
		.archives-header
			.switch-archive
				$DisplayFlex()
			.archive-link
				padding: .5rem 5rem
				flex: 0 0 100%
				.butn
					width: 100%
		.archive
			.archive-item
				height: 12.5rem
				width: 9rem
				flex: 0 0 @width

@media screen and (max-width: 425px)
	#archive-view .archive
		.filter > input
			flex: 1 1 100%
</style>

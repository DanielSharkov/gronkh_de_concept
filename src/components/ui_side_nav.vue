<template>
	<div class="nav">
		<div
			v-if="sideNavStatus()"
			class="side-nav-bg"
			@click="$store.commit('CLOSE_SIDENAV')"
		/>
		<grid class="side-nav" :open="sideNavStatus()">
			<!-- Header -->
			<grid class="side-nav-header center-content">
				<h1 class="single">Gronkh.de</h1>
			</grid>

			<!-- Body -->
			<transition-group tag="div" class="grid side-nav-body">
				<side-nav-butn
					v-for="link in $router.options.routes"
					v-if="link.display"
					:key="link.displayName"
					:route="link"
					@redirectRoute="onRedirectRoute"
				/>
			</transition-group>

			<!-- Footer -->
			<grid class="side-nav-footer">
				<a class="about-app link" @click="onRedirectRoute('/about')">
					Über diese Anwendung
				</a>
				<butn
					flat
					iconType="material-icons"
					notRound
					class="toggle-theme"
					:icon="themeModeToggle('icon')"
					:backColor="themeModeToggle('color')"
					:rippleColor="themeModeToggle('color')"
					@click.native="$store.commit('TOGGLE_THEME_MODE')"
				/>
			</grid>
		</grid>
		<a
		@click="toggleSideNav()"
		class="burger-menu side-nav-toggle"
		:open="sideNavStatus()">
			<div class="close" :open="sideNavStatus()">
				<div class="icon"/>
			</div>
		</a>
	</div>
</template>

<script>
export default {
	methods: {
		toggleSideNav() {
			if (this.$store.state.sideNav.status) {
				return this.$store.commit('CLOSE_SIDENAV')
			}
			this.$store.commit('OPEN_SIDENAV')
		},
		onRedirectRoute(route) {
			this.$store.commit('CLOSE_SIDENAV')
			if (
				route === this.$route.fullPath ||
				route === `${this.$route.fullPath}/`
			) return

			this.$router.push(route)
			document.querySelector('#app').scrollTop = 0
		},
		themeModeToggle(type) {
			switch (type) {
				case 'color':
					if (this.$store.getters.IsLightMode) return '#7e57c2'
					return '#fff263'
				case 'icon':
					if (this.$store.getters.IsLightMode) return 'brightness_2'
					return 'brightness_7'
				default:
					return 'error@toggleModeToggle'
			}
		},
		sideNavStatus() {
			return this.$store.state.sideNav.status
		},
	},
}
</script>

<style lang="stylus" scoped>
@import "../styles/global_variables"
@import "../styles/burger_menu"

.lightmode .nav
	.side-nav
		background-color: $LightModeBG
		&[open]
			$DropShadow(15, 'dark')
.darkmode .nav
	.side-nav
		background-color: $DarkModeBG
		&[open]
			$DropShadow(15, 'light')

.nav
	position: fixed
	height: 100%
	z-index: 45
	.side-nav-bg
		position: fixed
		height: 100%
		width: 100%
	.side-nav
		position: fixed
		top: 0
		left: 0
		height: 100%
		width: 25rem
		flex-flow: column nowrap
		overflow: hidden
		overflow-y: auto
		transform: translateX(-(@width))
		$TextSelect(none)
		$Transition(transform $OutCubic 250ms)
		&[open]
			$SmoothAnimation()
			.side-nav-header, .side-nav-body, .side-nav-footer
				$SmoothAnimation()
		&-toggle
			position: absolute
			left: 0
			top: 0
			padding: 1rem
			$Transition(transform $OutCubic 250ms)
			cursor: pointer
			$SmoothAnimation()
		&-header, &-body, &-footer
			position: relative
			width: 100%
			flex: 0 0 auto
			flex-flow: row wrap
			align-items: center
			align-self: flex-start
			z-index: 1
			transform: translateX(-2.5rem)
			$Transition(transform $InOutCubic 300ms)
		&-header
			padding: 2rem 0
		&-footer
			margin-top: auto
			justify-content: space-between
			.about-app
				margin: 1rem

@media screen and (max-width: 425px)
	.nav
		.side-nav
			width: 80vw
			transform: translate(-(@width), 0)
</style>

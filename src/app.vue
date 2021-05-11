<template>
	<div
	id="app"
	@scroll="$root.ON_SCROLL"
	:lockScroll="$store.state.lockBg.status"
	:class="[ $store.state.themeMode+'mode' ]"
	:side-nav-open="$store.state.sideNav.status">
		<title>{{ $store.state.pageTitle }}</title>
		<link
			src="../assets/font/material_icons/material_icons.css"
			rel="stylesheet"
		>
		<!-- Mobile status bar color -->
		<meta name="theme-color" :content="statusBarColor()"/>
		<meta
			name="apple-mobile-web-app-status-bar-style"
			:content="statusBarColor()"
		/>

		<menu-bar/>
		<side-nav/>
		<div
			:active="$store.state.lockBg.status"
			id="lock-bg"
			key="lock-bg"
			:style="{ opacity: $store.state.lockBg.opacity }"
		/>
		<modal-viewer v-if="$store.state.modal.status"/>
		<router-view viewport/>
	</div>
</template>

<script>
export default {
	name: 'App',
	methods: {
		statusBarColor() {
			if (this.$store.getters.IsLightMode) {
				return this.$store.state.primary1
			}
			return '#0b1013'
		},
	},
}
</script>

<style lang="stylus">
@import './styles/global_variables'

#app
	> [viewport], > .menu-bar
		$Transition(transform $OutCubic 200ms)
	&[side-nav-open]
		> [viewport]
			transform: translateX(25rem)
		> .menu-bar
			transform: translateX(21rem)

@media screen and (max-width: 425px)
	#app[side-nav-open]
		> [viewport]
			transform: translateX(80vw)
		> .menu-bar
			transform: translateX(calc(80vw - 4rem))
</style>

<style src="../assets/font/font_awesome/web-fonts-with-css/css/fontawesome-all.min.css"/>
<style src="../assets/font/line_awesome/css/line-awesome.min.css"/>
<style src="../assets/font/material_icons/material_icons.css"/>
<style src="./styles/user_interface.styl" lang="stylus"/>

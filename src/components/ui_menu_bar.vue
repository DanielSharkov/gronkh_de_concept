<template>
	<grid
	class="menu-bar DisableMarker"
	:class="{ 'menu-bar-onscrolled': $root.scrollPosition > 0 }">
		<h5 class="title medium-font">{{ $store.state.menubarTitle }}</h5>
	</grid>
</template>

<style lang="stylus" scoped>
@import "../styles/global_variables"

.lightmode .menu-bar-onscrolled
	background-color: #fff
	$DropShadow(5, 'light')

.darkmode .menu-bar-onscrolled
	background-color: $DarkModeBGContrast
	$DropShadow(5, 'dark')

.menu-bar
	position: fixed
	top: -1px
	height: 4rem
	width: 100%
	padding-left: 4rem
	z-index: 40
	&:not(.menu-bar-onscrolled)
		pointer-events: none
	.title
		margin: 0
		margin-left: 1rem
		flex: 0 0 auto
</style>

<template>
	<grid
	:active="onActiveRoute(route.path)"
	:name="route.displayName"
	class="side-nav-route non-selectable"
	flexFlow="row wrap">
		<button
		v-ripple
		:rippleColor="rippleColorOnActive(route.path)"
		@click="$emit('redirectRoute', route.path)">
			<icon :type="route.icon.type" :icon="route.icon.name"/>
			<span class="name">{{ route.displayName }}</span>
		</button>
		<div
		v-if="route.children"
		v-ripple
		:rippleColor="rippleColorOnActive(route.path)"
		@click="collapsSubRoutes = !collapsSubRoutes"
		:collapsed="!collapsSubRoutes"
		class="sub-routes-collapse">
			<icon small type="la" icon="angle-up"/>
			<div class="background"/>
		</div>
		<div
		:collapsed="!collapsSubRoutes"
		class="sub-routes-routes"
		ref="subRoutes"
		flexFlow="row wrap">
			<button
			v-for="subroute in route.children"
			:key="subroute.displayName"
			v-if="subroute.display"
			v-ripple
			:rippleColor="rippleColorOnActive(route.path)"
			@click="$emit('redirectRoute', `/archiv/${subroute.path}`)"
			:active="onActiveRoute(`/archiv/${subroute.path}`)"
			:name="subroute.displayName">
				<icon :type="subroute.icon.type" :icon="subroute.icon.name"/>
				<span class="name">{{ subroute.displayName }}</span>
			</button>
		</div>
	</grid>
</template>

<script>
export default {
	name: 'SideNavButton',
	props: ['route'],
	data() {
		return {
			collapsSubRoutes: true,
		}
	},
	methods: {
		onActiveRoute(path) {
			for (let itr = 0; itr < this.$route.matched.length; itr++) if (
				this.$route.matched[itr].path === path ||
				this.$route.fullPath === path
			) return true

			return false
		},
		rippleColorOnActive(path) {
			if (this.onActiveRoute(path)) return 'none'
			return this.$store.state.primary1
		},
	},
	mounted() {
		let subRoutes = this.$refs.subRoutes
		subRoutes.style.maxHeight = `${subRoutes.clientHeight}px`
		this.collapsSubRoutes = false
	},
}
</script>


<style lang="stylus" scoped>
@import "../styles/global_variables"

.lightmode .side-nav-route
	&:not([active]):hover
		background-color: rgba(#000, .05)
	.sub-routes
		&-collapse
			&:hover.background
				background-color: rgba(#000, .05)
		&-routes > button:not([active]):hover
			background-color: rgba(#000, .05)
.darkmode .side-nav-route
	&:not([active]):hover
		background-color: rgba(#fff, .05)
	.sub-routes
		&-collapse
			.icon
				color: #fff
			&:hover.background
				background-color: rgba(#fff, .05)
		&-routes > button:not([active]):hover
			background-color: rgba(#fff, .05)

.side-nav-route
	position: relative
	margin: .5rem 1rem
	flex: 1 1 100%
	overflow: hidden
	$BorderRadius()
	$SmoothAnimation()
	> button, > .sub-routes-collapse, > .sub-routes-routes
		$SmoothAnimation()
	button
		$DisplayFlex()
		flex: 1 0 auto
		align-items: center
		outline: none
		cursor: pointer
		.icon, .name
			flex: 0 0 auto
		.icon
			margin: 1rem
	&[active]
		> button, > .sub-routes-collapse
			background-color: $primary
			.icon, .name
				color: #fff
			.icon
				color: @color
		.sub-routes-routes
			background-color: rgba($primary, .15)
	.sub-routes
		&-collapse
			position: relative
			margin-left: auto
			flex: 0 0 auto
			cursor: pointer
			.icon
				margin: 1.15rem
				transform: rotate(0deg)
				$Transition(transform $OutCubic 150ms)
			&[collapsed] .icon
				transform: rotate(-180deg)
		&-routes
			$DisplayFlex()
			flex: 1 1 100%
			flex-flow: row wrap
			overflow: hidden
			$Transition(
				transform $OutCubic 150ms,
				max-height $OutCubic 150ms
			)
			&[collapsed]
				max-height: 0 !important
			> button
				padding-left: 1.5rem
				flex: 1 0 100%
				.icon, .name
					color: inherit
				.icon
					margin: .5rem
				&[active]
					background-color: rgba($primary, .75)
					color: #fff
</style>


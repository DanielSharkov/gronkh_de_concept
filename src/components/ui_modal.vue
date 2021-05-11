<template>
	<div class="modal">
		<slot name="background"/>
		<slot name="header"/>
		<slot name="body"/>
		<slot name="footer"/>
	</div>
</template>

<style lang="stylus" scoped>
@import "../styles/global_variables"

.lightmode .modal
	$DropShadow(25, 'light')
	background-color: $LightModeBG

.darkmode .modal
	$DropShadow(25, 'dark')
	background-color: $DarkModeBG

.modal
	position: relative
	$DisplayFlex()
	margin: auto
	flex: 0 0 auto
	flex-flow: column nowrap
	overflow: hidden
	$BorderRadius()
	align-self: center
	z-index: 1
	> *
		$DisplayFlex()
		width: 100%
		flex: 1 1 100%
		flex-flow: row wrap
	.backdrop
		display: block
		height: 300px
		width: 100%
		background-size: cover
		background-position: center
	&-background
		position: absolute
		top: 0
		left: 0
		height: 100%
		width: 100%
		z-index: -1
	.footer
		margin-top: auto
		> *
			margin: 0
			&:last-child
				margin-left: auto
			&:first-child
				margin-left: 0

@media screen and (max-width: 768px)
	.modal-viewer .modal
		max-width: 100%
</style>


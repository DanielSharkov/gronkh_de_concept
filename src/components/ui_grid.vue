<template>
	<div
	class="grid"
	:class="{
		'cards': cards,
		'hoverable': cards && hoverable,
		'clickable': cards && clickable,
	}"
	:style="{
		flex: flex,
		flexFlow: flexFlow,
		justifyContent: justifyContent,
		alignContent: alignContent,
		alignItems: alignItems
	}">
		<slot/>
	</div>
</template>

<script>
export default {
	name: 'UI-Grid',
	props: {
		cards: Boolean,
		hoverable: Boolean,
		clickable: Boolean,
		flex: String,
		flexFlow: String,
		justifyContent: String,
		alignContent: String,
		alignItems: String,
	}
}
</script>

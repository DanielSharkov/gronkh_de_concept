<template>
	<i
	class="icon"
	:class="[
		CHECK_TYPE('class'),
		`${CHECK_TYPE('icon')}-${icon}`,
		{ 'smaller': smaller },
		{ 'small': small },
		{ 'large': large },
		{ 'larger': larger },
	]"
	:style="{ color: color }">
		{{ ON_MATERIAL_ICON() }}
	</i>
</template>

<script>
export default {
	name: 'UI-Icon',
	props: {
		type: String,
		icon: String,
		color: String,
		smaller: Boolean,
		small: Boolean,
		large: Boolean,
		larger: Boolean,
	},
	methods: {
		CHECK_TYPE(resolve) {
			let resolveIcon = resolve === 'icon'
			switch (this.type) {
				case 'fa-regular':
					return resolveIcon ? 'fa' : 'far'
				case 'fa-solid':
					return resolveIcon ? 'fa' : 'fas'
				case 'fa-brand':
					return resolveIcon ? 'fa' : 'fab'
				case 'line-awesome':
					return 'la'
				default:
					return this.type
			}
		},
		ON_MATERIAL_ICON() {
			if (this.type === 'material-icons') return this.icon
		},
	},
}
</script>

<style lang="stylus" scoped>
.icon
	&.smaller
		font-size: .75rem
		&.fab, &.fas, &.far
			&:before, &:after
				font-size: .5rem
	&.small
		font-size: 1rem
		&.fab, &.fas, &.far
			&:before, &:after
				font-size: .75rem
	&.large
		font-size: 1.5rem
		&.fab, &.fas, &.far
			&:before, &:after
				font-size: 1.25rem
	&.larger
		font-size: 2rem
		&.fab, &.fas, &.far
			&:before, &:after
				font-size: 1.75rem
</style>

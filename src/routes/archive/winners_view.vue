<template>
	<grid id="winners-view">
		<h3 class="title single">Winner, Winner, nur Neid und alles Spinner!</h3>
		<grid class="collection center-content cards hoverable">
			<grid
			v-for="(entry, index) in $store.state.archive.giveawayWinners"
			:key="index"
			class="entry center-content">
				<grid
				class="user"
				:class="{ 'random-user': !entry.name }">
					<div
						v-if="entry.image"
						class="image"
						:style="{
							backgroundImage: entry.image ?
								`url(${entry.image})` : ''
						}"
					/>
					<icon
						v-else
						larger
						type="material-icons"
						icon="person"
						class="image-notset"
					/>
					<h5 class="name">
						{{ entry.name ? entry.name : 'Zufällig' }}
					</h5>
				</grid>
				<grid class="info center-content">
					<grid>
						<span class="title">Gewann</span>
						<h6 class="value price">
							{{ entry.price }}
						</h6>
					</grid>

					<grid v-if="entry.date">
						<span class="title">Am</span>
						<h6 class="value date">
							{{ entry.date }}
						</h6>
					</grid>

					<grid v-if="entry.type">
						<span class="title">Typ der Verlosung</span>
						<h6 class="value type">
							{{ entry.type }}
						</h6>
					</grid>

					<grid v-if="entry.redeemIn">
						<span class="title">Einlösbar in</span>
						<h6 class="value platform">
							{{ entry.redeemIn }}
						</h6>
					</grid>

					<grid v-if="entry.givenAt">
						<span class="title">Verlosungs Ort</span>
						<h6 class="value given-at">
							{{ entry.givenAt }}
						</h6>
					</grid>

					<grid v-if="entry.provided">
						<span class="title">Unterstützt von</span>
						<h6 class="value provided">
							{{ entry.provided }}
						</h6>
					</grid>
				</grid>
			</grid>
		</grid>
	</grid>
</template>

<style lang="stylus">
@import '../../styles/global_variables'

.lightmode
	#winners-view
		.collection .entry .info > *:after
			border-color: rgba(#000, .1)
.darkmode
	#winners-view
		.collection .entry .info > *:after
			border-color: rgba(#fff, .1)

#winners-view
	> .title
		margin: 1rem
	.collection
		flex: 1 1 100%
		align-items: flex-start
		.entry
			margin: 1rem
			flex: 0 1 300px
			align-content: flex-start
			align-items: flex-start
			.user
				flex: 1 1 100%
				flex-flow: row nowrap
				overflow: hidden
				.name
					flex: 1 1 100%
					text-align: left
					overflow: hidden
					text-overflow: ellipsis
				.image, .image-notset
					height: 3rem
					width: @height
					margin-right: 1rem
					flex: 0 0 auto
					border-radius: 50%
				.image
					$CenterBGImage()
					background-color: $primary
				&.random-user
					opacity: .25
			.info
				flex: 1 1 100%
				justify-content: flex-start
				> *
					position: relative
					padding: .5rem 0
					flex: 1 1 100%
					&:after
						content: ''
						position: absolute
						left: 0
						bottom: 0
						width: 100%
						border-bottom: solid 1px
					&:last-child
						padding-bottom: 0
						&:after
							content: unset
					> *
						flex: 1 1 100%
						text-align: left
			.title
				font-size: $SmallFS3
				$BoldFW()
				text-transform: uppercase
			.value
				font-size: $BasicFS
				$MediumFW()
			.price
				color: $primary
</style>

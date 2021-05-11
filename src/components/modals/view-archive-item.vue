<template>
	<modal>
		<div slot="header" class="header center-content">
			<div class="background">
				<div
					class="background-image"
					:style="{ backgroundImage: `url(${data.image})` }"
				/>
			</div>
			<div class="close-modal" @click="$emit('closeModal')">
				<butn iconType="material-icons" fab="close"/>
			</div>
			<div
				class="preview"
				:style="{
					backgroundImage: `url(${data.image})`,
					borderColor: data.color
				}"
			/>
			<div class="shop">
				<butn
					large
					fab="donate"
					iconType="fa-solid"
					:fontColor="$store.state.primary1"
					:rippleColor="$store.state.primary1"
					@click.native="this.window.open(data.buyGame)"
				/>
			</div>
		</div>
		<grid slot="body" class="body">
			<h3 class="game-name">{{ data.name }}</h3>
			<grid class="data-container episodes">
				<span class="title heading">
					<icon type="material-icons" icon="video_library"/>
					Episoden
				</span>
				<span class="value">
					{{ $CommaSeparator(data.episodes ? data.episodes : 0) }}
				</span>
			</grid>
			<grid class="data-container datavolume">
				<span class="title heading">
					<icon type="material-icons" icon="sd_storage"/>
					Speicher
				</span>
				<span>{{ convertDataVolume(data.dataVolume) }}</span>
			</grid>
			<grid class="data-container duration">
				<span class="title heading">
					<icon type="material-icons" icon="access_time"/>
					Gesamtlänge
				</span>
				<div class="time-values">
					<tool-tip>
						<span slot="parent" class="parent value">{{ weeks }}</span>
						<div slot="tip" class="tip">
							<span class="text">Wochen</span>
						</div>
					</tool-tip>
					<span class="separator">:</span>
					<tool-tip>
						<span slot="parent" class="parent value">{{ days }}</span>
						<div slot="tip" class="tip">
							<span class="text">Tage</span>
						</div>
					</tool-tip>
					<span class="separator">:</span>
					<tool-tip>
						<span slot="parent" class="parent value">{{ hours }}</span>
						<div slot="tip" class="tip">
							<span class="text">Stunden</span>
						</div>
					</tool-tip>
					<span class="separator">:</span>
					<tool-tip>
						<span slot="parent" class="parent value">{{ minutes }}</span>
						<div slot="tip" class="tip">
							<span class="text">Minuten</span>
						</div>
					</tool-tip>
					<span class="separator">:</span>
					<tool-tip>
						<span slot="parent" class="parent value">{{ secounds }}</span>
						<div slot="tip" class="tip">
							<span class="text">Sekunden</span>
						</div>
					</tool-tip>
				</div>
			</grid>
			<grid v-if="data.category" class="data-container categories">
				<span class="title heading">
					<icon type="material-icons" icon="style"/>
					Kategorie
				</span>
				<grid class="container">
					<div
					v-for="(category, index) in data.category"
					:key="index"
					v-if="index <= 4"
					class="item">
						<tool-tip>
							<div
							slot="parent"
							class="parent test"
							:style="{
								color: $store.state.gameGenres[category].color
							}">
								<icon
									:type="$store.state.gameGenres[category].icon.type"
									:icon="$store.state.gameGenres[category].icon.name"
								/>
							</div>
							<div slot="tip" class="tip">
								<span class="text">
									{{ $store.state.gameGenres[category].name }}
								</span>
							</div>
						</tool-tip>
					</div>
					<button v-if="data.category.length > 5" class="show-more">
						<icon type="material-icons" icon="add"/>
					</button>
				</grid>
			</grid>
			<grid v-if="data.platform" class="data-container platforms">
				<span class="title heading">
					<icon type="material-icons" icon="devices"/>
					Platform
				</span>
				<grid class="container">
					<div
					v-for="(platform, index) in data.platform"
					:key="index"
					v-if="index <= 4"
					class="item">
						<tool-tip>
							<div
							slot="parent"
							class="parent test"
							:style="{
								color: $store.state.platformes[platform].color
							}">
								<icon
									:type="$store.state.platformes[platform].icon.type"
									:icon="$store.state.platformes[platform].icon.name"
								/>
							</div>
							<div slot="tip" class="tip">
								<span class="text">
									{{ $store.state.platformes[platform].name }}
								</span>
							</div>
						</tool-tip>
					</div>
					<button v-if="data.platform.length > 5" class="show-more">
						<icon type="material-icons" icon="add"/>
					</button>
				</grid>
			</grid>
			<grid v-if="data.links" class="data-container links">
				<span class="title heading single">
					<icon type="material-icons" icon="link"/>
					Verlinkungen
				</span>
				<grid class="container center-content">
					<div
					v-for="(link, index) in data.links"
					:key="index"
					v-if="index <= 4"
					class="item">
						<tool-tip>
							<div
							slot="parent"
							class="parent test"
							:style="{
								color: $store.state.linkTypes[link.type].color
							}">
								<icon
									:type="$store.state.linkTypes[link.type].icon.type"
									:icon="$store.state.linkTypes[link.type].icon.name"
								/>
							</div>
							<div slot="tip" class="tip">
								<span class="text">
									{{ $store.state.linkTypes[link.type].name }}
								</span>
							</div>
						</tool-tip>
					</div>
					<button v-if="data.links.length > 5" class="show-more">
						<icon type="material-icons" icon="add"/>
					</button>
				</grid>
			</grid>
		</grid>
	</modal>
</template>

<script>
import {timeConv} from '../../mixins/time_conv'
import {bitConv} from '../../mixins/bit_conv'

export default {
	name: 'ModalViewArchiveItem',
	data() {
		return {
			data: this.$store.state.modal.data,
			weeks: '00',
			days: '00',
			hours: '00',
			minutes: '00',
			secounds: '00',
		}
	},
	methods: {
		openLink(link) {
			if (link) window.open(link)
			return
		},
		setDuration() {
			let weeks, days, hours, minutes, secounds, duration
			if (this.data.duration) duration = timeConv.CERTAIN(
				this.data.duration,
				['secounds','minutes','hours','days','weeks'],
			)
			// If time is not defined
			if (!duration) return

			// Weeks
			if (duration.WEEKS) {
				duration.WEEKS = duration.WEEKS.toFixed(0)
				this.weeks = duration.WEEKS
				if (duration.WEEKS < 10) {
					this.weeks = '0' + duration.WEEKS
				}
			}
			// Days
			if (duration.DAYS) {
				duration.DAYS = duration.DAYS.toFixed(0)
				this.days = duration.DAYS
				if (duration.DAYS < 10) {
					this.days = '0' + duration.DAYS
				}
			}
			// Hours
			if (duration.HOURS) {
				duration.HOURS = duration.HOURS.toFixed(0)
				this.hours = duration.HOURS
				if (duration.HOURS < 10) {
					this.hours = '0' + duration.HOURS
				}
			}
			// Minutes
			if (duration.MINUTES) {
				duration.MINUTES = duration.MINUTES.toFixed(0)
				this.minutes = duration.MINUTES
				if (duration.MINUTES < 10) {
					this.minutes = '0' + duration.MINUTES
				}
			}
			// Secounds
			if (duration.SECOUNDS) {
				duration.SECOUNDS = duration.SECOUNDS.toFixed(0)
				this.secounds = duration.SECOUNDS
				if (duration.SECOUNDS < 10) {
					this.secounds = '0' + duration.SECOUNDS
				}
			}
		},
		convertDataVolume(val) {
			// Terabyte
			if (bitConv.isThis('terabyte', val)) return `${
				this.$CommaSeparator(bitConv.TERABYTE(val).toFixed(2))
			} Terabyte`

			// Gigabyte
			else if (bitConv.isThis('gigabyte', val)) return `${
				this.$CommaSeparator(bitConv.GIGABYTE(val).toFixed(2))
			} Gigabyte`

			// Megabyte
			else if (bitConv.isThis('megabyte', val)) return `${
				this.$CommaSeparator(bitConv.MEGABYTE(val).toFixed(2))
			} Megabyte`

			// Kilobyte
			else if (bitConv.isThis('kilobyte', val)) return `${
				this.$CommaSeparator(bitConv.KILOBYTE(val).toFixed(2))
			} Kilobyte`

			// byte
			else if (bitConv.isThis('byte', val)) return `${
				this.$CommaSeparator(bitConv.BYTE(val).toFixed(2))
			} Byte`

			// Bit
			else if (val) return `${val} bit`

			// If null
			return 0
		},
	},
	mounted() {
		this.setDuration()
	},
}
</script>

<style lang="stylus">
@import '../../styles/global_variables'

.lightmode #view-archive-item
	.header
		> .background
			background-color: $LightModeBGContrast
		.preview
			background-color: $LightModeBG
			$DropShadow(5, 'light')
	.body
		.categories, .platforms, .links
			.container .item .test
				$DropShadow(1, 'light')
				background-color: $LightModeBG
				&:hover
					$DropShadow(5, 'light')

.darkmode #view-archive-item
	.header
		> .background
			background-color: $DarkModeBGContrast
		.preview
			background-color: $DarkModeBG
			$DropShadow(5, 'dark')
	.body
		.categories, .platforms, .links
			.container .item .test
				$DropShadow(1, 'dark')
				background-color: $DarkModeBGContrast
				&:hover
					$DropShadow(5, 'dark')

.modal-viewer
	.modal
		width: 30rem

#view-archive-item
	.header
		position: relative
		.close-modal
			position: absolute
			top: 0
			right: 0
			margin: 0
			padding: .5rem
			z-index: 10
			cursor: pointer
			.butn
				margin: 1rem
		.preview
			position: relative
			height: 12.5rem
			min-height: @height
			width: 9rem
			min-width: @width
			margin: 4rem 0
			flex: 0 0 @width
			$CenterBGImage()
			background-color: $LightModeBG
			$BorderRadius()
			overflow: hidden
			z-index: 1
		> .background
			overflow: hidden
			pointer-events: none
			transform: scale(2, 1.1) translate(0, -1.5rem)
			border-radius: 50%
			> .background-image
				$SetFilter(blur(4px))
				transform: scale(.6, 1) translate(0, 1rem)
				opacity: .25
		.shop
			position: absolute
			right: 1rem
			bottom: 3rem
	.body
		$AlignContent(flex-start)
		.game-name
			flex: 1 1 100%
			margin: 1rem
			word-break: break-word
		.data-container
			position: relative
			$DisplayFlex()
			margin: 2rem 1rem
			flex: 1 1 calc(50% - 2rem)
			max-width: calc(50% - 2rem)
			flex-flow: row wrap
			> *
				flex: 1 1 100%
				$AlignContent(center)
				text-align: center
			.title
				$DisplayFlex()
				margin-bottom: .25rem
				$TextSelect(none)
				text-transform: uppercase
				font-size: $SmallFS2
				.icon
					margin-right: .5rem
					font-size: (@font-size * 1.25)
		.duration .time-values
			$DisplayFlex()
			flex-flow: row nowrap
			.value
				position: relative
				padding: .2rem
				&:before
					content: ''
					position absolute
					left: 0
					bottom: 0
					height: 100%
					width: 100%
					border-bottom: solid .1rem
					opacity: .1
		.categories, .platforms, .links
			.container
				flex-flow: row nowrap
				.item, .show-more
					.test
						position: relative
						$DisplayFelx()
						height: 2.5rem
						width: @height
						padding: .5rem
						flex: 0 0 auto
						border-radius: 50%
						$AlignContent(center)
				.item
					position: relative
					width: 1.5rem
					left: -.5rem
					transform: scale(1)
					.test
						height: 2.25rem
						width: @height
						.icon
							color: inherit
					.tool-tip
						left: .4rem
					&:nth-child(1)
						z-index: 5
					&:nth-child(2)
						z-index: 4
					&:nth-child(3)
						z-index: 3
					&:nth-child(4)
						z-index: 2
					&:nth-child(5)
						z-index: 1
					&:hover
						margin: 0 1rem
						z-index: 5
						.test
							transform: scale(1.2)
				.show-more
					position: relative
					left: .5rem
		.links
			.container
				flex: 1 1 100%
		.shop .butn
			margin: 0
</style>


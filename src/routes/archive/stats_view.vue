<template>
	<transition-group tag="div" id="stats" class="cards">
		<grid class="stats-item" key="dataVolume" id="data-volume">
			<h6 class="title">
				<icon type="material-icons" icon="sd_storage"/>
				Speicherkapazität
			</h6>
			<grid class="data-container">
				<grid class="hoverable data">
					<span class="subject heading">Terabyte</span>
					<span class="value">
						{{ $CommaSeparator(archiveSize.TERABYTE.toFixed(2)) }}
					</span>
				</grid>
				<grid class="hoverable data">
					<span class="subject heading">Gigabyte</span>
					<span class="value">
						{{ $CommaSeparator(archiveSize.GIGABYTE.toFixed(2)) }}
					</span>
				</grid>
				<grid class="hoverable data">
					<span class="subject heading">Megabyte</span>
					<span class="value">
						{{ $CommaSeparator(archiveSize.MEGABYTE.toFixed(2)) }}
					</span>
				</grid>
				<grid class="hoverable data">
					<span class="subject heading">Kilobyte</span>
					<span class="value">
						{{ $CommaSeparator(archiveSize.KILOBYTE.toFixed(2)) }}
					</span>
				</grid>
				<grid class="hoverable data">
					<span class="subject heading">Byte</span>
					<span class="value">
						{{ $CommaSeparator(archiveSize.BYTE.toFixed(2)) }}
					</span>
				</grid>
				<grid class="hoverable data">
					<span class="subject heading">Bit</span>
					<span class="value">
						{{ $CommaSeparator(archiveSize.BIT.toFixed(2)) }}
					</span>
				</grid>
			</grid>
		</grid>

		<grid class="stats-item" key="amount" id="video-amount">
			<h6 class="title">
				<icon type="material-icons" icon="video_library"/>
				Anzahl
			</h6>
			<grid class="data-container">
				<grid class="hoverable data">
					<span class="subject heading">Let's Plays</span>
					<span class="value">
						{{ totalEntryiesCount('letsplays') }}
					</span>
				</grid>
				<grid class="hoverable data">
					<span class="subject heading">Livestreams</span>
					<span class="value">
						{{ totalEntryiesCount('livestreams') }}
					</span>
				</grid>
				<grid class="hoverable data">
					<span class="subject heading">Podcasts</span>
					<span class="value">
						{{ totalEntryiesCount('podcasts') }}
					</span>
				</grid>
				<grid class="hoverable data">
					<span class="subject heading">Summe</span>
					<span class="value">
						{{ totalEntryiesCount() }}
					</span>
				</grid>
				<grid title="Let's Plays Episoden" class="hoverable data">
					<span class="subject heading">Let's Plays Episoden</span>
					<span class="value">
						{{ totalEntryiesCount('letsplaysepisodes') }}
					</span>
				</grid>
			</grid>
		</grid>

		<grid class="stats-item" key="totalDuration" id="total-duration">
			<h6 class="title">
				<icon type="material-icons" icon="access_time"/>
				Dauer
			</h6>
			<grid class="data-container">
				<grid
				v-for="(archive, index) in archives"
				:key="index"
				:icon="archive.title"
				class="hoverable data">
					<span class="subject heading">
						<icon
							:type="archive.icon.type"
							:icon="archive.icon.name"
						/>
						{{ archive.title }}
					</span>
					<div class="value duration">
						<span>{{ archive.weeks }} Wo.</span>
						<span>{{ archive.days }} Tage</span>
						<span>{{ archive.hours }} Stu.</span>
						<span>{{ archive.minutes }} Min.</span>
						<span>{{ archive.secounds }} Sek.</span>
					</div>
				</grid>
			</grid>
		</grid>

		<grid
		class="stats-item"
		key="livestreamFormats"
		id="livestream-formats">
			<h6 class="title">
				<icon type="material-icons" icon="style"/>
				Livestream Formate
			</h6>
			<grid class="data-container">
				<butn
				v-for="format in $store.state.livestreamFormats"
				:key="format.name"
				outline
				round
				:backColor="format.color">
					<span>{{ format.name }}</span>
				</butn>
			</grid>
		</grid>
	</transition-group>
</template>

<script>
import {bitConv} from '../../mixins/bit_conv'
import {timeConv} from '../../mixins/time_conv'

export default {
	data() {
		return{
			archiveSize: {
				TERABYTE: .0,
				GIGABYTE: .0,
				MEGABYTE: .0,
				KILOBYTE: .0,
				BYTE: .0,
				BIT: .0,
			},
			archives: {
				letsplays: {
					title: "Let's Plays",
					icon: { type: 'material-icons', name: 'gamepad' },
					weeks: 0,
					days: 0,
					hours: 0,
					minutes: 0,
					secounds: 0,
				},
				livestreams: {
					title: 'Livestreams',
					icon: { type: 'material-icons', name: 'rss_feed' },
					weeks: 0,
					days: 0,
					hours: 0,
					minutes: 0,
					secounds: 0,
				},
				podcasts: {
					title: 'Podcasts',
					icon: { type: 'material-icons', name: 'mic' },
					weeks: 0,
					days: 0,
					hours: 0,
					minutes: 0,
					secounds: 0,
				},
				total: {
					title: 'Summe',
					icon: { type: 'material-icons', name: 'poll' },
					weeks: 0,
					days: 0,
					hours: 0,
					minutes: 0,
					secounds: 0,
				},
			},
		}
	},
	methods: {
		totalEntryiesCount(type) {
			let count = 0
			switch (type) {
				case 'letsplays':
					count = this.$store.state.archive.letsplays.length
					break
				case 'livestreams':
					count = this.$store.state.archive.livestreams.length
					break
				case 'podcasts':
					count = this.$store.state.archive.podcasts.length
					break
				case 'letsplaysepisodes':
					let archive = this.$store.state.archive
					for (
						let itr = 0;
						itr < archive.letsplays.length;
						itr++
					) if (archive.letsplays[itr].episodes) {
						count += archive.letsplays[itr].episodes
					}
					break
				default:
					count =	this.$store.state.archive.letsplays.length +
							this.$store.state.archive.livestreams.length +
							this.$store.state.archive.podcasts.length
					break
			}
			return this.$CommaSeparator(count)
		},
		getBitSize() {
			let size = 0
			let archive = this.$store.state.archive

			// Add letsplays size
			for (
				let itr = 0;
				itr < archive.letsplays.length;
				itr++
			) if (archive.letsplays[itr].dataVolume) {
				size += archive.letsplays[itr].dataVolume
			}

			// Add livestreams size
			for (
				let itr = 0;
				itr < archive.livestreams.length;
				itr++
			) if (archive.livestreams[itr].dataVolume) {
				size += archive.livestreams[itr].dataVolume
			}

			// Add podcasts size
			for (
				let itr = 0;
				itr < archive.podcasts.length;
				itr++
			) if (archive.podcasts[itr].dataVolume) {
				size += archive.podcasts[itr].dataVolume
			}

			this.archiveSize = bitConv.CERTAIN(size, [
				'bit', 'byte', 'kilobyte',
				'megabyte', 'gigabyte', 'terabyte',
			])
		},
		getTotalDuration(type) {
			let duration = 0

			if (type === 'letsplays' || type === 'total') {
				this.$store.state.archive.letsplays.forEach(item => {
					if (item.duration) duration += item.duration
				})
			}
			if (type === 'livestreams' || type === 'total') {
				this.$store.state.archive.livestreams.forEach(item => {
					if (item.duration) duration += item.duration
				})
			}
			if (type === 'podcasts' || type === 'total') {
				this.$store.state.archive.podcasts.forEach(item => {
					if (item.duration) duration += item.duration
				})
			}

			return duration
		},
		setDuration(duration, key) {
			let durations = timeConv.CERTAIN(duration, [
				'secounds', 'minutes', 'hours',
				'days', 'weeks',
			])
			if (durations.SECOUNDS && durations.WEEKS < 1) {
				this.archives[key].secounds = Math.trunc(durations.SECOUNDS)
			}
			if (durations.MINUTES && durations.MINUTES >= 10) {
				this.archives[key].minutes = Math.trunc(durations.MINUTES)
			}
			if (durations.HOURS) {
				this.archives[key].hours = Math.trunc(durations.HOURS)
			}
			if (durations.DAYS) {
				this.archives[key].days = Math.trunc(durations.DAYS)
			}
			if (durations.WEEKS) {
				this.archives[key].weeks = Math.trunc(durations.WEEKS)
			}
		},
	},
	mounted() {
		['letsplays', 'livestreams', 'podcasts', 'total'].forEach(item => {
			this.setDuration(this.getTotalDuration(item), item)
		})
		this.getBitSize()
	},
}
</script>

<style lang="stylus">
@import '../../styles/global_variables'

.lightmode #stats
	> * .hoverable:hover
		background-color: rgba($BlueGrey, .05)
	.stats-item .data-container .data:after
		background-color: rgba($DarkModeBG, .15)
.darkmode #stats
	> * .hoverable:hover
		background-color: rgba($BlueGreyWhite, .05)
	.stats-item .data-container .data:after
		background-color: rgba($LightModeBG, .15)

#archive-view
	#stats
		align-items: flex-start
		.hoverable
			$TransitionDuration(50ms)
		.stats-item
			margin: 1rem
			padding: 0
			flex: 0 1 25rem
			overflow: hidden
			$AlignContent(center)
			.title
				$DisplayFlex()
				margin: 0
				padding: 1rem
				flex: 1 1 100%
				justify-content: flex-start
				align-items: center
				$TextSelect(none)
				color: $primary
				.icon
					margin-right: 1rem
					color: @color
			.data-container
				flex: 1 1 100%
				flex-flow: row wrap
				$AlignContent(flex-start)
				.data
					position: relative
					padding: 1rem
					flex: 1 1 100%
					flex-flow: row wrap
					$AlignContent(flex-start)
					&:after
						content: ''
						position: absolute
						left: 0
						bottom: 0
						height: 1px
						width: 100%
					&:last-child:after
						content: unset
					.subject
						$DisplayFlex()
						flex: 1 1 100%
						text-transform: uppercase
						font-size: $SmallFS3
						align-items: center
					.value
						flex: 1 1 100%
		#total-duration
			.data-container .data
				.hoverable
					$BorderRadius()
				.subject
					.icon
						font-size: $SmallFS1
						margin-right: .5rem
				.value
					$DisplayFlex()
					$AlignContent(center)
					padding: .5rem 0
					> *
						flex: 1 1 auto
						text-align: center
		#livestream-formats
			.data-container
				padding: 1rem
				> *
					flex: 1 0 auto
</style>

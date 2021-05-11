<template>
	<div id="about-application-view" class="page" flexFlow="row wrap">
		<div
			class="me"
			:style="{ backgroundImage: 'url(/assets/images/about_me.jpg)' }"
		/>
		<grid class="title center-content" flexFlow="column nowrap">
			<h5>Mit viel</h5>
			<icon class="heart" type="fa-solid" icon="heart"/>
			<h5>von Daniel Scharkov</h5>
			<h5>entwickelt und designed</h5>
			<span class="monospace version">
				GronkhApp - v{{ $AppVersion }}
			</span>
		</grid>
		<grid class="links center-content" flexFlow="row wrap">
			<span class="single">Erreichbar unter</span>
			<butn
				large
				iconType="material-icons"
				icon="email"
				backColor="#ff1744"
				rippleColor="#ff1744"
				class="link email"
				@click.native="$store.commit('OPEN_MODAL', {
					modal: 'view-contact-info',
					data: { title: 'Email', name: 'scharktv@gmail.com' },
				})"
			/>
			<butn
				large
				iconType="fa-brand"
				icon="twitter"
				backColor="#6ec6ff"
				rippleColor="#6ec6ff"
				class="link twitter"
				@click.native="openLink('http://twitter.com/Daniel_Sharkov')"
			/>
			<butn
				large
				iconType="fa-brand"
				icon="discord"
				backColor="#7289da"
				rippleColor="#7289da"
				class="link discord"
				@click.native="$store.commit('OPEN_MODAL', {
					modal: 'view-contact-info',
					data: { title: 'Discord', name: 'DanielSharkov#1300' },
				})"
			/>
			<butn
				large
				iconType="fa-brand"
				icon="twitch"
				backColor="#6343a4"
				rippleColor="#6343a4"
				class="link twitch"
				@click.native="openLink('http://twitch.tv/scharktv')"
			/>
		</grid>

		<grid class="about">
			<h2>Wichtige Information</h2>

			<h5>Die Anwendung</h5>
			<p>
				<u>
					Diese Anwendung dient derzeit nur als Inspiration
				</u> (Prototyp) für
				<a class="link blue" @click="openLink('http://gronkh.de')">
					Gronkh.de
				</a>.
			</p>
			<p>
				Viele Eigenschaften dieser Anwendung sind
				derzeitig nicht implementiert.
			</p>
			<p>
				Sobald eine Antwort für den Vorschlag dieser Anwendung kommt,
				wird diese weiterentwickelt und gewartet,
				oder bei Absage eingestellt.
			</p>

			<h5>Dient nicht als Informations Quelle</h5>
			<p>
				Alle Daten / Informationen,
				die auf dieser Anwendung zu finden sind,
				sind ausgedacht und falsch,
				oder stammen aus Quellen wie
				<a class="link blue" @click="openLink('http://gronkh.games')">
					gronkh.games
				</a>
				oder auch
				<a
				class="link blue"
				@click="openLink('http://youtube.com/gronkh')">
					youtube.com
				</a>.
			</p>
			<p>
				Diese Anwendung dient derzeit, wie gesagt,
				nur als eine Inspiration.
			</p>

			<h5>
				We
				<icon class="heart" type="fa-solid" icon="heart"/>
				open-source!
			</h5>
			<p>
				Der Quellcode dieses Projekts wird,
				nach Zustimmung von Gronkh,
				unter der MIT-Lizenz öffentlicht freigegeben.
			</p>
		</grid>
	</div>
</template>

<script>
export default {
	beforeRouteEnter (to, from, next) {
		next(vm => {
			vm.$store.commit('SET_PAGE_TITLE', 'Wat is dat?')
			vm.$store.commit('SET_MENUBAR_TITLE', 'Wat is dat?')
		})
	},
	methods: {
		openLink(link) {
			window.open(link)
		},
	},
}
</script>

<style lang="stylus">
@import '../styles/global_variables'

.lightmode #about-application-view
	> .me
		background-color: $BrightFontColorDark
	> .title .version
		color: $BrightFontColorDark
.darkmode #about-application-view
	> .me
		background-color: $BrightFontColorLight
	> .title .version
		color: $BrightFontColorLight

@keyframes heartBeating
	0%	 { transform: scale(1) }
	15%	 { transform: scale(1.125) }
	30%	 { transform: scale(1) }
	45%	 { transform: scale(1.25) }
	100% { transform: scale(1) }

#about-application-view
	max-width: 768px
	> div
		margin: 2rem
	> .me
		position: relative
		height: 10rem
		width: @height
		margin: 3rem 0
		flex: 0 0 auto
		background-position: center
		background-repeat: no-repeat
		background-size: cover
		border-radius: 50%
	> .title
		flex: 1 1 100%
		> *
			margin: 0
			flex: 0 1 auto
		.heart
			padding: .25rem
			color: $Red
			animation: heartBeating $OutCubic 1250ms infinite
	> .links
		flex: 1 1 100%
		text-align: center
		> *
			$TextSelect(none)
		.link
			flex: 0 0 auto
	> .about
		flex: 1 1 100%
		> *
			flex: 1 1 100%
			text-align: center
		h5
			margin-top: 2rem
		.heart
			display: inline-block
			color: $Red
			animation: heartBeating $OutCubic 1250ms infinite
</style>

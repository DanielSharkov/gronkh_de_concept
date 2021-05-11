import Vue from 'vue'

function Error(func, message) {
	console.error(`Error occurred @ mutation "${func}"\n${message}`)
}

export default {
	ADD_TWITCH_CHANNELS(state, data) {
		Vue.set(state.twitch.channels, data.login, data)
	},
	SET_CHANNEL_STREAM(state, info) {
		Vue.set(state.twitch.channels[info.channel], 'stream', info.data)
		state.twitch.channels[info.channel].status = true
	},
	SET_CHANNEL_STREAM_GAME(state, info) {
		Vue.set(state.twitch.channels[info.channel].stream, 'game', info.data)
	},
	ADD_DISCORD_SERVERS(state, data) {
		Vue.set(state.discord.servers, data.id, data)
	},
	LOCK_BACKGROUND(state, config) {
		state.lockBg.status = true
		let zIndex = Number(config.zIndex)
		let opacity = Number(config.opacity)
		
		if (!config.zIndex) zIndex = 0
		state.lockBg.zIndex = zIndex
		
		if (!config.opacity) opacity = .1
		state.lockBg.opacity = opacity
	},
	UNLOCK_BACKGROUND(state) {
		state.lockBg.status = false
		state.lockBg.zIndex = 0
		state.lockBg.opacity = 0
	},
	OPEN_MODAL(state, payload) {
		setTimeout( () => {
			this.commit( 'LOCK_BACKGROUND', { zIndex: 49, opacity: .6 })

			if(!payload.modal) return Error(
				'OPEN_MODAL', 'Given type invalid.',
			)
			state.modal.type = payload.modal
			state.modal.status = true
			if (payload.data) state.modal.data = payload.data
			else state.modal.data = {}
		}, 250)
	},
	CLOSE_MODAL(state) {
		this.commit('UNLOCK_BACKGROUND')

		if (state.modal.type !== null) state.modal.type = null
		else Error(
			'CLOSE_MODAL', 'Trying to reset modal.type while' +
			`modal.type already ${state.modal.type}`,
		)

		if (state.modal.status !== false) state.modal.status = false
		else Error(
			'CLOSE_MODAL', 'Trying to reset modal.status while',
			`model.status already ${state.modal.status}`,
		)

		if (state.modal.data !== null) state.modal.data = null
		else Error(
			'CLOSE_MODAL', 'Trying to reset modal.data while' +
			`model.data already ${state.modal.data}`,
		)
	},
	OPEN_SIDENAV(state) {
		this.commit( 'LOCK_BACKGROUND', { zIndex: 44, opacity: .6 })
		state.sideNav.status = true
	},
	CLOSE_SIDENAV(state) {
		this.commit('UNLOCK_BACKGROUND')
		state.sideNav.status = false
	},
	SET_MENUBAR_TITLE(state, newTitle) {
		if (typeof newTitle !== 'string') Error(
			'SET_MENUBAR_TITLE', `Want (string) got (${typeof newTitle})`,
		)
		state.menubarTitle = newTitle
	},
	SET_PAGE_TITLE(state, newTitle) {
		if (typeof newTitle !== 'string') Error(
			'SET_PAGE_TITLE', `Want (string) got (${typeof newTitle})`,
		)
		else state.pageTitle = newTitle
	},
	changeArchive(state, payload) {
		state.archive.view = payload
	},
	TOGGLE_THEME_MODE(state) {
		if (state.themeMode === 'light') state.themeMode = 'dark'
		else state.themeMode = 'light'
	},
}

export default {
	LOAD_TWITCH_CHANNELS({commit}, channels) {
		return new Promise((resolve, reject) => {
			let finishCounter = 0
			const channelsToGet = new Array(channels.length)
			for (let itr = 0; itr < channels.length; itr++) {
				channelsToGet[itr] = axios.get(
					'https://api.twitch.tv/helix/' +
					`users?login=${channels[itr]}`,
					{ headers: {
						'Client-ID':'7enpsl6gkvdm1wd1umaeeeb1owzajo',
					}},
				)
			}
			Promise.all(channelsToGet)
			.then(results => {
				results.forEach((response, index) => {
					const channel = response.data.data[0]
					commit('ADD_TWITCH_CHANNELS', {
						displayName: channel.display_name,
						login: channel.login,
						description: channel.description,
						id: channel.id,
						viewCount: channel.view_count,
						offlineImage: channel.offline_image_url,
						image: channel.profile_image_url,
						broadcasterType: channel.broadcaster_type,
						status: false,
						stream: {},
					})
					axios.get(
						'https://api.twitch.tv/helix/' +
						`streams?user_id=${channel.id}`,
						{ headers: {
							'Client-ID':'7enpsl6gkvdm1wd1umaeeeb1owzajo',
						}},
					)
					.then(response => {
						// If stream not live
						const stream = response.data.data[0]
						if (!stream) return
	
						commit('SET_CHANNEL_STREAM', {
							channel: channel.login, data: stream,
						})
	
						return axios.get(
							'https://api.twitch.tv/helix/' +
							`games?id=${stream.game_id}`,
							{ headers: {
								'Client-ID':'7enpsl6gkvdm1wd1umaeeeb1owzajo',
							}},
						)
					})
					.then(response => {
						finishCounter++
						if (!response) {
							if (finishCounter >= channels.length) resolve()
							return
						}
						const game = response.data.data[0]
						commit('SET_CHANNEL_STREAM_GAME', {
							channel: channel.login, data: game,
						})
						if (finishCounter >= channels.length) resolve()
					})
					.catch(err => reject(err))
				})
			})
			.catch(err => reject(err))
		})
	},
	LOAD_DISCORD_SERVERS({commit}, servers) {
		return new Promise((resolve, reject) => {
			const serversToGet = new Array(servers.length)
			for (let itr = 0; itr < servers.length; itr++) {
				serversToGet[itr] = axios.get(
					'https://discordapp.com/api/guilds/' +
					`${servers[itr]}/widget.json`,
				)
			}
			Promise.all(serversToGet)
			.then(response => {
				response.forEach((response, index) => {
					commit('ADD_DISCORD_SERVERS', {
						displayName: response.data.name,
						members: response.data.members,
						id: response.data.id,
						instantInvite: response.data.instant_invite,
						channels: response.data.channels,
						image: "https://vignette.wikia.nocookie.net/aura-kingdom/images/1/18/Discord_icon.png/revision/latest?cb=20170108193813",
						discord: true,
					})
				})
				resolve()
			})
			.catch(err => reject(err))
		})
	},
}

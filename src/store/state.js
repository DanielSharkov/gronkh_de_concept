export default {
	primary1: '#FF9E40',
	themeMode: 'light',
	pageTitle: 'Gronkh.de',
	menubarTitle: '',
	sideNav: {
		status: false,
	},
	modal: {
		status: false,
		type: null,
		data: null,
	},
	lockBg: {
		status: false,
		opacity: 0,
	},

	shop: {
		displayName: "Gronkh Shop",
		description: "Offizieller Mörtsch Shop.",
		url: "http://gronkh.shop",
		icon: {
			type: 'material-icons',
			name: 'shopping_cart',
		},
		color: '#FF7043',
	},
	patreon: {
		displayName: "Patreon",
		description: "",
		url: "https://www.patreon.com/Gronkh",
		image: "https://c10.patreonusercontent.com/3/eyJwIjoxLCJ2IjoiMSJ9/patreon-media/campaign/1222819/61d0b794960744e2bc3684d60f54893f?token-time=2145916800&token-hash=p0wBUIcT7PrlzFbrhY_MsKqmni2YwSKAfyNfJV64wLk%3D",
	},
	twitch: {
		APIUrl: "https://api.twitch.tv/helix/",
		domain: 'https://twitch.tv/',
		channels: {},
	},
	discord: {
		APIUrl: "https://discordapp.com/api/",
		domain: 'https://discordapp.com/',
		servers: {},
	},

	profileImage: 'https://yt3.ggpht.com/-UkxqFb5wHRA/AAAAAAAAAAI/AAAAAAAAAAA/36Sjj85sI4g/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg',
	channelBanner: 'https://yt3.ggpht.com/YzOjPQOme0c1yj_bcVy-Q0Kmd8uUXZoUrpdjiRUB_q6_AAy76tdh8evSMo0JzkiCytEe5dg8=w2560-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no',

	linkCollections: {
		'socialnetwork': {
			title: 'Soschial netwörk',
			links: [{
					displayName: "Twitter",
					description: "",
					url: "https://twitter.com/Gronkh",
					image: "https://pbs.twimg.com/profile_images/951811871941840896/VAUGzzpv_400x400.jpg",
				},{
					displayName: "Instagram",
					description: "",
					url: "https://www.instagram.com/gronkh/",
					image: "https://scontent-frx5-1.cdninstagram.com/vp/7f299f67c03148d259e64f65a130191c/5B3582C7/t51.2885-19/10747837_1717939961763902_2076962238_a.jpg",
				},{
					displayName: "Facebook",
					description: "",
					url: "https://www.facebook.com/Gronkh/",
					image: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/10270491_860484730641949_4948773749506161502_n.jpg?oh=6a64778847e01a491ec579f3bcbe7104&oe=5B3F7A92",
			}],
		},
		'youtube': {
			title: 'Gronkh auf YouTube',
			links: [{
					displayName: "Gronkh",
					description: "Zart im Schmelz und süffig im Abgang. Ungebremster Spieltrieb seit 1896. Tägliche Folgen nonstop seit dem 01.04.2010!",
					url: "https://www.youtube.com/gronkh",
					image: "https://yt3.ggpht.com/-UkxqFb5wHRA/AAAAAAAAAAI/AAAAAAAAAAA/36Sjj85sI4g/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg",
				},{
					displayName: "GronkhTV",
					description: "Das livestream Archiv.",
					url: "https://www.youtube.com/gronkhtv",
					image: "https://yt3.ggpht.com/-RQ35ag6RhmU/AAAAAAAAAAI/AAAAAAAAAAA/18K48o8Tnww/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg",
				},{
					displayName: "GronkhRPGs",
					description: "Gronkhs kleine RPG-Community abseits des Hauptkanals.",
					url: "https://www.youtube.com/gronkhrpgs",
					image: "https://yt3.ggpht.com/-IqqVtRKhNZg/AAAAAAAAAAI/AAAAAAAAAAA/WucF_wH15GQ/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg",
				},{
					displayName: "GronkhOSTs",
					description: "Das Ohrwurm-Archiv.",
					url: "https://www.youtube.com/user/GronkhOSTs",
					image: "https://yt3.ggpht.com/-C3lfmVO39Z4/AAAAAAAAAAI/AAAAAAAAAAA/0486gv3-TMQ/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg",
				},{
					displayName: "GronkhRetro",
					description: "Der heimliche Retro-Channel von Gronkh.",
					url: "https://www.youtube.com/gronkhretro",
					image: "https://yt3.ggpht.com/-A9sUliQYaSY/AAAAAAAAAAI/AAAAAAAAAAA/gOB5V4OCoZo/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg",
			}],
		},
	},

	linkTypes: [{
			// 0
			name: 'YouTube',
			color: '#FF0000',
			icon: { type: 'fa-brand', name: 'youtube' },
		},{ // 1
			name: 'Twitch',
			color: '#6441A4',
			icon: { type: 'fa-brand', name: 'twitch' },
	}],

	platformes: [{
			// 0
			name: "PC - Windows",
			color: "#448AFF",
			icon: {
				type: "fa-brand",
				name: "windows",
			},
		},{	// 1
			name: "Xbox 360",
			color: "#00C853",
			icon: {
				type: "fa-brand",
				name: "xbox",
			},
		},{	// 2
			name: "Xbox One",
			color: "#00C853",
			icon: {
				type: "fa-brand",
				name: "xbox",
			},
		},{	// 3
			name: "Commodore Amiga",
			color: "#FFCC80",
			icon: {
				type: "fa-solid",
				name: "laptop",
			},
		},{	// 4
			name: "PlayStation 3",
			color: "#0069C0",
			icon: {
				type: "fa-brand",
				name: "playstation",
			},
		},{	// 5
			name: "PlayStation 4",
			color: "#0069C0",
			icon: {
				type: "fa-brand",
				name: "playstation",
			},
		},{	// 6
			name: "PlayStation VR",
			color: "#0069C0",
			icon: {
				type: "fa-brand",
				name: "playstation",
			},
		},{	// 7
			name: "Browser",
			color: "#455A64",
			icon: {
				type: "fa-solid",
				name: "globe",
			},
		},{	// 8
			name: "MS-DOS",
			color: "#A1887F",
			icon: {
				type: "fa-solid",
				name: "desktop",
			},
		},{	// 9
			name: "Nintendo Switch",
			color: "#FF5252",
			icon: {
				type: "fa-brand",
				name: "nintendo-switch",
			},
		},{	// 10
			name: "SNES",
			color: "#8EACBB",
			icon: {
				type: "fa-solid",
				name: "gamepad",
			},
	}],

	gameGenres: [{
			// 0
			name: "Simulation", color: "#D32F2F",
			icon: { type: 'fa-solid', name: 'image' },
		},{	// 1
			name: "Special / Event", color: "#FBC02D",
			icon: { type: 'material-icons', name: 'grade' },
		},{	// 2
			name: "Sandbox / Survival", color: "#387002",
			icon: { type: 'fa-solid', name: 'box-open' },
		},{	// 3
			name: "Story", color: "#FF9E40",
			icon: { type: 'fa-solid', name: 'book' },
		},{	// 4
			name: "Trash", color: "#6D4C41",
			icon: { type: 'fa-solid', name: 'trash' },
		},{	// 5
			name: "Adventure", color: "#387002",
			icon: { type: 'material-icons', name: 'explore' },
		},{	// 6
			name: "Horror", color: "#C81919",
			icon: { type: 'fo-solid', name: 'cut' },
		},{	// 7
			name: "Strategie", color: "#00796B",
			icon: { type: 'fa-solid', name: 'chess' },
		},{	// 8
			name: "MMORPG", color: "#FF9E40",
			icon: { type: 'fa-solid', name: 'chess-rook' },
		},{	// 9
			name: "Action", color: "#C81919",
			icon: { type: 'fa-solid', name: 'bolt' },
		},{	// 10
			name: "Platformer", color: "#FF9E40",
			icon: { type: 'material-icons', name: 'minimize' },
		},{	// 11
			name: "Sonstiges", color: "#455A64",
			icon: { type: 'material-icons', name: 'category' },
		},{	// 12
			name: "Wimmelbild", color: "#FF6434",
			icon: { type: 'material-icons', name: 'extension' },
		},{	// 13
			name: "Multiplayer / Party", color: "#FFAB00",
			icon: { type: 'material-icons', name: 'people' },
		},{	// 14
			name: "Kartenspiel", color: "#FF6434",
			icon: { type: 'fa-solid', name: 'dice' },
		},{	// 15
			name: "RPG", color: "#DD2C00",
			icon: { type: 'fa-solid', name: 'gavel' },
		},{	// 16
			name: "Retro", color: "#C2185B",
			icon: { type: 'fa-solid', name: 'gamepad' },
	}],

	livestreamFormats: [{
			// 0
			name: "#FREiAb18", color: "#FF9800",
		},{	// 1
			name: "SPONTANamo", color: "#C2185B",
		},{	// 2
			name: "Reallife", color: "#7B1FA2",
		},{	// 3
			name: "Special", color: "#26C6DA",
		},{	// 4
			name: "#MiMo", color: "#66BB6A",
		},{	// 5
			name: "MonStar", color: "#FF6D00",
		},{	// 6
			name: "E3", color: "#0288D1",
		},{	// 7
			name: "KaffeeKranZ", color: "#6D4C41",
		},{	// 8
			name: "CHARiTY", color: "#FF4081",
		},{	// 9
			name: "HORRORnacht", color: "#812626",
		},{	// 10
			name: "Gamescom", color: "#AFB42B",
		},{	// 11
			name: "Framstag", color: "#FBC02D",
		},{	// 12
			name: "#LiveLP", color: "#455A64",
		},{	// 13
			name: "DonnerstARK", color: "#689F38",
		},{	// 14
			name: "FEIERabend", color: "#FF6E40",
	}],

	guests: [{
		name: "Test User", link: "test",
	}],

	podcastFormats: [{
			// 0
			name: "Start & Select", color: "#FF9100",
		},{
			// 1
			name: "CreepyCast", color: "#812626",
	}],

	archive: {
		view: 'letsplays',
		letsplays: [{
				// image: "https://dl.gameapkmod.com/gameapkmod-img/dl10/games/com.kaigan.simulacra/img/com.kaigan.simulacra-1.jpg",
				image: "/assets/images/games/simulacra.jpg",
				color: "#414F75",
				name: "Simulacra",
				category: [6],
				platform: [0],
				date: new Date('13-4-2018'),
			},{
				// image: "http://cdn.akamai.steamstatic.com/steam/apps/251570/header.jpg?t=1502044027",
				image: "/assets/images/games/7-days-to-die.jpg",
				color: "#C81919",
				name: "7 Days to Die",
				category: [2],
				platform: [0],
			},{
				// image: "https://vignette.wikia.nocookie.net/nohud/images/0/08/Firewatch-game-cover-pc-2016.jpg/revision/latest?cb=20160925201856",
				image: "/assets/images/games/firewatch.jpg",
				color: "#FF6633",
				name: "Firewatch",
				category: [3],
				platform: [0],
				date: new Date('10-2-2016'),
				episodes: 12,
				duration: 14474.16,
				dataVolume: 305801671475.2,
				links: [{
					type: 0, name: "Let's play", url: "http://grnk.yt/firewatch",
				}],
			},{
				// image: "https://images-na.ssl-images-amazon.com/images/I/711CUAgYGcL.jpg",
				image: "/assets/images/games/fallout-4.jpg",
				color: "#75BD7B",
				name: "Fallout 4",
				category: [15],
				platform: [0],
				date: new Date('8-11-2015'),
				episodes: 306,
				duration: 826092.72,
				dataVolume: 24051816857600,
				links: [{
					type: 0, name: "Let's play", url: "http://grnk.yt/Fallout4",
				}],
			},{
				// image: "https://www.instant-gaming.com/images/products/1566/271x377/1566.jpg",
				image: "/assets/images/games/abzu.jpg",
				color: "#E05269",
				name: "Abzû",
				category: [3],
				platform: [0],
				date: new Date('15-8-2016'),
				episodes: 7,
				duration: 5085.72,
				dataVolume: 212171384422.4,
				links: [{
					type: 0, name: "Let's play", url: "http://grnk.yt/abzu",
				}],
			},{
				// image: "https://i.imgur.com/q6oBgCd.jpg",
				image: "/assets/images/games/starbound.jpg",
				color: "#DCB464",
				name: "Starbound",
				category: [2],
				platform: [0],
				episodes: 118,
				duration: 328107.96,
				dataVolume: 1961082067353.6,
				links: [{
						type: 0, name: "Staffel 1", url: "http://grnk.yt/starbound",
					},{
						type: 0, name: "Staffel 2", url: "http://grnk.yt/starbound-s02",
					},{
						type: 0, name: "Staffel 3", url: "http://grnk.yt/starbound-s03",
					},{
						type: 0, name: "Staffel 4", url: "http://grnk.yt/starbound-s04",
					},{
						type: 1, name: "Stream 160", url: "http://grnk.yt/GTV0160",
					},{
						type: 1, name: "Stream 164",
					},{
						type: 1, name: "Stream 174",
					},{
						type: 1, name: "Stream 186",
					},{
						type: 1, name: "Stream 194",
					},{
						type: 1, name: "Stream 208",
					},{
						type: 1, name: "Stream 211",
				}],
			},{
				// image: "http://skyboxlabs.com/wp-content/uploads/2017/06/minecraft_boxart.png",
				image: "/assets/images/games/minecraft.png",
				color: "#86AC39",
				name: "Minecraft",
				category: [2],
				platform: [0],
				episodes: 1278,
				duration: 1288814.4,
				dataVolume: 12555048399667.2,
				links: [{
					type: 0, url: "http://grnk.yt/minecraft",
				}],
			},{
				// image: "http://cdn.akamai.steamstatic.com/steam/apps/720250/ss_b61f9ceb0fff3bc89d1918061f84cca0686fe45f.1920x1080.jpg?t=1506587251",
				image: "/assets/images/games/welcome-to-the-game-2.jpg",
				color: "#700000",
				name: "Welcome to the Game 2",
				category: [6],
				platform: [0],
			},{
				// image: "http://insidegamepc.com/wp-content/uploads/2017/10/1-22.jpg",
				// image: "https://gpstatic.com/acache/34/10/1/de/packshot-cb601d9cb991b578ddaaef227a4786f3.jpg",
				image: "/assets/images/games/monopoly.jpg",
				color: "#FFD700",
				name: "Monoploy Plus",
				category: [13],
				platform: [0],
				date: new Date('2018-05-16'),
				episodes: 3,
				links: [{
					type: 1, name: "Stream 248",
				}]
			},{
				// image: "https://fontech.startitup.sk/wp-content/uploads/2017/06/the_way_out.jpg",
				image: "/assets/images/games/a-way-out.jpg",
				color: "#FFCC33",
				name: "A way out",
				category: [13],
				platform: [0],
				date: new Date('23-3-2018'),
				episodes: 14,
				links: [{
						type: 0, name: "Let's play", url: "http://grnk.yt/ori-blind-forest",
					},{
						type: 1, name: "Stream 240", url: "http://grnk.yt/GTV0240",
				}],
			},{
				// image: "https://upload.wikimedia.org/wikipedia/pt/9/9d/Sea_of_thieves_box.jpg",
				image: "/assets/images/games/sea-of-thieves.jpg",
				// image: "https://i.imgur.com/HUyG6Iy.jpg",
				// image: "https://i.imgur.com/xjR9mcv.png",
				// image: "https://d2ohjochjkpv18.cloudfront.net/wp-content/uploads/2017/11/fiche_jeu_sea_of_thieves_pc.jpg",
				color: "#263238",
				name: "Sea of Thieves",
				category: [0],
				platform: [0,2],
				date: new Date('25-1-2018'),
				episodes: 7,
				links: [{
					type: 0, name: "HWSQ",
				}],
			},{
				// image: "https://i.imgur.com/9ebjGWG.jpg",
				image: "/assets/images/games/the-forest.jpg",
				color: "#FFD400",
				name: "The Forest",
				category: [2],
				platform: [0],
				episodes: 250,
				duration: 536508,
				dataVolume: 13677752850841.6,
				links: [{
						type: 0, name: "Staffel 1", url: "http://grnk.yt/the-forest",
					},{
						type: 0, name: "Staffel 2", url: "http://grnk.yt/the-forest-s02",
					},{
						type: 0, name: "Staffel 3", url: "http://grnk.yt/the-forest-s03",
				}],
			},{
				// image: "https://i.imgur.com/MsvZUKw.jpg",
				image: "/assets/images/games/crossing-souls.jpg",
				color: "#D62188",
				name: "Crossing Souls",
				category: [5],
				platform: [5],
				date: new Date('15-2-2018'),
				episodes: 26,
				duration: 37458.36,
				dataVolume: 219043332096,
				links: [{
					type: 0, name: "Let's play", url: "http://grnk.yt/crossing-souls",
				}],
			},{
				// image: "https://images-na.ssl-images-amazon.com/images/I/81sn7JnHz4L._SY679_.jpg",
				image: "/assets/images/games/the-witcher.jpg",
				color: "#812626",
				name: "The Witcher 3",
				category: [15],
				platform: [0],
				episodes: 192,
				duration: 505132.56,
				dataVolume: 8258363116748.8,
				links: [{
						type: 0, name: 'Preview', url: "http://grnk.yt/witcher-3-preview",
					},{
						type: 0, name: "Let's play", url: "http://grnk.yt/witcher-3",
				}],
			},{
				// image: "https://i.imgur.com/ZHAMcv9.jpg",
				image: "/assets/images/games/eco.jpg",
				color: "#00C853",
				name: "ECO",
				category: [2],
				platform: [0],
				links: [{
					type: 0, name: "Let's play", url: "http://grnk.yt/eco",
				}],
			},{
				// image: "https://i.ytimg.com/vi/cklw-Yu3moE/maxresdefault.jpg",
				image: "/assets/images/games/ori.jpg",
				color: "#FFAA00",
				name: "Ori and the Blind Forest",
				category: [15],
				platform: [0],
				episodes: 29,
				duration: 36158.76,
				dataVolume: 334148455628.8,
				links: [{
					type: 0, name: "Let's play", url: "http://grnk.yt/ori-blind-forest",
				}],
			},{
				// image: "https://images-na.ssl-images-amazon.com/images/I/91xzHeLIqtL.jpg",
				image: "/assets/images/games/horizon.jpg",
				color: "#406ABF",
				name: "Horizon - Zero Dawn",
				category: [9],
				platform: [5],
				date: new Date('27-2-2017'),
				episodes: 110,
				duration: 235084.32,
				dataVolume: 8167309810073.6,
				links: [{
					type: 0, name: "Let's play", url: "http://grnk.yt/a-way-out",
				}],
			},{
				// image: "https://s1.gaming-cdn.com/images/products/1842/271x377/1842.jpg",
				image: "/assets/images/games/farcry-5.jpg",
				color: "#CCBB66",
				name: "Farcry 5",
				category: [9],
				platform: [0],
				date: new Date('23-3-2018'),
				links: [{
						type: 0, name: "Let's play", url: "http://grnk.yt/far-cry-5",
					},{
						type: 1, name: "Stream 240", url: "http://grnk.yt/GTV0240",
				}],
			},{
				// image: "https://i.imgur.com/POZruEh.jpg",
				image: "/assets/images/games/grand-theft-auto-5.jpg",
				color: "#80AC53",
				name: "Grand Theft Auto V",
				category: [9],
				platform: [1],
				date: new Date('17-9-2013'),
				episodes: 111,
				duration: 163846.08,
				dataVolume: 2483350090547.2,
				links: [{
					type: 0, name: "Let's play", url: "http://grnk.yt/gta-5",
				}],
			},{
				// image: "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc_Rt3482AmxBj6jyysorICwPRDhVGd_sfRkEzF9e9Vk8no8fgh.jnjPt_Ng8lguVB0k1.CEZ8kj0vnQ3.XCJmuIRsWFP4VQ0v0MhY2Y8VvWmCCOeHp4tDKgsvquEINPiVB_l_4Ex6sErGA2y.dbiVi9xjbCSW.HndMUrSSS0tUlI-&w=200&h=300&format=jpg",
				image: "/assets/images/games/life-is-strange.jpeg",
				color: "#E65E4C",
				name: "Life is Strange",
				category: [3],
				platform: [0],
				episodes: 41,
				duration: 86688.36,
				dataVolume: 556627761561.6,
				links: [{
					type: 0, name: "Let's play", url: "http://grnk.yt/life-is-strange",
				}],
			},{
				// image: "https://upload.wikimedia.org/wikipedia/en/0/05/Destiny_2_%28artwork%29.jpg",
				image: "/assets/images/games/destiny-2.jpg",
				color: "#248F86",
				name: "Destiny 2",
				category: [9],
				platform: [2],
				date: new Date('19-11-2017'),
				episodes: 29,
				duration: 51809.04,
				dataVolume: 2479914116710.4,
				links: [{
						type: 0, name: "Let's play", url: "http://grnk.yt/destiny-2",
					},{
						type: 0, name: "Preview",
				}],
			},{
				image: "/assets/images/games/the-division.jpg",
				color: "#e4773b",
				name: "The Division",
				category: [3, 9, 13],
				platform: [0],
			},{
				// image: "https://static-cdn.jtvnw.net/ttv-boxart/Outlast%202.jpg",
				image: "/assets/images/games/outlast-2.jpg",
				color: "#857047",
				name: "Outlast 2",
				category: [6],
				platform: [0],
				episodes: 20,
				duration: 34391.52,
				dataVolume: 1132153379225.6,
				links: [{
						type: 0, name: "Let's play", url: "http://grnk.yt/outlast-2",
					},{
						type: 0, name: "Preview",
				}],
			},{
				// image: "http://gamerfront.net/wp-content/uploads/2012/12/cover_close-upDESIGN05.jpg",
				image: "/assets/images/games/bioshock-infinite.jpg",
				color: "#D94426",
				name: "Bioshock Infinite",
				category: [9],
				platform: [0],
				date: new Date('5-4-2013'),
				episodes: 61,
				duration: 55845.36,
				dataVolume: 889058230272,
				links: [{
					type: 0, name: "Let's play", url: "http://grnk.yt/bioshock-infinite",
				}],
			},{
				// image: "https://images-na.ssl-images-amazon.com/images/I/61KCDC5GP7L._SX342_.jpg",
				image: "/assets/images/games/monkey-island.jpg",
				color: "#FF9500",
				name: "Monkey Island 4: Flucht von Monkey Island",
				category: [16],
				platform: [0],
				date: new Date('21-11-2012'),
				episodes: 45,
				duration: 9253.8,
				dataVolume: 110810156236.8,
			},{
				// image: "https://ia.media-imdb.com/images/M/MV5BMmVjMzkyYWMtNDNhNi00ZWI3LTgxNGUtODRkMWYxNjZmNDI5XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
				image: "/assets/images/games/god-of-war.jpg",
				color: "#0088CC",
				name: "God of War (2018)",
				category: [9],
				platform: [5],
				date: new Date('19-4-2018'),
				links: [{
					type: 0, name: "Let's play", url: "http://grnk.yt/god-of-war-2018",
				}],
			},{
				// image: "http://image.jeuxvideo.com/medias/146918/1469175867-8941-jaquette-avant.jpg",
				image: "/assets/images/games/no-mans-sky.png",
				color: "#FF5C5C",
				name: "No Man's Sky",
				category: [0],
				platform: [0],
				episodes: 31,
				duration: 57894.84,
				dataVolume: 1365799600128,
				links: [{
					type: 0, name: "Let's play", url: "http://grnk.yt/no-mans-sky",
				}],
			},{
				// image: "https://pbs.twimg.com/media/C7Z2wAmV4AA3eQI.jpg",
				// image: "/assets/images/games/resident-evil-7_2.jpg",
				// image: "https://i.imgur.com/PRXxNEw.jpg",
				image: "/assets/images/games/resident-evil-7.jpg",
				color: "#F27F0D",
				name: "Resident Evil 7",
				category: [6],
				platform: [0],
				episodes: 26,
				duration: 50883.48,
				dataVolume: 770517132902.4,
				links: [{
						type: 0, name: "Let's play", url: "http://grnk.yt/resident-evil-7",
					},{
						type: 0, name: "Preview",
				}],
			},{
				// image: "https://upload.wikimedia.org/wikipedia/ru/thumb/0/0e/Life_Is_Strange_Before_The_Storm.jpg/267px-Life_Is_Strange_Before_The_Storm.jpg",
				image: "/assets/images/games/life-is-strange-before-the-storm.jpg",
				color: "#D838C9",
				name: "Life is Strange: Before the Storm",
				category: [3],
				platform: [2],
				date: new Date('8-4-2017'),
				links: [{
					type: 0, name: "Let's play", url: "http://grnk.yt/before-the-storm",
				}],
			},{
				// image: "https://file-cdn.scdkey.com/product/20171107202948_scdk.jpg",
				image: "/assets/images/games/the-evil-within-2.jpg",
				color: "#C9CFCC",
				name: "The Evil Within 2",
				category: [6],
				platform: [5],
				episodes: 45,
				duration: 84116.88,
				dataVolume: 4098257793843.2,
				links: [{
						type: 0, name: "Let's play", url: "http://grnk.yt/evil-within-2",
					},{
						type: 0, name: "Preview",
				}],
			},{
				// image: "https://static-cdn.jtvnw.net/ttv-boxart/The%20Wolf%20Among%20Us.jpg",
				image: "/assets/images/games/the-wolf-among-us.jpg",
				color: "#66002A",
				name: "The Wolf Among Us",
				category: [3],
				platform: [0],
				episodes: 24,
				duration: 3011.22,
				dataVolume: 434650690355.2,
				links: [{
					type: 0, name: "Let's play", url: "http://grnk.yt/wolf-among-us",
				}],
			},{
				// image: "https://i.imgur.com/i3Kh1nE.jpg",
				image: "/assets/images/games/finding-paradise.jpg",
				color: "#D2AD79",
				name: "Finding Paradise",
				category: [15],
				platform: [0],
				episodes: 23,
				duration: 26865,
				dataVolume: 877032321843.2,
				date: new Date('10-12-2017'),
				links: [{
					type: 0, name: "Let's play", url: "http://grnk.yt/finding-paradise",
				}],
			},{
				// image: "http://www.mobygames.com/images/covers/l/429819-cuphead-windows-apps-front-cover.jpg",
				image: "/assets/images/games/cuphead.jpg",
				color: "#FFAA10",
				name: "Cuphead",
				category: [10],
				platform: [2],
				links: [{
					type: 1, name: "Stream 210", url: "http://grnk.yt/GTV0210",
				}],
			},{
				image: "",
				name: "XSample",
				category: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
				platform: [0,1,2,3,4,5,6,7,8,9,10],
				episodes: 1,
				duration: 1,
				dataVolume: 1,
				buyGame: "/test",
				links: [{
						type: 0, name: "Let's play",
					},{
						type: 0, name: "Preview",
					},{
						type: 0, name: "HWSQ",
					},{
						type: 0, name: "Staffel 1",
					},{
						type: 1, name: "Stream",
				}],
		}],

		livestreams: [{
				// image: "https://i.ytimg.com/vi/QJtA4V6hTiI/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDGCrCgojzGgPucbUOo6Shfos9wxg",
				image: "/assets/images/livestreams/1.webp",
				count: 1,
				title: "'snurn Test",
				date: new Date('10-12-2014'),
				dataVolume: 122836064665.6,
				link: "http://grnk.yt/GTV0001",
			},{
				// image: "https://i.ytimg.com/vi/RgWciWh9wqQ/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBzn2VmVOGtA3HDEGm3lRrCfV-RIg",
				image: "/assets/images/livestreams/2.webp",
				count: 2,
				title: "Weihnachtsspecial 2014",
				format: 0,
				date: new Date('26-12-2014'),
				dataVolume: 63995012710.4,
				guests: ["Pandorya"],
				link: "http://grnk.yt/GTV0002",
			},{
				// image: "https://i.ytimg.com/vi/OqswlHzcG8U/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDr5E_2gVVVnHXSL5M5yzwKUhCPCA",
				image: "/assets/images/livestreams/3.webp",
				count: 3,
				title: "Der 4stündige 10-Minuten-Livestream",
				date: new Date('6-1-2015'),
				dataVolume: 58583353917.44,
			},{
				// image: "https://i.ytimg.com/vi/z3GbYZ1Jh6o/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAnt84cB0zoIzMUoxaNJJ8rv7Rvag",
				image: "/assets/images/livestreams/4.webp",
				count: 4,
				title: "Unitymedia-Rave",
				date: new Date('9-1-2015'),
				dataVolume: 139500537774.08,
			},{
				// image: "https://i.ytimg.com/vi/GqjW5CfbKy4/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAF11YS11rnRXVeepkHmxmBJS9M7A",
				image: "/assets/images/livestreams/5.webp",
				count: 5,
				title: "Haunted House",
				format: 12,
				date: new Date('10-1-2016'),
				dataVolume: 137524852817.92,
			},{
				// image: "https://i.ytimg.com/vi/BRmqxoZ9z3U/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDjAvtJh4qldBuepbXzehxCXBJsSg",
				image: "/assets/images/livestreams/6.webp",
				count: 6,
				title: "#GELDWÄSCHE",
				format: 0,
				date: new Date('16-1-2015'),
				dataVolume: 266717469081.6,
			},{
				// image: "https://i.ytimg.com/vi/Ebg2uln0i7k/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAlWAmSK8eigMgN0nou7ksh-ICg8Q",
				image: "/assets/images/livestreams/7.webp",
				count: 240,
				title: "FAR CRY 5 Preview + Unboxing & A WAY OUT (SO gut!!)",
				format: 0,
				date: new Date('23-3-2018'),
				duration: 45000.36,
				rawDataVolume: 10432819159367.68,
				dataVolume: 440491845877.76,
			},{
				// image: "https://i.ytimg.com/vi/NYiUhCJrZsc/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCVtGJ13EW0wDOl3qp29I8nSRabUA",
				image: "/assets/images/livestreams/8.webp",
				count: 243,
				title: "#FREITAG13 & Geburtstag & HEY!-Lektüre & neue Commands",
				format: 9,
				date: new Date('13-4-2018'),
				duration: 50519.52,
				rewDataVolume: 3374469905121.28,
				dataVolume: 271527832453.12,
		}],

		podcasts: [{
				// image: "https://pbs.twimg.com/card_img/993972587922362373/NNO0HOue?format=jpg&name=600x314",
				image: "/assets/images/podcasts/1.jpeg",
				episode: 1,
				title: "Zehn Print Hallo Welt!",
				format: 0,
				date: new Date('3-3-2018'),
				duration: 1814.4,
				dataVolume: 797001646.08,
				participants: [
					"Gronkh",
					"Onkel Jo",
				],
				links: [{
						name: "Patreon", url: "https://www.patreon.com/posts/start-select-000-17337599",
					},{
						name: "SoundCloud", url: "https://soundcloud.com/gronkh/start-select-000",
					},{
						name: "Spotify", url: "https://open.spotify.com/episode/7qTdbEn30fNAtcgim9qfDc?si=jRonfBxtTH6c2Jyz_H3yRA",
				}],
			},{
				// image: "https://pbs.twimg.com/card_img/992788241072959488/X_qZ-dhm?format=jpg&name=600x314",
				image: "/assets/images/podcasts/2.jpg",
				episode: 2,
				title: "Ungeheuer Teuer? Preisfrage Computerspiele!",
				format: 0,
				date: new Date('17-3-2018'),
				duration: 7967.16,
				dataVolume: 1669500764.16,
				participants: [
					"Gronkh",
					"Onkel Jo",
				],
				links: [{
					name: "Patreon", url: "https://www.patreon.com/posts/start-select-001-17593625",
				}],
			},{
				// image: "https://pbs.twimg.com/card_img/992731704400859137/uWFZ334g?format=jpg&name=600x314",
				image: "/assets/images/podcasts/3.jpeg",
				episode: 3,
				title: "Miet & Greed: Abofalle Game Pass?",
				format: 0,
				date: new Date('31-3-2018'),
				duration: 8719.92,
				dataVolume: 1274061783.04,
				participants: [
					"Gronkh",
					"Onkel Jo",
				],
				links: [{
					name: "Patreon", url: "https://patreon.com/posts/17878419",
				}],
			},{
				// image: "https://c10.patreonusercontent.com/3/eyJ3Ijo2MjB9/patreon-posts/Oxs42UIRuadjJygzLLrV3IPuDARLrJHAL6TZZdzjJS2Ui9IY-4JtoOrb2sT3ZuT9.jpg?token-time=1527033600&token-hash=Sz2axfuyc5LOWB-J3opfSeI3VrdcQCYuvP3B62I1BNw%3D",
				image: "/assets/images/podcasts/4.jpg",
				episode: 4,
				title: "Werter's Echte: Was taugen Bewertungen?",
				format: 0,
				date: new Date('14-4-2018'),
				duration: 4644.72,
				dataVolume: 700280995.84,
				participants: [
					"Gronkh",
					"Onkel Jo",
					"Jörg Langer",
					"Heinrich Lenhardt",
				],
			},{
				// image: "https://pbs.twimg.com/card_img/992693549912199169/43Uo0WTd?format=jpg&name=600x314",
				image: "/assets/images/podcasts/5.jpeg",
				episode: 5,
				title: "Mysterien der Selbstständigkeit",
				format: 0,
				date: new Date('28-4-2018'),
				duration: 8659.08,
				dataVolume: 1262401617.92,
				participants: [
					"Gronkh",
					"Onkel Jo",
				],
			},{
				// image: "https://c10.patreonusercontent.com/3/eyJ2IjoiMSIsInciOjEyNDB9/patreon-media/post/18624040/a147843af47c45c4881d74188c250835?token-time=1527033600&token-hash=ch94mlo_CFy_muwLtDgWCW8y9Fapgo7pDTZoFSW66HY%3D",
				image: "/assets/images/podcasts/6.jpg",
				episode: 1,
				title: "Das Schlafexperiment",
				format: 1,
				duration: 871.2,
				dataVolume: 191008604.16,
				participants: [
					"Gronkh",
				],
		}],

		giveawayWinners: [{
				image: '/assets/images/about_me.jpg',
				name: 'Test Person #1',
				price: 'Nüscht',
				date: '31 Dezember 9999',
			},{
				price: 'PUBG',
				provided: 'Microsoft',
				type: 'Gamekey',
				givenAt: 'Livestream',
				redeemIn: 'Xbox Store',
			},{
				name: 'Playpuma',
				price: 'Xbox One Sea of Thieves Edition',
				date: '30 Februar 2018',
				provided: 'Microsoft',
				type: 'Hardware',
				givenAt: 'Livestream',
			},{
				name: 'Spananier1911',
				price: 'S.T.A.L.K.E.R: Clear Sky',
				date: '30 März 2018',
				type: 'Gamekey',
				givenAt: 'Livestream',
				redeemIn: 'Steam',
			},{
				name: 'kijah_',
				price: 'S.T.A.L.K.E.R: Shadow of Chernobyl',
				date: '30 März 2018',
				type: 'Gamekey',
				givenAt: 'Livestream',
				redeemIn: 'Steam',
			},{
				name: 'leakathi',
				price: 'S.T.A.L.K.E.R: Shadow of Chernobyl',
				date: '30 März 2018',
				type: 'Gamekey',
				givenAt: 'Livestream',
				redeemIn: 'Steam',
			},{
				name: 'bluequatro',
				price: 'Nightmares from the Deep: The Cursed Heart',
				date: '30 März 2018',
				type: 'Gamekey',
				givenAt: 'Livestream',
				redeemIn: 'Steam',
			},{
				name: 'bluequatro',
				price: 'Nightmares from the Deep 2: The Siren s Call',
				date: '30 März 2018',
				type: 'Gamekey',
				givenAt: 'Livestream',
				redeemIn: 'Steam',
			},{
				name: 'bluequatro',
				price: 'Nightmares from the Deep 3: Davy Jones',
				date: '30 März 2018',
				type: 'Gamekey',
				givenAt: 'Livestream',
				redeemIn: 'Steam',
			},{
				price: 'Oxenfree',
				type: 'Gamekey',
				givenAt: 'Discord/Subclub',
				redeemIn: 'Steam',
			},{
				price: 'Devil May Cry 4: Special Edition',
				type: 'Gamekey',
				givenAt: 'Discord/Subclub',
				redeemIn: 'Steam',
			},{
				price: 'TEKKEN 7',
				type: 'Gamekey',
				givenAt: 'Discord/Subclub',
				redeemIn: 'Steam',
			},{
				price: 'DARK SOULS III',
				type: 'Gamekey',
				givenAt: 'Discord/Subclub',
				redeemIn: 'Steam',
			},{
				price: 'Middle-earth: Shadow of Mordor (GOTY Edition)',
				type: 'Gamekey',
				givenAt: 'Discord/Subclub',
				redeemIn: 'Steam',
			},{
				name: 'Sch-Lauch',
				price: '1,000,000.00₿',
				date: '11 Gronkhtober 1874',
				type: 'Kohlen',
				givenAt: 'Finanzamt',
				redeemIn: 'BitCoin Wallet',
				provided: 'YouTube Money',
		}],
	},
}
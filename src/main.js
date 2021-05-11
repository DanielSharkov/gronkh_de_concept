// IMPORTS ---------------------------------------------------------------------
	import Vue from 'vue'
	import store from './store/store'
	import VueRouter from 'vue-router'

// COMPONENTS ------------------------------------------------------------------
	const components = [{
			import: 'ui_text_field',
			tag: 'text-field'
		},{
			import: 'ui_button',
			tag: 'butn'
		},{
			import: 'ui_grid',
			tag: 'grid'
		},{
			import: 'ui_icon',
			tag: 'icon'
		},{
			import: 'ui_side_nav',
			tag: 'side-nav'
		},{
			import: 'ui_menu_bar',
			tag: 'menu-bar'
		},{
			import: 'ui_side_nav_button',
			tag: 'side-nav-butn'
		},{
			import: 'ui_tool_tip',
			tag: 'tool-tip'
		},{
			import: 'ui_modal_viewer',
			tag: 'modal-viewer'
		},{
			import: 'ui_modal',
			tag: 'modal'
		},{
			import: 'ui_progress',
			tag: 'custom-progress'
		},{
			import: 'archive_item',
			tag: 'archive-item'
	}]
	components.forEach(component => {
		Vue.component(
			component.tag,
			require(`./components/${component.import}.vue`).default,
		)
	})

// MODALS ----------------------------------------------------------------------
	const modals = [
		'view-contact-info', 'view-archive-item',
	]
	modals.forEach(modal => {
		Vue.component(
			modal,
			require(`./components/modals/${modal}.vue`).default,
		)
	})

// ROUTER ----------------------------------------------------------------------
	function setView(route) {
		return require(`./routes/${route}.vue`).default
	}
	export const router = new VueRouter({
		routes: [{
				name: 'MainView',
				path: '/',
				component: setView('main_view'),
				displayName: 'Hauptseite',
				icon: { type: 'material-icons', name: 'apps' },
				display: true,
			},{
				name: 'Archive',
				path: '/archiv',
				component: setView('archives_view'),
				displayName: 'Die Gronkh-Vault',
				icon: { type: 'fa-solid', name: 'file-archive' },
				display: true,
				archive: true,
				redirect: 'archiv/letsplays',
				children: [{
						name: 'LetsPlays',
						path: 'letsplays',
						component: setView('archive/lets_plays_view'),
						displayName: 'Let\'s Plays',
						icon: { type: 'material-icons', name: 'gamepad' },
						display: true,
					},{
						name: 'Livestreams',
						path: 'livestreams',
						component: setView('archive/livestreams_view'),
						displayName: 'Livestreams',
						icon: { type: 'material-icons', name: 'rss_feed' },
						display: true,
					},{
						name: 'Podcasts',
						path: 'podcasts',
						component: setView('archive/podcasts_view'),
						displayName: 'Podcasts',
						icon: { type: 'fa-solid', name: 'podcast' },
						display: true,
					},{
						name: 'Stats',
						path: 'statistiken',
						component: setView('archive/stats_view'),
						displayName: 'Statistiken',
						icon: { type: 'fa-solid', name: 'chart-pie' },
						display: true,
					},{
						name: 'Winners',
						path: 'gewinner',
						component: setView('archive/winners_view'),
						displayName: 'Gewinner',
						icon: { type: 'fa-solid', name: 'trophy' },
						display: true,
				}],
			},{
				name: 'AboutApplication',
				path: '/about',
				component: setView('about_application_view'),
				displayName: 'Wat DAT?',
				icon: { type: 'material-icons', name: 'help' },
			},{
				name: 'Calendar',
				path: '/kalender',
				component: setView('calendar_view'),
				displayName: 'Kalender / Events',
				icon: { type: 'material-icons', name: 'today' },
				display: true,
			},{
				name: 'FAQ',
				path: '/faq',
				component: setView('faq_view'),
				displayName: 'FAQ',
				icon: { type: 'material-icons', name: 'live_help' },
				display: true,
			},{
				name: 'Imprint',
				path: '/impressum',
				component: setView('imprint_view'),
				displayName: 'Impressum',
				icon: { type: 'material-icons', name: 'info' },
				display: true,
			},{
				name: 'DevPlayground',
				path: '/playground',
				component: setView('playground'),
				displayName: 'Dev Playground',
				icon: { type: 'material-icons', name: 'bug_report' },
				display: true,
			},{
				name: 'ReepyWeepy',
				path: '/ripple',
				component: setView('ripple'),
				displayName: 'Ripple',
				icon: { type: 'material-icons', name: 'bubble_chart' },
			},{
				name: 'FourOFour',
				path: '/*',
				component: setView('four_o_four_view'),
				displayName: "404",
				icon: { type: 'material-icons', name: 'error' },
		}],
		mode: 'history',
		// History mode removes '#' in URL
		// example: 'http://<host>/#/home/'
		// to 'http://<host>/home/'
	})

// VUE INSTANCE ----------------------------------------------------------------
	// Plugins
	Vue.use(VueRouter)

	// Directives
	Vue.directive('ripple', require('./directives/ripple').default)

	// Prototypes
	Vue.prototype.$CommaSeparator = (val) => {
		return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	}
	Vue.prototype.$AppVersion = '0.2.1.1'

	let VueApp = new Vue({
		el: '#app',
		data: {
			scrollPosition: 0,
		},
		methods: {
			ON_SCROLL(el) {
				this.scrollPosition = el.target.scrollTop
			},
		},
		store,
		router,
		render: h => h(require('./app.vue').default),
	})

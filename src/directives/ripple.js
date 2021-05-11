const Ripple = { bind(el, binding, vnode) {
	const props = {
		color: '',
		opacity: .35,
		transFunc: 'cubic-bezier(.22, .61, .36, 1)',
		transDur: 600,
	}

	// Register events
	el.addEventListener('pointerdown', createRippleEffect)

	function createRippleEffect() {
		// Replace with individual data
		if (el.attributes) {
			if (el.getAttribute('rippleColor')) {
				props.color = el.getAttribute('rippleColor')
			}
			if (el.getAttribute('rippleOpacity')) {
				props.opacity = el.getAttribute('rippleOpacity')
			}
			if (el.getAttribute('rippleTransFunc')) {
				props.transFunc = el.getAttribute('rippleTransFunc')
			}
			if (el.getAttribute('rippleTransDur')) {
				props.transDur = el.getAttribute('rippleTransDur')
			}
		}

		const elStyles = getComputedStyle(el)
		const rect = el.getBoundingClientRect()
		const width = el.offsetWidth
		const height = el.offsetHeight
		const dx = event.clientX - rect.left
		const dy = event.clientY - rect.top
		const maxX = Math.max(dx, width - dx)
		const maxY = Math.max(dy, height - dy)
		const radius = Math.sqrt((maxX * maxX) + (maxY * maxY))
		const elBorder = {
			top: elStyles.borderTopWidth,
			left: elStyles.borderLeftWidth,
		}

		// Define elements
		const rippleContainer = document.createElement('div')
		rippleContainer.className = 'ripple-container'
		const rippleEffect = document.createElement('div')
		rippleEffect.className = 'ripple-effect'

		// If parent has border reposition container
		rippleContainer.style.transform = `translate(-${elBorder.left}, -${elBorder.left})`
		// Adapt height and width to parent
		rippleContainer.style.width = `${width}px`
		rippleContainer.style.height = `${height}px`
		// Adapt to border radius from parent
		rippleContainer.style.borderTopLeftRadius = elStyles.borderTopLeftRadius
		rippleContainer.style.borderTopRightRadius = elStyles.borderTopRightRadius
		rippleContainer.style.borderBottomRightRadius = elStyles.borderBottomRightRadius
		rippleContainer.style.borderBottomLeftRadius = elStyles.borderBottomLeftRadius

		// Start ripple effect transition from these styles
		rippleEffect.style.transition =
			`opacity ${props.transDur}ms ${props.transFunc},` +
			`transform ${props.transDur}ms ${props.transFunc}`
		rippleEffect.style.backgroundColor = props.color
		rippleEffect.style.opacity = props.opacity
		// Position ripple effect
		rippleEffect.style.marginLeft = `${dx - radius}px`
		rippleEffect.style.marginTop = `${dy - radius}px`
		// Set ripple effect size
		rippleEffect.style.transform = `scale(0)`
		rippleEffect.style.width = `${radius * 2}px`
		rippleEffect.style.height = `${radius * 2}px`
		
		// Apply elements on parent
		rippleContainer.appendChild(rippleEffect)
		el.appendChild(rippleContainer)

		// Animate ripple effect
		setTimeout(() => {
			rippleEffect.style.transform = `scale(1)`
		}, 0)

		function clearRippleEffect() {
			// Fade out ripple effect
			rippleEffect.style.opacity = 0
			// Remove ripple container
			setTimeout(() => {
				if (rippleContainer.parentNode) {
					rippleContainer.parentNode.removeChild(rippleContainer)
				}
			}, props.transDur)

			el.removeEventListener('pointerup', clearRippleEffect)
			el.removeEventListener('pointerleave', clearRippleEffect)
		}

		if (event.type === 'pointerdown') {
			el.addEventListener('pointerup', clearRippleEffect)
			el.addEventListener('pointerleave', clearRippleEffect)
		} else clearRippleEffect()
	}
}}

export default Ripple

window.showContent = function () {
	return {
		menuOpened: false,
		subMenuOpened: false,
		activeTm: 'tm02',
		showTm (selectedTmId) {
			const element = document.getElementById(selectedTmId)
			element.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
		},
		menuItems: [
			{
				title: 'Pricing',
				href: '#',
			},
			{
				title: 'Product',
				href: '#',
			},
			{
				title: 'About Us',
				href: '#',
			},
			{
				title: 'Careers',
				href: '#',
			},
			{
				title: 'Community',
				href: '#',
			},
		],
		sellingPoints: [
			{
				number: '01',
				title: 'Track company-wide progress',
				description: 'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.',
			},
			{
				number: '02',
				title: 'Advanced built-in reports',
				description: 'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.',
			},
			{
				number: '03',
				title: 'Everything you need in one place',
				description: 'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.',
			}
		],
		testimonials: [
			{
				id: 'tm01',
				image: "./images/avatar-anisha.png",
				name: 'Anisha Li',
				description: '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
			},
			{
				id: 'tm02',
				image: "./images/avatar-ali.png",
				name: 'Ali Bravo',
				description: '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”',
			},
			{
				id: 'tm03',
				image: "./images/avatar-richard.png",
				name: 'Richard Watts',
				description: '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”',
			},
			{
				id: 'tm04',
				image: "./images/avatar-shanai.png",
				name: 'Shanai Gough',
				description: '“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”',
			},
		],
		email: '',
		validation: {
			email: {
				rule: {
					required: function(field){
						if (field) {
							return { invalid: false, message: '' }
						} else {
							return { invalid: true, message: 'Email seems to be empty' }
						}
					},
					email: function (field) {
						const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g
						if (validEmailRegex.test(field)) {
							return { invalid: false, message: '' }
						} else {
							return { invalid: true, message: 'Please insert valid email' }
						}
					}
				}
			},
		},
		validate(field) {
			for (const key in this.validation[field].rule) {
				const validationResult = this.validation[field].rule[key](this[field])
				if (validationResult.invalid) {
					this.validation[field].invalid = true
					this.validation[field].message = validationResult.message
					break
				}
				this.validation[field].invalid = false
				this.validation[field].message = ''
			}
		},
		submit() {
			this.validate('email')
		}
	}
}
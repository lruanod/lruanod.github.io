
	new Glider(document.querySelector('.project-list'), {

		slidesToShow: 4,
		slidesToScroll: 4,
		dots: '.indicators',
		arrows: {
			prev: '.previous',
			next: '.next'
		},
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 360,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 240,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 120,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

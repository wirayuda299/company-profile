export default {
	name: 'facilitiesLists',
	title: 'FacilitiesLists',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: { source: 'title' },
		},
		{
			name: 'thumbnail',
			title: 'Thumbnail',
			type: 'image',
		},
		{
			name: 'details',
			title: 'Details',
			type: 'object',
			fields: [
				{
					name: 'title',
					title: 'Title',
					type: 'string',
				},
				{
					name: 'description',
					title: 'Description',
					type: 'string',
				},
				{
					name: 'banner',
					title: 'Banner',
					type: 'array',
					of: [{ type: 'image' }],
				},
				{
					name: 'openTime',
					title: 'OpenTime',
					type: 'string',
				},
				{
					name: 'types',
					title: 'Types',
					type: 'array',
					of: [
						{
							type: 'object',
							fields: [
								{
									name: 'image',
									title: 'Image',
									type: 'image',
								},

								{
									name: 'title',
									title: 'Title',
									type: 'string',
								},
							],
						},
					],
				},
			],
		},
	],
};

export default {
  name: 'rooms',
  title: 'Rooms',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
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
      of: [{type: 'image'}],
    },
    {
      name: 'bedType',
      title: 'BedType',
      type: 'string',
    },
    {
      name: 'bathroom',
      title: 'Bathroom',
      type: 'string',
    },
    {
      name: 'internet',
      title: 'Internet',
      type: 'string',
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'view',
      title: 'View',
      type: 'string',
    },
    {
      name: 'numberOfRooms',
      title: 'NumberOfRooms',
      type: 'string',
    },
    {
      name: 'clubBenefits',
      title: 'ClubBenefits',
      type: 'string',
    },
    {
      name: 'max',
      title: 'Max',
      type: 'string',
    },
    {
      name: 'amenities',
      title: 'Amenities',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'entertaiment',
          title: 'Entertaiment',
          type: 'array',
          of: [{type: 'string'}],
        },
        {
          name: 'roomFeatures',
          title: 'RoomFeatures',
          type: 'array',
          of: [{type: 'string'}],
        },
        {
          name: 'dining',
          title: 'Dining',
          type: 'array',
          of: [{type: 'string'}],
        },
        {
          name: 'servicesAndRoomAmenities',
          title: 'ServicesAndRoomAmenities',
          type: 'array',
          of: [{type: 'string'}],
        },
        {
          name: 'bathroom',
          title: 'Bathroom',
          type: 'array',
          of: [{type: 'string'}],
        },
        {
          name: 'workingArea',
          title: 'WorkingArea',
          type: 'array',
          of: [{type: 'string'}],
        },
      ],
    }
  ],
}

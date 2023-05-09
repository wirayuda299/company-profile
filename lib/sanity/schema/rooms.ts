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
        }
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{type: 'image'}]
      },
      {
        name: 'overview',
        title: 'Overview',
        type: 'string',
      },
      {
        name: 'amenities',
        title: 'Amenities',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: 'roomDetails',
        title: 'RoomDetails',
        type: 'array',
        of: [{type: 'string'}]
      },
    ]
}
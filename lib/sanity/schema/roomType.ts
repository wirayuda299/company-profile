export default {
  name: 'roomType',
  title: 'Room Type',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Room Type Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'thumbnail',
      title: 'Room Type Thumbnail',
      type: 'image',
    },
    {
      name: 'image',
      title: 'Room Type Image',
      type: 'array',
      of: [{type: 'image'}]
    }
  ]
}
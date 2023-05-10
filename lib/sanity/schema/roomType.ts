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
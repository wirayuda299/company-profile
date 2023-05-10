export default {
  name: 'roomSuitePage',
  title: 'RoomSuitePage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',

    },
    {
      name: 'roomSuitePageImage',
      title: 'RoomSuitePageImage',
      type: 'array',
      of: [{type: 'image'}]
    }
  ]
}
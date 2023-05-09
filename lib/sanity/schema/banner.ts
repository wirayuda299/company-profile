export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',

    },
    {
      name: 'bannerImages',
      title: 'BannerImages',
      type: 'array',
      of: [{type: 'image'}]
    }
  ]
}
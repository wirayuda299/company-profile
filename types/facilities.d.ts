export type Facilities ={
  _ref: string;
  _type: string;
  description: string;
  _id: string;
  _updatedAt: string;
  title: string;
  image: string
  _createdAt: string;
}
export type Lists ={
  _updatedAt: string;
  slug:{
    _type: string;
    current: string;
  },
  thumbnail: string;
  _createdAt: string;
  title: string;
  _id: string;
  _type: string;
  _rev: string;
  details:{
    title : string;
    image: string
    banner: string[]
    types: {
      image: string;
      title: string;
      slug: {
        _type: string;
        current: string;
      }
    }[]
  }
}

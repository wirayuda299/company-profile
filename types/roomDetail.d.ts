export type RoomDetail = {
	bathroom: string;
	internet: string;
	description: string;
	_id: string;
	location: string;
	slug: {
		_type: string;
		current: string;
	};
	_type: string;
  banner: string[];
  name: string;
  bedType: string;
  clubBenefits: string;
  max: string;
  numberOfRooms: string;
  size: string;
  view: string;
	amenities: {
    name: string;
    bedType: string;
    banner: string[];
    view: string;
    size: string;
    _updateAt: string;
    _rev: string;
    numberOfRooms: string;
    clubBenefits: string;
    max: string;
    _createdAt: string;
    entertaiment: string[];
    _id: string;
    slug: {
      current: string;
    };
    _type: string;
    workingArea: string[];
    name: string;
    _updatedAt: string;
    servicesAndRoomAmenities: string[];
    bathroom: string[];
    roomFeatures: string[];
    dining: string[];
    _rev: string;
  }
};

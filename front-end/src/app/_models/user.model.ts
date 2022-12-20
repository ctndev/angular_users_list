export interface _name {
  title: string;
  first: string;
  last: string;
}

export interface _location {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  }
}

export interface _login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface _dob {
  date: Date;
  age: number;
}

export interface _registered {
  date: Date;
  age: number;
}

export interface _id {
  name: string;
  value: string;
}

export interface _picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface User {
  _id: string;
  gender: string;
  name: _name,
  location: _location,
  email: string;
  login: _login,
  dob: _dob,
  registered: _registered,
  phone: string;
  cell: string;
  id: _id,
  picture: _picture,
  nat: string;
}

export interface ResponseUsers {
  data: User[];
  total: number;
  page: number;
  last_page: number;
}

export interface UsersParameters {
  page: number;
  gender: string;
  search: string;
  state: string;
}

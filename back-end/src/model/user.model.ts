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
export class User {
  email: string;
  password: string;
  token: string;

  static newFromJSON(json: string): User {
    let user: User = null;
    try {
      user = new User(JSON.parse(json));
    } catch (e) {
      console.error('Invalid use JSON.', e);
    }
    return user;
  }

  constructor(obj: Object = {}){
    Object.assign(this, obj);
  }

}

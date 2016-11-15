export class User {
  email: string;
  password: string;
  token: string;

  constructor(obj: Object = {}){
    Object.assign(this, obj);
  }
}

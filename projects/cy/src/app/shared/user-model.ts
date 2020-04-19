export class UserModel {
  tz: string;
  name: string;

  constructor(data) {
    Object.assign(this, data);
  }
}

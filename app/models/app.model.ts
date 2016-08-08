import {Credentials} from "../vo/app.credentials";

export class AppModel{
  public credentials:Credentials = new Credentials();

  constructor(){
    this.credentials = new Credentials();
  }
}

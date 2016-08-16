import {Injectable} from "@angular/core";
import {AppModel} from "../models/app.model";
import {Credentials} from "../vo/app.credentials";
import {Http, Headers, RequestOptions, RequestMethod, Request} from "@angular/http";
import Any = jasmine.Any;
import {RequestArgs} from "@angular/http/src/interfaces";

@Injectable()
export class LoginService{
  private _http:Http;
  public loginModel:AppModel;

  constructor(public http:Http){
    this._http = http;
    this.loginModel = new AppModel();
  }

  login(credentials:Credentials){
    let headers = new Headers({ 'Content-Type': 'application/x-amf' });
    let options = new RequestOptions({ headers: headers });
    options.method = RequestMethod.Post;

    var loginData = {Target:"get_login_info",Content:[4,credentials.name,credentials.password,0,null,'']};

    this.http.post("http://glhd1.cogmed.com/ntgw/",JSON.stringify(loginData),options).subscribe();


    console.log("doLogin",credentials);
  }

  resHandler(e:Any){
    console.log("RESSSSS",e);
  }

  catchHandler(e:Any){
    console.log("AAAAAAAA",e);
  }
}

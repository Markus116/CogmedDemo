import {Component} from '@angular/core';
import {LoginService} from "../services/app.login-service";
import {Credentials} from "../vo/app.credentials";

@Component({
    selector: 'LoginView',
    template:
      `<div style="margin: auto; width: 30%;">
          <div  [hidden]="submitted">
              <h1>Cogmed Login</h1>
              <form (ngSubmit)="service.login(credentials)" #heroForm="ngForm" autocomplete="off" 
              style="margin: auto; width: 80%">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" class="form-control" required
                    [(ngModel)]="credentials.name"
                      name="name"  #name="ngModel" >              
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" class="form-control"
                    [(ngModel)]="credentials.password" name="password" >
                  TODO: remove this: {{credentials.name}} {{credentials.password}}
                </div>

                <button type="submit" class="btn btn-default" style="width: 50%;" 
                        [disabled]="!heroForm.form.valid">Submit</button>
              </form>
              
          </div>
      </div>`
})

export class LoginViewComponent{
  service:LoginService;
  credentials:Credentials = new Credentials();

  constructor(public loginService:LoginService) {
    this.service = loginService;
    console.log(loginService.loginModel.credentials);
  }
}


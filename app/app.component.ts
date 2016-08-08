import { Component } from '@angular/core';
import {LoginViewComponent} from "./views/app.loginView";

@Component({
    selector: 'AppView',
    directives:[LoginViewComponent],
    template: '<LoginView></LoginView>'
})
export class AppComponent { }

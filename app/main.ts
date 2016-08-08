import {bootstrap}    from '@angular/platform-browser-dynamic';
import {disableDeprecatedForms, provideForms } from '@angular/forms';

import {HTTP_PROVIDERS} from '@angular/http';

import {AppComponent} from './app.component';
import {LoginService} from "./services/app.login-service";

bootstrap(AppComponent, [HTTP_PROVIDERS,disableDeprecatedForms(), provideForms(), LoginService]);

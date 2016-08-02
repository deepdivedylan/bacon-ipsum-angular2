import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {HTTP_PROVIDERS} from "@angular/http";

@Component({
	selector: 'bacon-app',
	templateUrl: './templates/splash.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [HTTP_PROVIDERS]
})

export class AppComponent {}

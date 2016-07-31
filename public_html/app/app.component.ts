import { Component } from '@angular/core';
import {Routes, Router, ROUTER_DIRECTIVES} from "@angular/router";
import {HTTP_PROVIDERS} from "@angular/http";
import {BaconComponent} from "./components/bacon-component";

@Component({
	selector: 'bacon-app',
	templateUrl: './app/templates/splash.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [HTTP_PROVIDERS]
})

@Routes([
	{path: "/bacon/", component: BaconComponent},
	{path: "/bacon/:id", component: BaconComponent},
	{path: "/bacon/:type", component: BaconComponent},
	{path: "/bacon/:type/:id", component: BaconComponent},
])

export class AppComponent {
	constructor(private router: Router) {}
}

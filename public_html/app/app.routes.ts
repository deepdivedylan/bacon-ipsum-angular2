import {provideRouter, RouterConfig, ROUTER_DIRECTIVES} from "@angular/router";
import {BaconComponent} from "./components/bacon-component";

export const routes: RouterConfig = [
	{path: "/bacon/", component: BaconComponent},
	{path: "/bacon/:id", component: BaconComponent},
	{path: "/bacon/:type", component: BaconComponent},
	{path: "/bacon/:type/:id", component: BaconComponent},
];

export const appRouterProviders = [
	provideRouter(routes)
];

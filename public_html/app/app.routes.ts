import {provideRouter, RouterConfig, ROUTER_DIRECTIVES} from "@angular/router";
import {BaconComponent} from "./components/bacon-component";

export const routes: RouterConfig = [
	{path: "/bacon/", component: BaconComponent},
	{path: "/bacon/:paragraphs", component: BaconComponent},
	{path: "/bacon/:type/:paragraphs", component: BaconComponent}
];

export const appRouterProviders = [
	provideRouter(routes)
];

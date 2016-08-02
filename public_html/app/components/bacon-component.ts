import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from '@angular/router';
import {BaconService} from "../services/bacon-service";
import {Bacon} from "../classes/bacon";

@Component({
	templateUrl: "../templates/bacon.html",
	providers: [BaconService]
})

export class BaconComponent implements OnInit {
	constructor(private baconService: BaconService, private route: ActivatedRoute, private router: Router) {}

	baconPlate: Bacon[];
	errorMessage: string;
	paragraphs: number;
	type: string;

	ngOnInit() {
		this.route.params.subscribe(
			params => {
				this.paragraphs = +params["paragraphs"];
				this.type = params["type"];
				this.getBacon();
			}
		);
	}

	getBacon() {
		if(this.paragraphs !== undefined && this.type !== undefined) {
			this.baconService.getBaconByParagraphsAndType(this.paragraphs, this.type)
				.subscribe(
					Bacon => {
						this.baconPlate = Bacon;
					},
					error => this.errorMessage = error
				);
		} else if(this.paragraphs === undefined && this.type !== undefined) {
			this.baconService.getBaconByType(this.type)
				.subscribe(
					Bacon => {
						this.baconPlate = Bacon;
					},
					error => this.errorMessage = error
				);
		} else if(this.paragraphs !== undefined && this.type === undefined) {
			this.baconService.getBaconByParagraphs(this.paragraphs)
				.subscribe(
					Bacon => {
						this.baconPlate = Bacon;
					},
					error => this.errorMessage = error
				);
		} else {
			this.baconService.getBacon()
				.subscribe(
					Bacon => {
						this.baconPlate = Bacon;
					},
					error => this.errorMessage = error
				);
		}
	}
}

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Bacon} from "../classes/bacon";

@Injectable()
export class BaconService {
	constructor(private http: Http) {}

	private baconUrl = "https://baconipsum.com/api/";

	getBacon(): Observable<Bacon[]> {
		var url = this.baconUrl + "?type=meat-and-filler";
		return(this.getBaconByUrl(url));
	}

	getBaconByParagraphs(paragraphs: number) : Observable<Bacon[]> {
		var url = this.baconUrl + "?type=meat-and-filler&paras=" + paragraphs;
		return(this.getBaconByUrl(url));
	}

	getBaconByParagraphsAndType(paragraphs: number, type: string) : Observable<Bacon[]> {
		var url = this.baconUrl + "?type=" + type + "&paras=" + paragraphs;
		return(this.getBaconByUrl(url));
	}

	getBaconByType(type: string): Observable<Bacon[]> {
		var url = this.baconUrl + "?type=" + type;
		return(this.getBaconByUrl(url));
	}

	private getBaconByUrl(url: string) {
		return(this.http.get(url)
		.map(this.extractData)
		.catch(this.handleError));
	}

	private extractData(response: Response) {
		if(response.status < 200 || response.status >= 300) {
			throw(new Error("Bad response status: " + response.status))
		}
		return(response.json());
	}

	private handleError(error:any) {
		let message = error.message;
		console.log(message);
		return(Observable.throw(message));
	}
}

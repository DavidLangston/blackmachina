import { Injectable, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class LocationService { 

	url: string;
	lat: any;
	lng: any;
	coordinates: any;

	constructor(private http: Http) {}

	getLocation(url: string) {
		return this.http.get(url);
	}

	getPosition() {
		if (navigator.geolocation) {
			return new Promise(function (resolve, reject) {
				navigator.geolocation.getCurrentPosition(resolve, reject);
			});
		} else {
	    	return new Promise(resolve => resolve({}));
    	}
	}

}

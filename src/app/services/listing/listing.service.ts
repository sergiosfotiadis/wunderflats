import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {of} from 'rxjs/observable/of';
import {HttpClient, HttpErrorResponse, HttpResponse, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {isNullOrUndefined} from "util";

@Injectable()
export class ListingService {

  private urlEndpoint = "https://wunderflats-api.glitch.me/listings/";


  constructor(private http: HttpClient) {
  }

  getListings(): Observable<any> {

    // Make the API call using the new parameters.
    return this.http
        .get(this.urlEndpoint, {observe: 'response'})
        .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    // return an error object with message, caller must handle it
    //   return of<any>({"error": err.error.error.message});
      return of<any>(err.error);
  }
}

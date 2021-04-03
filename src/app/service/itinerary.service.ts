import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Itinerary } from '../Itinerary';

@Injectable({
  providedIn: 'root',
})
export class ItineraryService {
  configUrl = 'http://localhost:5000/api' + '/itineraries';

  constructor(private http: HttpClient) {}

  // salesman: manName  fromdate:yyyyMMdd todate:yyyyMMdd
  getReport(query) {
    const url = `${this.configUrl}/report`; // DELETE api/heroes/42
    return this.http.get(url); // TODO handle Error
  }

  getItinerary(id: string): Observable<Itinerary> {
    const url = `${this.configUrl}/${id}`; // DELETE api/heroes/42
    return this.http.get<Itinerary>(url); // TODO handle Error
  }

  getItineraries(): Observable<Itinerary[]> {
    return this.http.get<Itinerary[]>(this.configUrl);
  }

  addItinerary(itinerary: Itinerary): Observable<Itinerary|any> {
    return this.http.post(this.configUrl, itinerary);
  }
}

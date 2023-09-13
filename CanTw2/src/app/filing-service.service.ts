import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilingServiceService {

  constructor(private http: HttpClient) { }

  getFilingData(cik: string) {
    return this.http.get(`https://data.sec.gov/submissions/CIK0001411579.json`);

  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class DataService {
  api = environment.apiURL;
  return;
  constructor(private http: HttpClient) {
  }
  accessCount() {
    return this.http.get(`${this.api}/Form/AccessCount/Sim`);
  }
  leadCount():Observable<any> {
    return this.http.get(`${this.api}/Form/LeadCount`).pipe(
      map(response => response as [])
    );
  }
  qualifiedCount():Observable<any> {
    return this.http.get(`${this.api}/Form/QualifiedCount`).pipe(
      map(response => response as [])
    );
  }
  visitsCount():Observable<any> {
    return this.http.get(`${this.api}/Form/VisitsCount`).pipe(
      map(response => response as [])
    );
  }
  /* getVaccineKPIByGender():Observable<any>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('company')}`});
      let options = { headers: headers };
      
    return this.HttpClient.get('/api/Dashboard/GetDashboardsKpiVaccineByGender',options).pipe
    (
      map(response => response as [])
    );
  } */

/*   getTeste() {
    this.http.get(`${this.api}/Form/Authenticated`).subscribe(response => {
      this.return = response;
    }, error => {
      console.log(error);
    });
  } */
}
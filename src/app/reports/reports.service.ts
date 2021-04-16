import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Report} from '../shared/interfaces/report';

@Injectable()
export class ReportsService {
  constructor(private http: HttpClient) {
  }

  public getReports(): Observable<Report[]> {
    return this.http.get<Report[]>(`${environment.apiUrl}/reports`);
  }
}
